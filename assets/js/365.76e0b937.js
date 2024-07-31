(window.webpackJsonp=window.webpackJsonp||[]).push([[365],{718:function(s,a,t){"use strict";t.r(a);var n=t(0),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"构建高大上的黑盒监控平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构建高大上的黑盒监控平台"}},[s._v("#")]),s._v(" 构建高大上的黑盒监控平台")]),s._v(" "),a("h3",{attrs:{id:"一、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[s._v("#")]),s._v(" 一、概述")]),s._v(" "),a("p",[s._v("在监控体系里面，通常我们把监控分为：白盒监控和黑盒监控：")]),s._v(" "),a("p",[a("strong",[s._v("黑盒监控")]),s._v(":主要关注的现象，一般都是正在发生的东西，例如出现一个告警，业务接口不正常，那么这种监控就是站在用户的角度能看到的监控，重点在于能对正在发生的故障进行告警。")]),s._v(" "),a("p",[a("strong",[s._v("白盒监控")]),s._v(":主要关注的是原因，也就是系统内部暴露的一些指标，例如redis的info中显示redis slave down，这个就是redis info显示的一个内部的指标，重点在于原因，可能是在黑盒监控中看到redis down，而查看内部信息的时候，显示redis port is refused connection。")]),s._v(" "),a("p",[a("strong",[s._v("白盒监控")]),s._v(":有很多种，有中间件，有存储，有web服务器例如redis可以使用info暴露内部的指标信息；例如mysql可以使用show variables暴露内部指标信息；例如nginx可以使用nginx_status来暴露内部信息，系统业务指标可以通过埋点或者命令进行采集。")]),s._v(" "),a("p",[a("strong",[s._v("Blackbox Exporter")])]),s._v(" "),a("p",[s._v("在前面的知识中，我们介绍Prometheus下如何进行白盒监控：我们监控主机的资源用量、容器的运行状态、数据库中间件的运行数据，通过采集相关指标来预测我们的服务健康状态。在黑盒监控方面。Blackbox Exporter是Prometheus社区提供的官方黑盒监控解决方案，其允许用户通过：HTTP、HTTPS、DNS、TCP以及ICMP的方式对网络进行探测。")]),s._v(" "),a("p",[a("strong",[s._v("Blackbox_exporter 应用场景")])]),s._v(" "),a("p",[s._v("HTTP 测试")]),s._v(" "),a("p",[s._v("定义 Request Header 信息")]),s._v(" "),a("p",[s._v("判断 Http status / Http Respones Header / Http Body 内容")]),s._v(" "),a("p",[s._v("TCP 测试")]),s._v(" "),a("p",[s._v("业务组件端口状态监听")]),s._v(" "),a("p",[s._v("应用层协议定义与监听")]),s._v(" "),a("p",[s._v("ICMP 测试")]),s._v(" "),a("p",[s._v("主机探活机制")]),s._v(" "),a("p",[s._v("POST 测试")]),s._v(" "),a("p",[s._v("接口联通性")]),s._v(" "),a("p",[s._v("SSL 证书过期时间")]),s._v(" "),a("p",[s._v("可以结合grafana 生成的相关模板")]),s._v(" "),a("h3",{attrs:{id:"二、blackbox-exporter-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、blackbox-exporter-部署"}},[s._v("#")]),s._v(" 二、Blackbox Exporter 部署:")]),s._v(" "),a("p",[a("strong",[s._v("1、安装Exporter:")])]),s._v(" "),a("p",[s._v("[root@cinder1 src]# wget https://github.com/prometheus/blackbox_exporter/releases/download/v0.16.0/blackbox_exporter-0.16.0.linux-amd64.tar.gz")]),s._v(" "),a("p",[s._v("[root@cinder1 src]#tar -zxvf blackbox_exporter-0.16.0.linux-amd64.tar.gz -C /usr/local")]),s._v(" "),a("p",[s._v("[root@cinder1 src]#mv /usr/local/blackbox_exporter-0.16.0.linux-amd64 /usr/local/blackbox_exporter")]),s._v(" "),a("p",[a("strong",[s._v("2、添加到启动项：")])]),s._v(" "),a("p",[s._v("[root@cinder1 src]# cat /etc/systemd/system/blackbox_exporter.service")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("blackbox_exporter\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target \n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WorkingDirectory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/blackbox\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/blackbox/blackbox_exporter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--config.file")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/blackbox/blackbox.yml\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("icmp监控")]),s._v(" "),a("p",[s._v("通过icmp 这个指标的采集，我们可以确认到对方的线路是否有问题。这个也是监控里面比较重要的一个环节。我们要了解全国各地到我们机房的线路有哪条有问题我们总结了两种方案：")]),s._v(" "),a("p",[s._v("1、全国各地各节点ping 和访问数据采集。这种类似听云运营商有提供这类服务，但是要花钱。")]),s._v(" "),a("p",[s._v("2、我现在用的方法就是：找各地测试ping 的节点，我们从机房主动ping 看是否到哪个线路有故障，下面我们开始。")]),s._v(" "),a("p",[s._v("一、prometheus 添加相关监控，Blackbox 使用默认配置启动即可：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icmp_ping"')]),s._v("\n    metrics_path: /probe\n    params:\n      module: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("icmp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用icmp模块")]),s._v("\n    file_sd_configs:\n    - refresh_interval: 10s\n      files:\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/prometheus/conf/ping_status*.yml"')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#具体的配置文件")]),s._v("\n    relabel_configs:\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__address__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      regex: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(":80"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("?\n      target_label: __param_target\n      replacement: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1}")]),s._v("\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__param_target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: instance\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__param_target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      regex: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n      target_label: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v("\n      replacement: "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${1}")]),s._v("\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      regex: .*\n      target_label: __address__\n      replacement: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.14:9115  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br")])]),a("p",[s._v("二、相关ping节点配置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@cinder1 conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat ping_status.yml ")]),s._v("\n- targets: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'220.181.38.150'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'14.215.177.39'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'180.101.49.12'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'14.215.177.39'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'180.101.49.11'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'14.215.177.38'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'14.215.177.38'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  labels:\n    group: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'一线城市-电信网络监控'")]),s._v("\n- targets: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'112.80.248.75'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'163.177.151.109'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'61.135.169.125'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'163.177.151.110'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'180.101.49.11'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'61.135.169.121'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'180.101.49.11'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  labels:\n    group: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'一线城市-联通网络监控'")]),s._v("\n- targets: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'183.232.231.172'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'36.152.44.95'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'182.61.200.6'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'36.152.44.96'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'220.181.38.149'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  labels:\n    group: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'一线城市-移动网络监控'")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"三、http-相关指标监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、http-相关指标监控"}},[s._v("#")]),s._v(" 三、http 相关指标监控：")]),s._v(" "),a("p",[s._v("一、prometheus 配置http_get访问：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"blackbox"')]),s._v("\n    metrics_path: /probe\n    params:\n      module: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http_2xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用http模块")]),s._v("\n    file_sd_configs: \n    - refresh_interval: 1m\n      files: \n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/prometheus/conf/blackbox*.yml"')]),s._v("\n    relabel_configs:\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__address__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: __param_target\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__param_target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: instance\n    - target_label: __address__\n      replacement: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.14:9115\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("二、相关配置文件，类似举例如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@cinder1 conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat /home/prometheus/conf/blackbox-dis.yml ")]),s._v("\n- targets:\n  - https://www.zhibo8.cc\n  - https://www.baidu.com \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置相关URL")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("三、添加grafana模板：")]),s._v(" "),a("p",[s._v("可以选择模板的9965模板，这个模板我们也看到前面的，提供了相关的ssl 过期检测。")]),s._v(" "),a("h3",{attrs:{id:"接口get请求检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口get请求检测"}},[s._v("#")]),s._v(" 接口get请求检测")]),s._v(" "),a("p",[s._v("一、prometheus 配置，其实跟我们之前的配置一样，我们直接看配置文件：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"check_get"')]),s._v("\n    metrics_path: /probe\n    params:\n      module: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http_2xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Look for a HTTP 200 response.")]),s._v("\n    file_sd_configs:\n    - refresh_interval: 1m\n      files:\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/prometheus/conf/service_get.yml"')]),s._v("\n    relabel_configs:\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__address__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: __param_target\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__param_target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: instance\n    - target_label: __address__\n      replacement: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.14:9115\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("二、相关接口配置参考：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@cinder1 conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat service_get.yml ")]),s._v("\n- targets:\n  - http://10.10.1.123:10000/pmkb/atc_tcbi\n  - http://10.10.1.123:10000/pmkb/get_ship_lock_count\n  - http://10.10.1.123:10000/pmkb/get_terminal_count_by_city\n  - http://10.10.1.123:10000/pmkb/get_terminal_monitor?industry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  - http://10.10.1.123:10000/pmkb/get_terminal_comparison?industry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  - http://10.10.1.123:10000/pmkb/get_terminal_city_count_industry?industry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  - http://10.10.1.123:10000/pmkb/industry_stat?industry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  - http://10.10.1.123:10000/pmkb/get_company_car_count?industry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  - http://10.10.1.123:10000/pmkb/get_terminal_month_countbyi?industry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  labels:\n    group: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'service'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("h3",{attrs:{id:"接口post-请求状态检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口post-请求状态检测"}},[s._v("#")]),s._v(" 接口post 请求状态检测：")]),s._v(" "),a("p",[s._v("一、这里首先我们要改一下post 相关接口的blackbox.yml配置，我们自己定义一个模块：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@cinder1 blackbox"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat blackbox.yml ")]),s._v("\nmodules:\n  http_2xx:\n    prober: http\n  http_post_2xx:   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#这个模块名称可以自己定义")]),s._v("\n    prober: http\n    http:\n      method: POST\n      headers:\n        Content-Type: application/json   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加头部")]),s._v("\n      body: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'{"username":"admin","password":"123456"}\'')]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#发送的相关数据，这里我们以登录接口为例")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("二、添加到prometheus:")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"check_service"')]),s._v("\n    metrics_path: /probe\n    params:\n      module: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("http_post_2xx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里要对应配置文件里，定义的模块")]),s._v("\n    file_sd_configs: \n    - refresh_interval: 1m\n      files: \n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/home/prometheus/conf/service_post.yml"')]),s._v("\n    relabel_configs:\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__address__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: __param_target\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__param_target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: instance\n    - target_label: __address__\n      replacement: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.14:9115\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("三、相关配置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@cinder1 conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat service_post.yml ")]),s._v("\n- targets:\n  - http://10.2.4.103:5000/devops/api/v1.0/login\n  labels:\n    group: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'service'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("四、添加grafana相关配置，这个也是自己定义的，可以从github上下载。")]),s._v(" "),a("h3",{attrs:{id:"tcp端口状态检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp端口状态检测"}},[s._v("#")]),s._v(" tcp端口状态检测：")]),s._v(" "),a("p",[s._v("个人理解的是这个跟telnet差不多都是检测端口是否在线")]),s._v(" "),a("p",[s._v("一、prometheus 配置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("  - job_name: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'port_status'")]),s._v("\n    metrics_path: /probe\n    params:\n      module: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("tcp_connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用tcp模块")]),s._v("\n    static_configs:\n      - targets: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10.10.1.35:8068'")]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10.10.1.35:8069'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#对应主机接口")]),s._v("\n        labels:\n          instance: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'port_status'")]),s._v("\n          group: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tcp'")]),s._v("\n    relabel_configs:\n    - source_labels: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("__address__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      target_label: __param_target \n    - target_label: __address__\n      replacement: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".1.14:9115 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[s._v("二、图表：")]),s._v(" "),a("p",[s._v("图表可以集成到前面的grafana 9965模板：")]),s._v(" "),a("h3",{attrs:{id:"告警规则定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#告警规则定义"}},[s._v("#")]),s._v(" 告警规则定义：")]),s._v(" "),a("p",[s._v("一、业务正常性：")]),s._v(" "),a("p",[s._v("icmp、tcp、http、post 监测是否正常可以观察probe_success 这一指标")]),s._v(" "),a("p",[s._v("probe_success == 0 ##联通性异常")]),s._v(" "),a("p",[s._v("probe_success == 1 ##联通性正常")]),s._v(" "),a("p",[s._v("告警也是判断这个指标是否等于0，如等于0 则触发异常报警")]),s._v(" "),a("p",[s._v("二、通过http模块我们可以获取证书的过期时间，可以根据过期时间添加相关告警")]),s._v(" "),a("p",[s._v("probe_ssl_earliest_cert_expiry ：可以查询证书到期时间。")]),s._v(" "),a("p",[s._v("经过单位转换我们可以得到一下，按天来计算：(probe_ssl_earliest_cert_expiry - time())/86400")]),s._v(" "),a("p",[s._v("三、所以我们结合上面的配置可以定制如下告警规则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@cinder1 rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat blackbox.yml ")]),s._v("\ngroups:\n- name: blackbox_network_stats\n  rules:\n  - alert: blackbox_network_stats\n    expr: probe_success "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n    for: 1m\n    labels:\n      severity: critical\n    annotations:\n      summary: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"接口/主机/端口 {{ '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$labels")]),s._v('.instance }}  无法联通"')]),s._v("\n      description: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"请尽快检测"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("ssl检测")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@cinder1 rules"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat ssl.yml ")]),s._v("\ngroups:\n- name: check_ssl_status\n  rules:\n  - alert: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssl证书过期警告"')]),s._v("\n    expr: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("probe_ssl_earliest_cert_expiry - time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("))")]),s._v("/86400 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n    for: 1h\n    labels:\n      severity: warn\n    annotations:\n      description: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'域名{{$labels.instance}}的证书还有{{ printf \"%.1f\" $value }}天就过期了,请尽快更新证书'")]),s._v("\n      summary: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ssl证书过期警告"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("hr"),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.51cto.com/xiaoluoge/2488466",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);