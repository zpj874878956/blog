---
title: Rsyslog开源日志服务器
date: 2024-02-27 17:19:02
permalink: /pages/c0132a/
categories:
  - 运维
  - other
tags:
  - 
---

# 前言

> 为满足《网络安全法》和《网络安全等级保护》针对安全日志审计的要求，遂作者在对比可多款( syslog、syslog-ng和rsyslog )的日志记录服务器工具后，最终选择了 rsyslog 日志工具来完成企业内部日志收集，并采用 Loki & Promtail 进行日志采集，最后使用Grafana 通过 LogQL 语法进行采集数据查询以及展示，此文深入浅出讲解了从rsyslog初识到实践配置使用，可以让各位运维的同道中人可以快速为企业搭建收集各类网络日志服务器，以满足合规要求！

# 简述

为满足《网络安全法》和《网络安全等级保护》针对安全日志审计的要求，遂作者在对比可多款( syslog、syslog-ng和rsyslog )的日志记录服务器工具后，最终选择了 rsyslog 日志工具来完成企业内部日志收集，并采用 Loki & Promtail 进行日志采集，最后使用Grafana 通过 LogQL 语法进行采集数据查询以及展示，此文深入浅出讲解了从rsyslog初识到实践配置使用，可以让各位运维的同道中人可以快速为企业搭建收集各类网络日志服务器，以满足合规要求！

> 《信息安全技术网络安全等级保护基本要求》，网络安全审计日志需集中收集存储，即：应对分散在各个设备上的审计数据进行收集汇总和集中分析，并保证审计记录的留存时间符合法律法规要求。 
> 
> 《中华人民共和国网络安全法》：第三章 第二十一条明确规定：采取监测、记录网络运行状态、网络安全事件的技术措施，并按照规定留存相关的网络日志不少于六个月。

其次由于企业内部的ELK日志监控分析平台(`ElasticSearch+Logstash+Kibana`)过于沉重，使用维护成本高，所以急需使用一款能过收集服务器（例如，Linux、Windows或ARM）、网络设备（例如，交换机，路由器）、安全设备（例如，防火墙，堡垒机）以及IPMI带外管理（例如，华为的iBMC）的相关日志数据，以满足等保网络安全日志审计的要求。

> 网络安全审计是指对网络信息系统的安全相关活动信息进行获取、记录、存储、分析和利用的工作。网络安全审计的作用在于建立“事后”安全保障措施，保存网络安全事件及行为信息，为网络安全事件分析提供线索及证据，以便于发现潜在的网络安全威胁行为，开展网络安全风险分析及管理。

常见的网络安全审计方式，采用日志记录服务器统一集中存储系统、设备产生的日志信息，遂作者在对比可多款( `syslog`、`syslog-ng`和`rsyslog` )的日志记录服务器工具后，最终选择了 `rsyslog` 日志工具来完成企业内部日志收集，并采用 `Loki & Promtail` 进行日志采集，最后使用`Grafana` 通过 `LogQL` 语法进行采集数据查询以及展示

在开始学习rsyslog之前，我觉得有必要将选型前的几款日志处理工具做一个简单的对比介绍，下面我们来简单看看学习本章后所搭建部署效果。

图1.使用rsyslog接收到日志目录结构图

