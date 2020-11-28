## Prerrequisitos

- **Navegadores**: solo se admiten los últimos Chrome / Chromium estable
- **Instancia de Compute Engine**: usamos CentOS como nuestra distribución
    - **RAM**: Mínimo 512 MB, recomendado 1024 MB
    - **HDD**: Mínimo 1GB
- Cuenta de bot de Twitch
- Cuenta CircleCI

!> Necesitas **cuenta** separada para tu bot, el bot **no** funcionará en tu cuenta de emisora

# Compute Engine Preparar

Lo primero que debe hacer cuando se conecta a su instancia es buscar actualizaciones y actualizar yum.

```
yum check-update
yum -y update
```

## Crear un usuario no root con privilegios sudo

Ahora tenemos que hacer lo siguiente como root:

```
adduser alphabot
```

## Establecer contraseña para el usuario alphabot

```
passwd alphabot
```

## Dar privilegios de sudo

```
usermod -aG wheel alphabot
```

## Generar claves ssh para circleci

```
ssh-keygen -m pem -t rsa
```

Ahora que se generan las claves ssh, copie la clave privada en circleci
y copie la clave pública a su máquina virtual en Google Cloud.
Cuando haya terminado, elimine la clave pública y privada del directorio .ssh.

## Deshabilitar el inicio de sesión SSH como root


Para deshabilitar el inicio de sesión ssh como root, descomente la siguiente línea PermitRootLogin y configúrelo en PermitRootLogin no. Para buscar más rápido en vim, puede usar '/ PermitRootLogin'. Cuando hayas terminado, guarda los cambios y ahora tendrás que volver a cargar.

```
vim /etc/ssh/sshd_config
```

```
systemctl reload sshd
```

## Configurar firewall


Si está utilizando Compute Engine, no tendrá que configurar el firewall, ya que Google ya lo configura de forma predeterminada.

## Configurar archivo de intercambio

```
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
sh -c 'echo "/swapfile none swap sw 0 0" >> /etc/fstab'
```

## Configurar docker

