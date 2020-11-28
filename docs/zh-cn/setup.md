## 先决条件

- **浏览器**： 仅支持最新的Chrome / Chromium稳定版
- **计算引擎实例**： 我们使用CentOS作为发行版
    - **RAM**： 最小512MB，建议1024MB
    - **硬盘**： 最小1GB
- Twitch机器人帐户
- CircleCI帐户

!>您需要 **单独的** 帐户来使用bot，而bot **不能在您的机器上使用广播帐号**

# 计算引擎设置

连接到实例时，您要做的第一件事是检查更新并更新yum。

```
yum check-update
yum -y update
```

## 使用sudo权限创建非root用户

现在，我们必须以root用户身份执行以下操作：

```
adduser alphabot
```

## 设置用户alphabot的密码

```
passwd alphabot
```

## 赋予sudo特权

```
usermod -aG wheel alphabot
```

##为circleci生成ssh密钥

```
ssh-keygen -m pem -t rsa
```

现在已生成ssh密钥，将私钥复制到circleci
并将公钥复制到Google Cloud中的虚拟机。
完成后，从.ssh目录中删除公钥和私钥。

## 以root身份禁用SSH登录

要禁用ssh作为root登录，请取消注释以下行PermitRootLogin并将其设置为PermitRootLogin no。要在vim中更快地搜索，可以使用 '/PermitRootLogin'。安全完成后，现在必须重新加载更改。

```
vim /etc/ssh/sshd_config
```

```
systemctl reload sshd
```


## 设置防火墙

如果您使用的是Compute Engine，则不必设置防火墙，因为google默认已经设置了防火墙。

## 设置交换文件

```
fallocate -l 4G /swapfile
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
sh -c 'echo "/swapfile none swap sw 0 0" >> /etc/fstab'
```


## 设置泊坞窗

请先安装[containerd.io]（http://containerd.io/），否则将无法安装docker。

```
yum install -y [https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm](https://download.docker.com/linux/centos/7/x86_64/stable/Packages/containerd.io-1.2.6-3.3.el7.x86_64.rpm)
```

现在，您可以安装docker并将用户alphabot添加到docker组，以便用户无需使用sudo即可执行docker命令。
```
curl -fsSL [https://get.docker.com/](https://get.docker.com/) | sh
sudo usermod -aG docker alphabot
sudo systemctl start docker
sudo systemctl enable docker
```

## 设置GIT

首先，您将必须安装git，然后可以使用以下命令执行此操作。

```
yum install -y git
```

现在，我们将用户名和电子邮件添加到git中，以便以后进行身份验证。

```
git config --global user.name <username>
git config --global user.email <email>
```

现在要通过SSH进行身份验证，我们需要为git生成SSH密钥。

```
ssh-keygen -t rsa -b 4096 -C <email>
```

### 将SSH密钥添加到ssh-agent

- 在后台启动ssh-agent。

```
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```


- 将您的SSH私钥添加到SSH代理中。如果您使用其他名称创建密钥，或者要添加具有其他名称的现有密钥，请使用私有密钥文件的名称替换命令中的id_rsa。
```
$ ssh-add ~/.ssh/id_rsa
```


当您按照上述步骤操作时，将公共SSH密钥添加到GitHub，您应该已完成。您可以在GitHub上的设置下添加SSH密钥→SSH和GPG密钥→新的SSH密钥
## 设置DNS条目
[Google Cloud快速入门指南](https://cloud.google.com/dns/docs/quickstart)

<br/><br/>

# 部署脚本

创建一个文件并在下面插入脚本。 :rocket:

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

# Nginx设置

### 检查是否已安装SE Linux

如果以下命令返回强制安装SE Linux，则您无需执行任何其他步骤。
```
getenforce
```

### 设置SE Linux的布尔变量

```
setsebool -P httpd_can_network_connect on
setsebool -P httpd_enable_homedirs on
```

### 安装以下

为了能够安装nginx，我们将需要 **epel-release**

```
yum install -y epel-release
yum install -y nginx
```

现在我们已经安装了nginx，我们可以启动它了。第二个命令用于查看是否一切正常。
```
systemctl start nginx
systemctl status nginx
```


要在重启系统后重启nginx，我们必须执行以下操作：
```
systemctl enable nginx
```

要编写我们自己的配置，我们将创建自己的nginx配置文件，该文件必须位于 */etc/nginx/conf.d/alphabot.conf* 下

编写完配置文件后，我们需要检查编写的配置文件是否还能正常工作，我们可以通过简单的nginx comman来实现
```
nginx -t
```

## 设置HTTPS

现在有一个很棒的工具可以用来创建证书。

```
yum -y install certbot
```

现在，我们可以向certbot申请证书，而certbot将为我们完成繁重的工作。
```
certbot certonly --standalone -d <DOMAIN>
```


现在，我们应该创建证书的备份，以防万一

```
cp -r /etc/letsencrypt/ /home/alphabot
tar czf letsencrypt.tar.gz letsencrypt/
```


现在我们已经完成了几乎所有的工作，最后要做的就是编辑nginx配置，使其仅允许https流量。 Mozilla建立了巨大的收费标准，我们将使用[https://ssl-config.mozilla.org/](https://ssl-config.mozilla.org/）

### 设置Crontab以自动续订证书

首先，我们必须启动crontab并启用它，以便它在计算机重新启动时自动启动。
```bash
sudo systemctl start crond.service
sudo systemctl enable crond.service
```

使用`sudo crontab -e`可以添加一个crontab。以下crontab会在每个星期一的上午6:30尝试更新SSL证书，如果更新成功，它将重新加载nginx。
```bash
30 6 * * 1 certbot renew -n -q --pre-hook "systemctl stop nginx" --deploy-hook "systemctl start nginx"
```


我的最终配置如下所示：
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


# Redis设置

对于Redis设置，我们建议您遵循<a href="https://redis.io/topics/quickstart"> Redis快速入门指南</a>。

# .env设置
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
是与护照一起使用的令牌，用于加密和解密API用户凭证。您可以使用密码生成器，也可以只按键盘上的所有按钮：clown_face:。

## Redis凭证

### REDIS_PORT
如果遵循redis设置，则redis端口应为6379。

### REDIS_HOST
如果遵循redis设置，则redis主机应为127.0.0.1。

### REDIS_PASSWORD
如果您尚未设置Redis密码，则可以将其从.env文件中删除。

## Twitch凭证

1.使用您的漫游器twitch帐户登录<a href="https://dev.twitch.tv/"> dev.twitch.tv </a>登录。
2.按控制台
3.然后按创建应用程序<br/>
 <img src="../_media/twitchRegisterApp.png" >
4.填写应用程序的名称，然后按创建<br/>
 <img src= "../_media/twitchCreateApp.png" >
5.现在，在创建的应用程序上按"管理” <br/>
 <img src = "../_media/twitchManageApp.png">

### CLIENT_SECRET
在您的应用程序上按**manage**后，按New Secret并复制它。

<img src ="../_media/twitchClientSecret.png" >


### CLIENT_ID
在您的应用程序上按**manage**之后，复制客户端ID。

<img src ="../_media/twitchClientID.png">
<br/> <br/> <br/> <br/>

# CircleCI设置

在CircleCI上，连接包含代码的GitHub存储库。在项目设置下，添加Github SSH密钥，然后从您的Compute Eninge中添加一个SSH密钥。