## Voraussetzungen

- **Browser**: Es werden nur die neuesten Chrome / Chromium-Stables unterstützt
- **Compute Engine Instanz**: Wir haben CentOS als unsere Distribution verwendet
     - **RAM**: Mindestens 512 MB, empfohlen 1024 MB
     - **HDD**: Mindestens 1 GB
- Bot-Konto zucken
- CircleCI-Konto

!> Du brauchst ein **separates** Konto für deinen Bot, Bot **funktioniert nicht** auf deinem
    Rundfunkkonto

# Compute Engine Setup

Das erste, was Sie tun möchten, wenn Sie eine Verbindung zu Ihrer Instanz herstellen, ist nach Updates zu suchen und yum zu aktualisieren.

```
yum check-update
yum -y update
```

## Benutzer ohne Rootberechtigung mit Sudo-Berechtigungen erstellen

Jetzt müssen wir als root Folgendes tun:

```
adduser alphabot
```

## Passwort für Benutzeralphabot festlegen

```
passwd alphabot
```

## Geben Sie Sudo-Berechtigungen

```
usermod -aG wheel alphabot
```

## Generiere SSH-Schlüssel für Circleci

```
ssh-keygen -m pem -t rsa
```

Nachdem die SSH-Schlüssel generiert wurden, kopieren Sie den privaten Schlüssel nach circleci
und kopieren Sie den öffentlichen Schlüssel auf Ihre virtuelle Maschine in der Google Cloud.
Wenn Sie fertig sind, löschen Sie den öffentlichen und den privaten Schlüssel aus dem .ssh-Verzeichnis.

## SSH-Login als root deaktivieren

Um die SSH-Anmeldung als Root zu deaktivieren, kommentieren Sie die folgende Zeile PermitRootLogin aus und setzen Sie sie auf PermitRootLogin Nr. Um in vim schneller zu suchen, können Sie '/ PermitRootLogin' verwenden. Wenn Sie mit den Änderungen fertig sind, müssen Sie sie neu laden.

```
vim /etc/ssh/sshd_config
```

```
systemctl reload sshd
```

## Firewall einrichten

Wenn Sie Compute Engine verwenden, müssen Sie die Firewall nicht einrichten, da sie standardmäßig bereits von Google eingerichtet wurde.

## Setup Swap-Datei

```
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
sh -c 'echo "/swapfile none swap sw 0 0" >> /etc/fstab'
```

## Docker einrichten

