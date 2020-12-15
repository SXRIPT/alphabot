## Önkoşullar

- **Tarayıcılar**: yalnızca en son Chrome / Chromium kararlılığı desteklenir
- **Compute Engine Örneği**: We used CentOS as our distro
    **RAM**: Minimum 512MB, Önerilen 1024MB
     - **HDD**: Minimum 1 GB
- Twitch bot hesabı
- CircleCI hesabı

!> Botunuz için **ayrı** bir hesaba ihtiyacınız var, bot **alışkanlık** sizin
    yayıncı hesabı


# Compute Engine Kurulumu

Örneğinize bağlandığınızda yapmak istediğiniz ilk şey, güncellemeleri kontrol etmek ve yum'u güncellemektir.

```
yum check-update
yum -y update
```

## Sudo ayrıcalıklarına sahip, root olmayan kullanıcı oluşturun

Şimdi aşağıdakileri root olarak yapmalıyız:

```
adduser alphabot
```

## Kullanıcı alfabe için şifre belirleyin

```
passwd alphabot
```

## sudo ayrıcalıkları verin

```
usermod -aG wheel alphabot
```

## circleci için ssh anahtarları oluşturun

```
ssh-keygen -m pem -t rsa
```

Artık ssh anahtarları oluşturulduğuna göre özel anahtarı circleci'ye kopyalayın.
ve genel anahtarı google buluttaki sanal makinenize kopyalayın.
İşiniz bittiğinde genel ve özel anahtarı .ssh dizininden silin.

## SSH girişini kök olarak devre dışı bırakın

Kök olarak ssh oturumunu devre dışı bırakmak için, aşağıdaki PermitRootLogin satırını kaldırın ve PermitRootLogin no. Vim'de daha hızlı arama yapmak için '/ PermitRootLogin' kullanabilirsiniz. Güvenli bir şekilde işiniz bittiğinde değişiklikler ve şimdi yeniden yüklemeniz gerekecek.

```
vim /etc/ssh/sshd_config
```

```
systemctl reload sshd
```

## Güvenlik Duvarı Kurulumu

Compute Engine kullanıyorsanız, varsayılan olarak google tarafından zaten kurulduğu için güvenlik duvarını kurmanız gerekmez.

## Kurulum Takas dosyası

```
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
sh -c 'echo "/swapfile none swap sw 0 0" >> /etc/fstab'
```

## Kurulum penceresi