![0fdc01843666adc3.png](https://pic.zzppjj.top/LightPicture/2024/02/0fdc01843666adc3.png)

图2.使用rsyslog 接收到各类设备日志格式化为json字符串形式图

![8adbf4a876212ee3.png](https://pic.zzppjj.top/LightPicture/2024/02/8adbf4a876212ee3.png)

图3.使用 Grafana 查询rsyslog 推送到 Loki 相关日志数据，此处以网络安全设备日志为例

![af450e97a1b24e17.png](https://pic.zzppjj.top/LightPicture/2024/02/af450e97a1b24e17.png)

# 日志选型

描述: 除开elk大型日志手机平台，作者在最初选型期间查看对比了这三款日志收集工具，分别是`syslog`、`syslog-ng`和`rsyslog`都是用于日志处理的重要工具，它们在Linux/Unix系统中广泛应用于日志收集、处理和转发，尽管它们的基本目的相同，但在实现方式、性能和特性上存在差异，下面简单看看这三种工具的区别：

- `syslog`是最早的日志管理协议和程序之一，它定义了日志消息的标准格式以及如何传输日志消息。在很多Unix和Linux系统中，`syslog`是默认的日志守护进程。它支持基本的日志收集功能，能够根据配置规则将日志消息分类并写入不同的文件。但是，`syslog`本身的功能相对较为简单，不支持高级过滤、日志转发等功能。

- `syslog-ng`是对原始`syslog`的扩展，提供了更加灵活的配置选项，支持复杂的过滤、分类和日志转发功能。`syslog-ng`设计之初就考虑到了可扩展性和灵活性，因此它支持从各种来源收集日志（包括文件、网络、系统消息等），并且可以将日志输出到多种目的地（如文件、数据库、邮件等）。`syslog-ng`还支持内容基于模板的自定义格式化输出，使得日志数据的整合和分析更加方便。

- `rsyslog`（`本章主题`）是另一种流行的日志处理工具，它兼容`syslog`的基本功能，同时引入了性能改进和一些新特性。`rsyslog`被设计为能够处理大量日志数据，支持高性能的日志处理、过滤和转发。它提供了强大的配置选项，能够完成复杂的日志处理任务，比如基于条件的日志转发、数据库集成等。`rsyslog`也支持模块化扩展，可以通过添加模块来增强其功能。

选择哪种日志管理工具取决于您的具体需求：

- 基本需求：如果您只需要基本的日志收集和管理功能，且操作的系统已内置`syslog`，那么可能无需更换。

- 高级功能和灵活性：如果您需要更高级的日志处理功能，比如复杂的过滤、格式化输出或是高效的日志转发，`syslog-ng`和`rsyslog`都是很好的选择。`syslog-ng`以其高度的灵活性和强大的配置能力著称，适合需要精细日志处理规则的场景。

- 高性能和大规模部署：对于需要处理大量日志数据的环境，`rsyslog`可能更加合适，因为它在性能优化方面做了很多工作，能够更好地支持大规模日志处理需求。

所以，选择日志管理工具时，还应考虑团队的熟悉度和现有环境的兼容性等因素，以确保可以高效地部署和使用所选工具。

# rsyslog 介绍

Rsyslog ( `rocket-fast system for log`) 是一个开源工具用于日志处理，主要在大型企业内部中使用，但也可以扩展到小型系统，它提供高性能、出色的安全功能和模块化设计，虽然它最初是一个常规的syslogd，但现在的 rsyslog 已经演变成一种瑞士军刀式的伐木，能够接受来自多种来源的输入、过滤筛选及变换、并将结果输出到不同的目的地。

除此之外，它支持 MySQL、PostgreSQL、故障转移日志目的地、ElasticSearch、syslog/tcp 传输、细粒度输出格式控制、高精度时间戳、排队操作以及对任何消息部分进行过滤的能力，并且在 Linux/Unix 系统中选用 rsyslog 工具作为日志收集工具有极大的便利性，当前 CentOS、Ubuntu、KylinOS V10已经默认安装了rsyslog工具，所以只需要我们升级或者简单配置，即可成为企业内部中收集各类设备日志的利器。

![f95c572c104db484.png](https://pic.zzppjj.top/LightPicture/2024/02/f95c572c104db484.png)

当前 rsyslog 最新稳定版本为 8.2312.0 （主版本8，次版本 2023年12月发布，补丁版本），下一个版本为 8.2402.0, February 2024。

官网地址：https://www.rsyslog.com/

官网文档: https://www.rsyslog.com/doc/index.html

# 安装部署

描述: 在没有安装 rsyslog 日志工具的，其安装部署非常简单往往只需要一条命令或者使用Docker容器运行，而当前通常的的linux发行版本是已经预安装了此工具，例如 在 CentOS 6.x 中，日志服务已经由 rsyslogd 取代了原先的 syslogd，Red Hat 公司 认为 syslogd 已经不能满足工作中的需求，除此之外其他的 Ubuntu，KylinOS 银河麒麟（非最新版本）Linux 发行版本也将 rsyslog 作为默认的日志工具。

[参考链接：运维实践 | 国产操作系统银河麒麟KylinOS安装部署及符合等保主机安全的安全加固脚本](https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzIwNDA3ODg3OQ==&action=getalbum&album_id=2862965895395000323&scene=173&subscene=&sessionid=svr_fadb7eb8efd&enterid=1708915264&from_msgid=2648002890&from_itemidx=1&count=3&nolastread=1#wechat_redirect)

我们如何知道 Linux 中的 rsyslogd 服务是否安装且启动了呢？执行如下三条命令即可。

```shell
rsyslogd -v
ps aux | grep "rsyslog" | grep -v "grep"
systemctl  list-unit-files rsyslog.service
```

### Redhat、Debian、Alpine系安装

在 Redhat 以及 `Debian 、Ubuntu` 主机中安装和配置`rsyslog`是一个相对直接的过程，因为`rsyslog`通常作为默认的系统日志守护进程，以下是安装和基本配置`rsyslog`的步骤。

- 步骤 1: 安装 rsyslog 工具 首先，您需要确保`rsyslog`已经安装在您的系统上，可以通过运行以下命令来安装`rsyslog`（如果尚未安装）：

```shell
# Redhat 系
sudo yum install rsyslog
# 或者 CentOS8 使用 dnf 软件包安装工具进行安装
sudo dnf install rsyslog

# Debian 系
sudo apt install rsyslog

# Alpine 系
sudo apk add rsyslog
```

温馨提示: 此处 `rsyslogd -v` 命令执行后查看到守护进程版本为 `8.2006.0` ，并非最新版本，不同版本配置或有差异若非V8版本的童鞋请自行官网。

温馨提示: 若需要安装的最新的 `rsyslog` 版本，需要从官网的 rpm 源中的进行下载安装，操作如下所示:

```shell

# 要在RHEL/CENTOS上安装rsyslog，只需以root用户身份从命令行执行以下命令：
wget http://rpms.adiscon.com/v8-stable/rsyslog.repo -O /etc/yum.repos.d/rsyslog.repo           # for CentOS 7,8,9
wget http://rpms.adiscon.com/v8-stable/rsyslog-rhel.repo -O /etc/yum.repos.d/rsyslog-rhel.repo # for RHEL   7,8,9
cat rsyslog.repo
[rsyslog_v8]
name=Adiscon CentOS-$releasever - local packages for $basearch
baseurl=http://rpms.adiscon.com/v8-stable/epel-$releasever/$basearch
enabled=1
gpgcheck=0
gpgkey=https://rpms.adiscon.com/RPM-GPG-KEY-Adiscon
protect=1

# 安装
yum update && yum install rsyslog
# 更新
yum update && yum update rsyslog
```

- 步骤 2: 启动和启用 rsyslog 服务

安装完毕后，您需要启动`rsyslog`服务，并设置为开机自启：

```shell
sudo systemctl start rsyslog
sudo systemctl enable rsyslog
```

使用以下命令检查`rsyslog`服务状态，确保它正在运行：

```shell
sudo systemctl status rsyslog
```

- 步骤 3: 配置 rsyslog 服务

`rsyslog`的配置文件位于`/etc/rsyslog.conf`，以及`/etc/rsyslog.d/`目录下的文件，您可以编辑这些文件来调整`rsyslog`的配置。

打开主配置文件进行编辑：

```shell
sudo nano /etc/rsyslog.conf

```

此处有几个 rsyslog 常见的配置示例，例如

> 1.设置日志服务器（服务端）：在任意一台安装了rsyslog 主机上述设置其成为日志服务器，需要为其配置如下指令，即可启用接收远程日志。

```shell
# 主机 10.10.10.5 
# 例如，CerntOS 8 新版本网络日志功能配置, 只是语法上有所不同，不过官方还是推荐此种 V8 配置风格。
module(load="imudp")
input(type="imudp" port="514")
module(load="imtcp")
input(type="imtcp" port="514")

# 例如，CerntOS 6/7 旧版本网络日志功能配置
$ModLoad imudp
$UDPServerRun 514
$ModLoad imtcp
$InputTCPServerRun 514
```

> 2.转发日志到远程服务器（客户端）：在`rsyslog`配置文件中添加以下行，将日志转发到指定的远程服务器（请将`remote-host`替换为您的远程日志服务器的IP地址或主机名，`514`是标准的syslog端口）：

```shell

# 使用两个`@`符号(`@@`)表示使用TCP传输；如果使用单个`@`符号(`@`)，则表示使用UDP。
*.* @@remote-host:514

# 例如，将主机中所有信息都转发到 10.10.10.5:514 主机中。
*.* @@10.10.10.5:514
```

> 3.按设施和优先级过滤：您可以配置 `rsyslog` 根据日志的设施（如 `auth`, `kern`, `mail` 等）和优先级（如 `info`, `warn`, `err` 等）将日志写入不同的文件。例如，要将所有内核消息写入特定文件

---

[原文链接](https://mp.weixin.qq.com/s/AJ6Wa0fH1RC40qfzLqyqpg)