primero instale [containerd.io] (http://containerd.io/) sin que no pueda instalar Docker.

```
yum install -y [https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm)
```

Ahora puede instalar la ventana acoplable y agregar el usuario alphabot al grupo de la ventana acoplable para que el usuario pueda ejecutar los comandos de la ventana acoplable sin usar sudo.

```
curl -fsSL [https://get.docker.com/](https://get.docker.com/) | sh
sudo usermod -aG docker alphabot
sudo systemctl start docker
sudo systemctl enable docker
```

## Configurar Git

Primero tendrás que instalar git, puedes hacer esto con el siguiente comando.

```
yum install -y git
```

Ahora agregaremos el nombre de usuario y el correo electrónico a git que se usará para autenticarse más adelante.

```
git config --global user.name <username>
git config --global user.email <email>
```

Ahora, para autenticarnos a través de SSH, necesitamos generar claves SSH para git.

```
ssh-keygen -t rsa -b 4096 -C <email>
```

### Agregar su clave SSH al ssh-agent

- Inicie ssh-agent en segundo plano.

```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

- 
Agregue su clave privada SSH al agente SSH. Si creó su clave con un nombre diferente, o si está agregando una clave existente que tiene un nombre diferente, reemplace id_rsa en el comando con el nombre de su archivo de clave privada.

```
$ ssh-add ~/.ssh/id_rsa
```


Cuando siguió los pasos anteriores, agregue la clave SSH pública a GitHub y debería haber terminado. Puede agregar su clave SSH en GitHub en Configuración → Claves SSH y GPG → Nueva clave SSH

## Configurar entrada DNS
[Guía de inicio rápido de Google Cloud](https://cloud.google.com/dns/docs/quickstart)

<br/><br/>

# Script de implementación

Cree un archivo e inserte el siguiente script. :rocket:

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

# Configuración de Nginx

### Compruebe si SE Linux está instalado

si el siguiente comando devuelve la aplicación de SE Linux está instalado y no tendrá que realizar ningún paso adicional.

```
getenforce
```

### Establecer variables bool para SE Linux

```
setsebool -P httpd_can_network_connect on
setsebool -P httpd_enable_homedirs on
```

### Instalar siguiente

Para poder instalar nginx necesitaremos **epel-release**

```
yum install -y epel-release
yum install -y nginx
```

Ahora que instalamos nginx, podemos iniciarlo. El segundo comando se usa para ver si todo funcionó bien.

```
systemctl start nginx
systemctl status nginx
```

Para que nginx se reinicie incluso después de reiniciar el sistema, tendremos que hacer lo siguiente:

```
systemctl enable nginx
```


Para escribir nuestra propia configuración, crearemos nuestro propio archivo de configuración nginx que debe estar ubicado en * / etc / nginx / conf.d / alphabot.conf *

Después de escribir nuestra configuración, debemos verificar si la configuración que escribimos funciona, podemos lograr esto con un sencillo comando nginx

```
nginx -t
```

## Configurar HTTPS
Existe una gran herramienta para crear certificados que usaremos ahora.

```
yum -y install certbot
```

Ahora podremos solicitar un certificado con certbot y certbot hará el trabajo pesado por nosotros.
```
certbot certonly --standalone -d <DOMAIN>
```

Ahora deberíamos crear una copia de seguridad de nuestro certificado en caso de que ocurra algo

```
cp -r /etc/letsencrypt/ /home/alphabot
tar czf letsencrypt.tar.gz letsencrypt/
```

Hemos hecho casi todo ahora, lo último que debemos hacer será editar nuestra configuración de nginx para permitir solo el tráfico https. Mozilla ha creado un gran peaje que usaremos [https://ssl-config.mozilla.org/](https://ssl-config.mozilla.org/)

### Configurar Crontab para renovar certificados automáticamente

Primero tendremos que iniciar crontab y habilitarlo para que se inicie automáticamente al reiniciar la máquina.

```bash
sudo systemctl start crond.service
sudo systemctl enable crond.service
```

Con `sudo crontab -e` puede agregar un crontab. El siguiente crontab intentará renovar los certificados SSL todos los lunes a las 6:30 a. M. Si se renovó correctamente, volverá a cargar nginx.

```bash
30 6 * * 1 certbot renew -n -q --pre-hook "systemctl stop nginx" --deploy-hook "systemctl start nginx"
```

Mi configuración final se ve así:

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

# Configuración de Redis

Para la configuración de Redis, le recomendamos que siga la <a href="https://redis.io/topics/quickstart"> Guía de inicio rápido de Redis </a>.

# .env Preparar
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
Es el token que se utiliza con el pasaporte para cifrar y descifrar las credenciales de usuario de la API. Puedes usar un generador de contraseñas o simplemente presionar todos los botones de tu teclado: clown_face :.

## Credenciales de Redis

### REDIS_PORT
El puerto de redis debe ser 6379 si siguió la configuración de redis.

### REDIS_HOST
El host de redis debe ser 127.0.0.1 si siguió la configuración de redis.

### REDIS_PASSWORD
Puede eliminar esto de su archivo .env si no ha establecido una contraseña para redis.

## Credenciales de Twitch


1. Vaya a <a href="https://dev.twitch.tv/"> dev.twitch.tv </a> para iniciar sesión con su cuenta de bot twitch.
2. Presione su consola
3. Luego presione Crear aplicación <br/>
 <img src = "../_media/twitchRegisterApp.png" width = "40%" height = "40%">
4. Complete el nombre de la aplicación y presione crear <br/>
 <img src = "../_media/twitchCreateApp.png" width = "40%" height = "40%">
5. Ahora presione **administrar** en su aplicación creada <br/>
 <img src = "../_media/twitchManageApp.png" width = "40%" height = "40%">

### CLIENT_SECRET
Después de presionar **administrar** en su aplicación, presione Nuevo secreto y cópielo.

<img src = "../_media/twitchClientSecret.png" width = "40%" height = "40%">


### IDENTIFICACIÓN DEL CLIENTE
Después de presionar **administrar** en su aplicación, copie la identificación del cliente.

<img src = "../_media/twitchClientID.png" width = "40%" height = "40%">
<br/> <br/> <br/> <br/>

# Configuración de CircleCI

En CircleCI, conecte el repositorio de GitHub que contiene el código. En Configuración del proyecto, agregue la clave SSH de Github y agregue una clave SSH desde su Compute Eninge.