Installieren Sie zuerst [containerd.io](http://containerd.io/), ohne dass Sie Docker nicht installieren können.

```
yum install -y [https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm)
```

Jetzt können Sie Docker installieren und den Benutzeralphabot zur Docker-Gruppe hinzufügen, damit der Benutzer Docker-Befehle ohne Verwendung von sudo ausführen kann.

```
curl -fsSL [https://get.docker.com/](https://get.docker.com/) | sh
sudo usermod -aG docker alphabot
sudo systemctl start docker
sudo systemctl enable docker
```

## Setup GIT

Zuerst müssen Sie git installieren. Dies können Sie mit dem folgenden Befehl tun.

```
yum install -y git
```

Jetzt fügen wir den Benutzernamen und die E-Mail zu git hinzu, die später zur Authentifizierung verwendet werden.

```
git config --global user.name <username>
git config --global user.email <email>
```

Um sich nun über SSH zu authentifizieren, müssen wir SSH-Schlüssel für Git generieren.

```
ssh-keygen -t rsa -b 4096 -C <email>
```

### Hinzufügen Ihres SSH-Schlüssels zum SSH-Agenten

- Starten Sie den ssh-agent im Hintergrund.

```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

- Fügen Sie dem SSH-Agenten Ihren privaten SSH-Schlüssel hinzu. Wenn Sie Ihren Schlüssel mit einem anderen Namen erstellt haben oder wenn Sie einen vorhandenen Schlüssel mit einem anderen Namen hinzufügen, ersetzen Sie id_rsa im Befehl durch den Namen Ihrer privaten Schlüsseldatei.

```
$ ssh-add ~/.ssh/id_rsa
```

Wenn Sie die obigen Schritte ausgeführt haben, fügen Sie den öffentlichen SSH-Schlüssel zu GitHub hinzu, und Sie sollten fertig sein. Sie können Ihren SSH-Schlüssel auf GitHub unter Einstellungen → SSH- und GPG-Schlüssel → Neuer SSH-Schlüssel hinzufügen

## DNS-Eintrag einrichten
[Google Cloud-Kurzanleitung](https://cloud.google.com/dns/docs/quickstart)

<br/><br/>

# Bereitstellungsskript

Erstellen Sie eine Datei und fügen Sie das folgende Skript ein. :rocket:

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

# Nginx-Setup

### Überprüfen Sie, ob SE Linux installiert ist

Wenn der folgende Befehl zurückgegeben wird, wird erzwungen, dass SE Linux installiert ist, und Sie müssen keine zusätzlichen Schritte ausführen.

```
getenforce
```

### Bool-Variablen für SE Linux setzen

```
setsebool -P httpd_can_network_connect on
setsebool -P httpd_enable_homedirs on
```

### Installiere folgendes

Um nginx installieren zu können, benötigen wir **epel-release**

```
yum install -y epel-release
yum install -y nginx
```

Nachdem wir nginx installiert haben, können wir es starten. Der zweite Befehl wird verwendet, um festzustellen, ob alles einwandfrei funktioniert hat.

```
systemctl start nginx
systemctl status nginx
```

Damit Nginx auch nach dem Neustart des Systems neu gestartet werden kann, müssen wir Folgendes tun:

```
systemctl enable nginx
```

Um unsere eigene Konfiguration zu schreiben, erstellen wir unsere eigene Nginx-Konfigurationsdatei, die sich unter */etc/nginx/conf.d/alphabot.conf* befinden muss.

Nachdem wir unsere Konfiguration geschrieben haben, müssen wir überprüfen, ob die von uns geschriebene Konfiguration überhaupt funktioniert. Dies können wir mit einem einfachen Nginx-Komman erreichen

```
nginx -t
```

## HTTPS einrichten

Es gibt ein großartiges Tool zum Erstellen von Zertifikaten, das wir jetzt verwenden werden.

```
yum -y install certbot
```

Wir können jetzt ein Zertifikat mit certbot anfordern und certbot erledigt das schwere Heben für uns.

```
certbot certonly --standalone -d <DOMAIN>
```

Jetzt sollten wir eine Sicherungskopie Ihres Zertifikats erstellen, falls etwas passiert

```
cp -r /etc/letsencrypt/ /home/alphabot
tar czf letsencrypt.tar.gz letsencrypt/
```

Wir haben jetzt fast alles getan. Das Letzte, was wir tun müssen, ist, unsere Nginx-Konfiguration so zu bearbeiten, dass nur https-Verkehr zugelassen wird. Mozilla hat eine große Gebühr erhoben, die wir verwenden werden [https://ssl-config.mozilla.org/](http: //ssl-config.mozilla.org/)

### Richten Sie Crontab so ein, dass Zertifikate automatisch erneuert werden

Zuerst müssen wir crontab starten und aktivieren, damit es beim Neustart der Maschine automatisch startet.

```bash
sudo systemctl start crond.service
sudo systemctl enable crond.service
```

Mit `sudo crontab -e` können Sie eine crontab hinzufügen. Die folgende Crontab versucht, die SSL-Zertifikate jeden Montag um 6:30 Uhr zu erneuern. Bei erfolgreicher Erneuerung wird nginx neu geladen.

```bash
30 6 * * 1 certbot renew -n -q --pre-hook "systemctl stop nginx" --deploy-hook "systemctl start nginx"
```

Meine endgültige Konfiguration sieht folgendermaßen aus:

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

# Redis Setup

Für das Redis-Setup empfehlen wir Ihnen, die <a href="https://redis.io/topics/quickstart"> Redis-Schnellstartanleitung</a> zu befolgen.

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
Ist das Token, das mit dem Pass zum Ver- und Entschlüsseln der API-Benutzeranmeldeinformationen verwendet wird. Sie können einen Passwortgenerator verwenden oder einfach alle Tasten auf Ihrer Tastatur drücken: clown_face:.

## Redis Anmeldeinformationen

### REDIS_PORT
Der Redis-Port sollte 6379 sein, wenn Sie das Redis-Setup befolgt haben.

### REDIS_HOST
Der Redis-Host sollte 127.0.0.1 sein, wenn Sie das Redis-Setup befolgt haben.

### REDIS_PASSWORD
Sie können dies aus Ihrer .env-Datei entfernen, wenn Sie kein Kennwort für redis festgelegt haben.

## Twitch Credentials

1. Gehen Sie zu <a href="https://dev.twitch.tv/"> dev.twitch.tv </a> und melden Sie sich mit Ihrem Bot Twitch-Konto an.
2. Drücken Sie auf Ihre Konsole
3. Drücken Sie dann App erstellen <br/>
  <img src="../_media/twitchRegisterApp.png" >
4. Geben Sie den Namen der Anwendung ein und klicken Sie auf Erstellen <br/>
  <img src= "../_media/twitchCreateApp.png" >
5. Drücken Sie nun ** verwalten ** auf Ihre erstellte Anwendung <br/>
  <img src = "../_media/twitchManageApp.png">

### CLIENT_SECRET
Nachdem Sie in Ihrer Anwendung auf ** Verwalten ** geklickt haben, drücken Sie auf Neues Geheimnis und kopieren Sie es.

<img src ="../_media/twitchClientSecret.png" >


### KUNDEN ID
Nachdem Sie in Ihrer Anwendung ** verwalten ** gedrückt haben, kopieren Sie die Client-ID.

<img src ="../_media/twitchClientID.png">
<br/><br/><br/><br/>

# CircleCI-Setup

Auf CircleCI verbinden Sie das GitHub-Repository, das den Code enthält. Fügen Sie unter Projekteinstellungen den Github-SSH-Schlüssel und einen SSH-Schlüssel aus Ihrem Compute Eninge hinzu.