first install [containerd.io](http://containerd.io/) without you will not be able to install docker.

```
yum install -y [https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm)
```

Artık docker'ı yükleyebilir ve kullanıcı alfabotunu docker grubuna ekleyebilirsiniz, böylece kullanıcı sudo kullanmadan docker komutlarını çalıştırabilir.

```
curl -fsSL [https://get.docker.com/](https://get.docker.com/) | sh
sudo usermod -aG docker alphabot
sudo systemctl start docker
sudo systemctl enable docker
```

## GIT Kurulumu

Öncelikle git'i kurmanız gerekecek, bunu aşağıdaki komutla yapabilirsiniz.

```
yum install -y git
```

Şimdi, daha sonra kimlik doğrulaması için kullanılacak kullanıcı adını ve e-postayı git'e ekleyeceğiz.

```
git config --global user.name <username>
git config --global user.email <email>
```

Şimdi SSH üzerinden kimlik doğrulaması yapmak için git için SSH anahtarları oluşturmamız gerekiyor.

```
ssh-keygen -t rsa -b 4096 -C <email>
```

### SSH anahtarınızı ssh-agent'a ekleme

- Start the ssh-agent in the background.

```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

- SSH özel anahtarınızı SSH aracısına ekleyin. Anahtarınızı farklı bir adla oluşturduysanız veya farklı bir ada sahip mevcut bir anahtar ekliyorsanız, komuttaki id_rsa'yı özel anahtar dosyanızın adıyla değiştirin.

```
$ ssh-add ~/.ssh/id_rsa
```

Yukarıdaki adımları izlediğinizde, genel SSH anahtarını GitHub'a ekleyin ve işlem yapmanız gerekir. GitHub'da Ayarlar → SSH ve GPG anahtarları → Yeni SSH anahtarı altında SSH anahtarınızı ekleyebilirsiniz.

## Kurulum DNS girişi
[Google Cloud Hızlı Başlangıç Kılavuzu](https://cloud.google.com/dns/docs/quickstart)

<br/><br/>

# Dağıtım Komut Dosyası

Bir dosya oluşturun ve aşağıdaki komut dosyasını ekleyin.:rocket:

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

# Nginx Kurulumu

### SE Linux'un kurulu olup olmadığını kontrol edin

Aşağıdaki komut dönerse, SE Linux zorlama kurulursa ve herhangi bir ekstra adım yapmanız gerekmez.

```
getenforce
```

### SE Linux için bool değişkenlerini ayarlayın

```
setsebool -P httpd_can_network_connect on
setsebool -P httpd_enable_homedirs on
```

### Aşağıdakileri yükle

Nginx'i kurabilmek için **epel sürümüne** ihtiyacımız olacak

```
yum install -y epel-release
yum install -y nginx
```

Şimdi nginx'i kurduğumuza göre başlatabiliriz. İkinci komut, her şeyin yolunda gidip gitmediğini görmek için kullanılır.

```
systemctl start nginx
systemctl status nginx
```

Sistem yeniden başlatıldıktan sonra bile nginx'in yeniden başlatılmasını sağlamak için aşağıdakileri yapmamız gerekecek:

```
systemctl enable nginx
```

Kendi yapılandırmamızı yazmak için, altında bulunması gereken kendi nginx yapılandırma dosyamızı oluşturacağız. */etc/nginx/conf.d/alphabot.conf*

Yapılandırmamızı yazdıktan sonra, yazdığımız yapılandırmanın işe yarayıp yaramadığını kontrol etmemiz gerekir, bunu kolay bir nginx komutuyla başarabiliriz

```
nginx -t
```

## HTTPS Kurulumu

Şimdi kullanacağımız sertifikaları oluşturmak için harika bir araç var.

```
yum -y install certbot
```

Artık certbot ile sertifika talebinde bulunabileceğiz ve bizim için işin zor kısmını certbot yapacak.

```
certbot certonly --standalone -d <DOMAIN>
```

Şimdi bir şey olması durumunda sertifikanızın bir yedeğini oluşturmalıyız

```
cp -r /etc/letsencrypt/ /home/alphabot
tar czf letsencrypt.tar.gz letsencrypt/
```

Şimdi neredeyse her şeyi yaptık, yapılacak son şey nginx yapılandırmamızı yalnızca https trafiğine izin verecek şekilde düzenlemek olacaktır. Mozilla, kullanacağımız harika bir ücret üretti [https://ssl-config.mozilla.org/](https://ssl-config.mozilla.org/)

### Sertifikaları otomatik olarak yenilemek için Crontab'ı kurun

İlk önce crontab'ı başlatmalı ve etkinleştirmeliyiz, böylece makine yeniden başlatıldığında otomatik olarak başlayacaktır.

```bash
sudo systemctl start crond.service
sudo systemctl enable crond.service
```

`Sudo crontab -e` ile bir crontab ekleyebilirsiniz. Aşağıdaki crontab, SSL sertifikalarını her Pazartesi sabah 6: 30'da yenilemeyi deneyecek, eğer başarıyla yenilenirse, nginx'i yeniden yükleyecektir.

```bash
30 6 * * 1 certbot renew -n -q --pre-hook "systemctl stop nginx" --deploy-hook "systemctl start nginx"
```

Son yapılandırmam şöyle görünüyor:

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

# Redis Kurulumu

Redis kurulumu için aşağıdaki adımları izlemenizi öneririz.<a href="https://redis.io/topics/quickstart">Redis Hızlı Başlangıç Kılavuzu</a>.

# .env Kurulum
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
API kullanıcı kimlik bilgilerini şifrelemek ve şifresini çözmek için pasaportla birlikte kullanılan jetondur. Bir şifre oluşturucu kullanabilir veya klavyenizdeki tüm düğmelere basabilirsiniz. :clown_face:. 

## Redis Kimlik Bilgileri

### REDIS_PORT
Redis kurulumunu izlediyseniz, redis bağlantı noktası 6379 olmalıdır.

### REDIS_HOST
Redis kurulumunu izlediyseniz, redis ana bilgisayarı 127.0.0.1 olmalıdır.

### REDIS_PASSWORD
Redis için bir parola belirlemediyseniz, bunu .env dosyanızdan kaldırabilirsiniz.

## Twitch Kimlik Bilgileri

1. Bot twitch hesabınızla <a href="https://dev.twitch.tv/"> dev.twitch.tv </a> girişine gidin.
2. Konsolunuza Basın
3. Ardından Uygulama oluştur <br/> seçeneğine basın
  <img src="../_media/twitchRegisterApp.png" >
4. Uygulamanın adını girin ve oluştur tuşuna basın <br/>
  <img src= "../_media/twitchCreateApp.png" >
5. Şimdi, oluşturduğunuz uygulamada <br/> ** yönet ** seçeneğine basın
  <img src = "../_media/twitchManageApp.png">

### MÜŞTERİ GİZLİ
Uygulamanızda ** yönet ** seçeneğine bastıktan sonra, Yeni Gizli'ye basın ve kopyalayın.

<img src ="../_media/twitchClientSecret.png" >


### MÜŞTERİ KİMLİĞİ
Uygulamanızda ** yönet ** seçeneğine bastıktan sonra Müşteri kimliğini kopyalayın.

<img src ="../_media/twitchClientID.png">
<br/> <br/> <br/> <br/>

# CircleCI Kurulumu

CircleCI'de kodu içeren GitHub Deposunu bağlayın. Proje Ayarları altında Github SSH anahtarını ekleyin ve Compute Eninge'nizden bir SSH anahtarı ekleyin.