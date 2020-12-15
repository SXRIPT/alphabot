## Предварительные требования

- **Браузеры**: поддерживаются только последние стабильные версии Chrome / Chromium.
- **Экземпляр Compute Engine**: мы использовали CentOS в качестве нашего дистрибутива.
     - **RAM**: минимум 512 МБ, рекомендуется 1024 МБ
     - **HDD**: минимум 1 ГБ
- аккаунт бота Twitch
- Аккаунт CircleCI

!> Вам понадобится **отдельный** аккаунт для вашего бота, бот **небудет** работать с вашим
    аккаунт вещателя

# Настройка Compute Engine

Первое, что вы хотите сделать при подключении к своему экземпляру, - это проверить наличие обновлений и обновить yum.

```
yum check-update
yum -y update
```

## Создать пользователя без полномочий root с привилегиями sudo

Теперь нам нужно сделать следующее как root:

```
adduser alphabot
```

## Установить пароль для пользователя alphabot

```
passwd alphabot
```

## Предоставьте sudo привилегии

```
usermod -aG wheel alphabot
```

## Генерация ключей ssh для circleci

```
ssh-keygen -m pem -t rsa
```

Теперь, когда ключи ssh созданы, скопируйте закрытый ключ в circleci
и скопируйте открытый ключ на свою виртуальную машину в облаке Google.
Когда вы закончите, удалите открытый и закрытый ключи из каталога .ssh.

## Отключить вход по SSH как root

Чтобы отключить вход по ssh как root, раскомментируйте следующую строку PermitRootLogin и установите для нее PermitRootLogin no. Для более быстрого поиска в vim вы можете использовать / PermitRootLogin. Когда вы закончите, сохраните изменения, и теперь вам придется перезагрузить.

```
vim /etc/ssh/sshd_config
```

```
systemctl reload sshd
```

## Настроить брандмауэр

Если вы используете Compute Engine, вам не нужно настраивать брандмауэр, поскольку он уже настроен Google по умолчанию.

## Настройка файла подкачки

```
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
sh -c 'echo "/swapfile none swap sw 0 0" >> /etc/fstab'
```

## Настройка докера

