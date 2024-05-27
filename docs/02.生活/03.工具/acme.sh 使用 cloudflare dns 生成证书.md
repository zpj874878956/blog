---
title: acme.sh使用 cloudflare dns 生成证书
date: 2024-05-24 19:19:59
permalink: /pages/9d1b65/
categories:
  - 生活
  - 工具
tags:
  - 
---

# 第一步，安装acme

下载脚本：https://github.com/acmesh-official/acme.sh/archive/refs/tags/3.0.7.tar.gz

执行一下命令

```bash
tar -xf acme.sh-3.0.7.tar.gz
cd acme.sh-3.0.7
sh acme.sh --install

```

# 第二步，配置acme

去Cloudflare找到你的个人api key，如果没有Cloudflare就去注册一个。



#### 方法A

首先你需要获取你的[Cloudflare Global API Key](https://dash.cloudflare.com/profile/api-tokens)。访问上面这个链接，然后在`API 密钥`选项卡中找到`Global API Key`，点击后面的`查看`按钮。然后在`Shell`中执行以下命令，不要忘记替换以下命令行中的部分参数。

```
export CF_Key="这里替换为你的Global API Key"
export CF_Email="这里替换为你的Cloudflare账户的电子邮箱"
acme.sh --issue --dns dns_cf -d example.com -d '*.example.com'
```

`CF_Key` 和 `CF_Email` 将保存在 `~/.acme.sh/account.conf`中，并在下次需要时重复使用。

```bash
DNS API 令牌已成功创建
xxxxxxxxxxx
curl -X GET "https://api.cloudflare.com/client/v4/user/tokens/verify" \
     -H "Authorization: Bearer xxxxxxxxxxx" \
     -H "Content-Type:application/json"
```

![](http://pic.zzppjj.top/LightPicture/2024/05/d4690152f530f099.png)

#### 方法B

因为某些原因不想使用`Global API Key`还可以使用`Api Token`

```
export CF_Token="替换为TOKEN"
export CF_Account_ID="替换为账户ID"
```

# 更换ACME.sh的CA为ZeroSSL

### 注册一个ZeroSSL账户

传送门：https://app.zerossl.com/signup

### 获取账户的EAB凭证，用来注册acme帐户

传送门：[Log In - ZeroSSL](https://app.zerossl.com/developer)

点击生成会生成你的eab-kid和eab-hmac-key，复制保存下来；

```bash
acme.sh  --register-account  --server zerossl \

        --eab-kid  你的eab-kid \

        --eab-hmac-key  你的eab-hmac-key
```

### 切换默认CA

切换acme.sh的默认CA为ZeroSSL

```
acme.sh --set-default-ca  --server zerossl
```

# 申请证书

### 方式一

```bash
acme.sh --install-cert -d zzppjj.top \
--key-file /cert/zzppjj.top.key  \
--fullchain-file /cert/zzppjj.top.crt \
--reloadcmd   "systemctl restart nginx"
```

### 方式二

```bash
acme.sh --install-cert -d lushihuan.com \
--cert-file      /usr/local/nginx/ssl/cert.pem  \
--key-file       /usr/local/nginx/ssl/key.pem  \
--fullchain-file /usr/local/nginx/ssl/fullchain.pem  \
--reloadcmd   "systemctl restart nginx"
```