сначала установите [containerd.io](http://containerd.io/), без которого вы не сможете установить докер.

```
yum install -y [https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm)
```

Теперь вы можете установить докер и добавить пользователя alphabot в группу докеров, чтобы пользователь мог выполнять команды докера без использования sudo.

```
curl -fsSL [https://get.docker.com/](https://get.docker.com/) | sh
sudo usermod -aG docker alphabot
sudo systemctl start docker
sudo systemctl enable docker
```

## Настройка GIT

Сначала вам нужно установить git, вы можете сделать это с помощью следующей команды.

```
yum install -y git
```

Теперь мы добавим имя пользователя и адрес электронной почты в git, которые будут использоваться для аутентификации позже.

```
git config --global user.name <username>
git config --global user.email <email>
```

Теперь для аутентификации через SSH нам нужно сгенерировать SSH-ключи для git.

```
ssh-keygen -t rsa -b 4096 -C <email>
```

### Добавление вашего SSH-ключа к ssh-agent

- Start the ssh-agent in the background.

```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

- Добавьте свой закрытый ключ SSH к SSH-агенту. Если вы создали свой ключ с другим именем или если вы добавляете существующий ключ с другим именем, замените id_rsa в команде именем вашего файла закрытого ключа.

```
$ ssh-add ~/.ssh/id_rsa
```

Выполнив указанные выше действия, добавьте открытый ключ SSH в GitHub, и все готово. Вы можете добавить свой SSH-ключ на GitHub в разделе Настройки → SSH и ключи GPG → Новый ключ SSH.

## Настройка записи DNS
[Краткое руководство по Google Cloud](https://cloud.google.com/dns/docs/quickstart)

<br/><br/>

# Сценарий развертывания

Создайте файл и вставьте скрипт ниже. :rocket:

```bash
#!/bin/bash

echo "Pulling from git"
cd ~/git/alphabot
git stash push --include-untracked
git stash drop
git pull

if [ $(docker ps -f name=alpha-blue -q) ]
then
    docker rm $(docker stop $(docker ps -q -f name=alpha-green))
    ENV="green"
    OLD="blue"
	  PORT="8081"
else
	docker rm $(docker stop $(docker ps -q -f name=alpha-blue))
    ENV="blue"
    OLD="green"
    PORT="8080"
fi

echo "Untaging current image"
docker tag alphabot:latest alphabot:old
docker rmi alphabot:latest

echo "Building new image"
docker build -t alphabot ~/git/alphabot

echo "Starting "$ENV" container"
docker run -itd -e PORT=$PORT -p $PORT:$PORT --restart unless-stopped --name=alpha-$ENV alphabot:latest

echo "Waiting..."
sleep 5s

echo "Stopping "$OLD" container"
docker rm $(docker stop $(docker ps -q -f name=alpha-$OLD))

echo "Removing old image"
docker rmi alphabot:old
```

# Настройка Nginx

### Проверить, установлен ли SE Linux

если следующая команда возвращает принудительное применение SE, Linux установлен и вам не нужно будет выполнять никаких дополнительных действий.

```
getenforce
```

### Установить переменные типа bool для SE Linux

```
setsebool -P httpd_can_network_connect on
setsebool -P httpd_enable_homedirs on
```

### Установите следующее

Чтобы установить nginx, нам понадобится **epel-release**

```
yum install -y epel-release
yum install -y nginx
```

Теперь, когда мы установили nginx, мы можем его запустить. Вторая команда используется для проверки, все ли работает нормально.

```
systemctl start nginx
systemctl status nginx
```

Чтобы перезапустить nginx даже после перезагрузки системы, нам нужно будет сделать следующее:

```
systemctl enable nginx
```

Чтобы написать нашу собственную конфигурацию, мы создадим наш собственный файл конфигурации nginx, который должен быть расположен в */etc/nginx/conf.d/alphabot.conf*

После того, как мы написали нашу конфигурацию, нам нужно проверить, работает ли она, мы можем добиться этого с помощью простой команды nginx.

```
nginx -t
```

## Настройка HTTPS

Есть отличный инструмент для создания сертификатов, которым мы сейчас воспользуемся.

```
yum -y install certbot
```

Теперь мы сможем запросить сертификат с помощью certbot, и certbot сделает за нас всю тяжелую работу.

```
certbot certonly --standalone -d <DOMAIN>
```

Теперь мы должны создать резервную копию вашего сертификата на случай, если что-то случится.

```
cp -r /etc/letsencrypt/ /home/alphabot
tar czf letsencrypt.tar.gz letsencrypt/
```

Сейчас мы сделали почти все, последнее, что нужно сделать, это отредактировать нашу конфигурацию nginx, чтобы разрешить только https-трафик. Mozilla создала отличную возможность, которую мы будем использовать [https://ssl-config.mozilla.org/](https://ssl-config.mozilla.org/)

### Настройте Crontab для автоматического обновления сертификатов

Сначала нам нужно запустить crontab и включить его, чтобы он запускался автоматически при перезагрузке машины.

```bash
sudo systemctl start crond.service
sudo systemctl enable crond.service
```

С помощью `sudo crontab -e` вы можете добавить файл crontab. Следующий crontab будет пытаться обновить сертификаты SSL каждый понедельник в 6:30 утра, если он был успешно обновлен, он перезагрузит nginx.

```bash
30 6 * * 1 certbot renew -n -q --pre-hook "systemctl stop nginx" --deploy-hook "systemctl start nginx"
```

Моя последняя конфигурация выглядит так:

```bash
upstream alphabot {
   ip_hash;
   server localhost:8080;
   server localhost:8081;
}

server {
   listen       80;
   listen       [::]:80;

   return 301 https://$host$request_uri;
}

server {
    listen 80;
    server_name <SERVER_IP>;

    return 301 https://<DOMAIN>$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name <DOMAIN>;

    ssl_certificate /etc/letsencrypt/live/<DOMAIN>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<DOMAIN>/privkey.pem;
    ssl_session_timeout 1d;
    ssl_session_cache shared:MozSSL:10m;  # about 40000 sessions
    ssl_session_tickets off;

    # curl https://ssl-config.mozilla.org/ffdhe2048.txt > /path/to/dhparam
    # ssl_dhparam /path/to/dhparam;

    # intermediate configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    # HSTS (ngx_http_headers_module is required) (63072000 seconds)
    #add_header Strict-Transport-Security "max-age=63072000; includeSubDomains" always;

    # OCSP stapling
    #ssl_stapling on;
    #ssl_stapling_verify on;

    # verify chain of trust of OCSP response using Root CA and Intermediate certs
    #ssl_trusted_certificate /path/to/root_CA_cert_plus_intermediates;

    # replace with the IP address of your resolver
    resolver 1.1.1.1;

    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    location / {
       proxy_pass "http://alphabot/";
    }

    error_page 404 /404.html;
       location = /40x.html {
    }

    error_page 500 502 503 504 /50x.html;
       location = /50x.html {
    }
}
```

# Настройка Redis

Для настройки Redis мы рекомендуем вам следовать <a href="https://redis.io/topics/quickstart"> Руководству по быстрому запуску Redis </a>.

# .env Setup
```
DB_CONNECTION=<MONGODB_CONNECTION_STRING>
TOKEN_SECRET=<TOKEN_SECRET>
REDIS_PORT=<PORT>
REDIS_HOST=<HOST>
REDIS_PASSWORD=<PASSWORD>
CLIENT_SECRET=<SECRET>
CLIENT_ID=<ID>
REFRESH_TOKEN=<REFRESH_TOKEN>
ACCESS_TOKEN=<ACCESS_TOKEN>
```

## TOKEN_SECRET
Маркер, который используется с паспортом для шифрования и дешифрования учетных данных пользователя API. Вы можете использовать генератор паролей или просто нажимать все кнопки на клавиатуре: clown_face :.

## Учетные данные Redis

### REDIS_PORT
Порт redis должен быть 6379, если вы следовали настройке redis.

### REDIS_HOST
Хост redis должен быть 127.0.0.1, если вы следовали настройке redis.

### REDIS_PASSWORD
Вы можете удалить это из вашего .env файла, если вы не установили пароль для Redis.

## Учетные данные Twitch

1. Перейдите на страницу <a href="https://dev.twitch.tv/"> dev.twitch.tv </a> и войдите в свою учетную запись бота Twitch.
2. Нажмите вашу консоль.
3. Затем нажмите "Создать приложение" <br/>.
  <img src="../_media/twitchRegisterApp.png" >
4. Введите название приложения и нажмите "Создать" <br/>
   <img src= "../_media/twitchCreateApp.png" >
5. Теперь нажмите ** управление ** в созданном вами приложении <br/>
  <img src = "../_media/twitchManageApp.png">

### CLIENT_SECRET
После того, как вы нажали ** управлять ** в своем приложении, нажмите Новый секрет и скопируйте его.

<img src ="../_media/twitchClientSecret.png" >


### ID КЛИЕНТА
После того, как вы нажали ** управление ** в своем приложении, скопируйте идентификатор клиента.

<img src ="../_media/twitchClientID.png">
<br/> <br/> <br/> <br/>

# Настройка CircleCI

На CircleCI добавьте репозиторий GitHub, содержащий код. В разделе Project Settings добавьте SSH-ключ Github и SSH-ключ из вашего Compute Eninge.