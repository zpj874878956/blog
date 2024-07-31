(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{609:function(s,a,t){"use strict";t.r(a);var n=t(0),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h4",{attrs:{id:"一、准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工作"}},[s._v("#")]),s._v(" 一、准备工作")]),s._v(" "),a("h5",{attrs:{id:"_1、拉取rabbitmq镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、拉取rabbitmq镜像"}},[s._v("#")]),s._v(" 1、拉取rabbitmq镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull rabbitmq:3.9-management-alpine\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag docker.io/rabbitmq:3.9-management-alpine rabbitmq3.9\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi docker.io/rabbitmq:3.9-management-alpine\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"_2、安装docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、安装docker-compose"}},[s._v("#")]),s._v(" 2、安装docker-compose")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 升级 pip")]),s._v("\npip3 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--upgrade")]),s._v(" pip\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 指定 docker-compose 版本安装")]),s._v("\npip "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-compose"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.22")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证是否安装成功")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"_3、创建相关目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建相关目录"}},[s._v("#")]),s._v(" 3、创建相关目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建存放rabbirmq 编排文件的目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /data/docker-compose/rabbitmq\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建存放rabbitmq 同步文件的目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /data/docker-data/rabbitmq\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h5",{attrs:{id:"_3、集群规划"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、集群规划"}},[s._v("#")]),s._v(" 3、集群规划")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("容器名")]),s._v(" "),a("th",[s._v("IP")]),s._v(" "),a("th",[s._v("映射端口")]),s._v(" "),a("th",[s._v("MQ名称")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("rabbitmq_1")]),s._v(" "),a("td",[s._v("170.200.8.101")]),s._v(" "),a("td",[s._v("5671:5672，15671:15672")]),s._v(" "),a("td",[s._v("mq1")])]),s._v(" "),a("tr",[a("td",[s._v("rabbitmq_2")]),s._v(" "),a("td",[s._v("170.200.8.102")]),s._v(" "),a("td",[s._v("5672:5672，15672:15672")]),s._v(" "),a("td",[s._v("mq2")])]),s._v(" "),a("tr",[a("td",[s._v("rabbitmq_3")]),s._v(" "),a("td",[s._v("170.200.8.103")]),s._v(" "),a("td",[s._v("5673:5672，15673:15672")]),s._v(" "),a("td",[s._v("mq3")])])])]),s._v(" "),a("p",[a("strong",[s._v("宿主机IP：192.168.78.200")])]),s._v(" "),a("h4",{attrs:{id:"二、构建rabbitmq集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、构建rabbitmq集群"}},[s._v("#")]),s._v(" 二、构建RabbitMQ集群")]),s._v(" "),a("h5",{attrs:{id:"_1、编写dcoker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、编写dcoker-compose-yml"}},[s._v("#")]),s._v(" 1、编写dcoker-compose.yml")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/docker-compose/rabbitmq/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" docker-compose.yml\n\nversion: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3.6"')]),s._v("\nservices:\n  rabbitmq_server_1:\n    image: rabbitmq3.9\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5671:5672"')]),s._v("\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"15671:15672"')]),s._v("\n    volumes:\n      - /data/docker-data/rabbitmq/1:/var/lib/rabbitmq\n      - /data/docker-data/rabbitmq/hosts:/etc/hosts\n      - /data/docker-data/rabbitmq/hostname:/etc/hostname\n      - /data/docker-data/rabbitmq/mq_join_cluster.sh:/home/mq_join_cluster.sh\n    environment:\n      - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n      - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_PASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n    networks:\n       rabbitmq:\n         ipv4_address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170.200")]),s._v(".8.101\n    hostname: mq1\n    container_name: rabbitmq_1\n\n  rabbitmq_server_2:\n    image: rabbitmq3.9\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5672:5672"')]),s._v("\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"15672:15672"')]),s._v("\n    volumes:\n      - /data/docker-data/rabbitmq/2:/var/lib/rabbitmq\n      - /data/docker-data/rabbitmq/hosts:/etc/hosts\n      - /data/docker-data/rabbitmq/hostname:/etc/hostname\n      - /data/docker-data/rabbitmq/mq_join_cluster.sh:/home/mq_join_cluster.sh\n    environment:\n      - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n      - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_PASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n    networks:\n      rabbitmq:\n        ipv4_address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170.200")]),s._v(".8.102\n    hostname: mq2\n    container_name: rabbitmq_2\n\n  rabbitmq_server_3:\n    image: rabbitmq3.9\n    ports:\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"5673:5672"')]),s._v("\n      - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"15673:15672"')]),s._v("\n    volumes:\n      - /data/docker-data/rabbitmq/3:/var/lib/rabbitmq\n      - /data/docker-data/rabbitmq/hosts:/etc/hosts\n      - /data/docker-data/rabbitmq/hostname:/etc/hostname\n      - /data/docker-data/rabbitmq/mq_join_cluster.sh:/home/mq_join_cluster.sh\n    environment:\n      - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root\n      - "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("RABBITMQ_DEFAULT_PASS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n    networks:\n      rabbitmq:\n        ipv4_address: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170.200")]),s._v(".8.103\n    hostname: mq3\n    container_name: rabbitmq_3\n\nnetworks:\n  rabbitmq:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"170.200.8.0/24"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br")])]),a("h5",{attrs:{id:"_2、编写同步给三个容器的hosts文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、编写同步给三个容器的hosts文件"}},[s._v("#")]),s._v(" 2、编写同步给三个容器的hosts文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/docker-data/rabbitmq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" hosts\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170.200")]),s._v(".8.101   mq1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170.200")]),s._v(".8.102   mq2\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("170.200")]),s._v(".8.103   mq3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"_3、编写同步给三个容器的hostname文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、编写同步给三个容器的hostname文件"}},[s._v("#")]),s._v(" 3、编写同步给三个容器的hostname文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/docker-data/rabbitmq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" \n\nmq1\nmq2\nmq3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h5",{attrs:{id:"_4、编写mq2和mq3加入mq1集群的sh脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、编写mq2和mq3加入mq1集群的sh脚本"}},[s._v("#")]),s._v(" 4、编写mq2和mq3加入mq1集群的sh脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/docker-data/rabbitmq\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" mq_join_cluster.sh\n\nrabbitmqctl stop_app\nrabbitmqctl reset\nrabbitmqctl join_cluster rabbit@mq1\nrabbitmqctl start_app\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h5",{attrs:{id:"_5、开始构建rabbitmq集群服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、开始构建rabbitmq集群服务"}},[s._v("#")]),s._v(" 5、开始构建rabbitmq集群服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /data/docker-compose/rabbitmq/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h5",{attrs:{id:"_6、使三个rabbitmq的-var-lib-rabbitmq-erlang-cookie-内容相同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、使三个rabbitmq的-var-lib-rabbitmq-erlang-cookie-内容相同"}},[s._v("#")]),s._v(" 6、使三个rabbitmq的/var/lib/rabbitmq/.erlang.cookie 内容相同")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" rabbitmq_1:/var/lib/rabbitmq/.erlang.cookie .erlang.cookie\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .erlang.cookie rabbitmq_2:/var/lib/rabbitmq/.erlang.cookie\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" .erlang.cookie rabbitmq_3:/var/lib/rabbitmq/.erlang.cookie\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"_7、重新启动rabbitmq-这组服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、重新启动rabbitmq-这组服务"}},[s._v("#")]),s._v(" 7、重新启动rabbitmq 这组服务")]),s._v(" "),a("p",[s._v("rabbitmq的.erlang.cookie如果发生变化，都应该重启那个rabbitmq")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"_8、执行下面命令-将rabbitmq-2和rabbitmq-3加入集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、执行下面命令-将rabbitmq-2和rabbitmq-3加入集群"}},[s._v("#")]),s._v(" 8、执行下面命令，将rabbitmq_2和rabbitmq_3加入集群")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it rabbitmq_2 bash\nchmod 777 /home/mq_join_cluster.sh\nsh /home/mq_join_cluster.sh\nexit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it rabbitmq_3 bash\nchmod 777 /home/mq_join_cluster.sh\nsh /home/mq_join_cluster.sh\nexit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h5",{attrs:{id:"_9、查看集群是否搭建成功"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9、查看集群是否搭建成功"}},[s._v("#")]),s._v(" 9、查看集群是否搭建成功")]),s._v(" "),a("p",[a("a",{attrs:{href:"http://192.168.153.102:15671/#/",target:"_blank",rel:"noopener noreferrer"}},[s._v("RabbitMQ Management"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/04/9aa2396ac6832e99.png",alt:"9aa2396ac6832e99.png"}})]),s._v(" "),a("p",[s._v("可以看到，集群已经正在运行了。")]),s._v(" "),a("p",[s._v("集群中有三个节点，分别是mq1、mq2、mq3。")]),s._v(" "),a("hr"),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.haveyb.com/article/2194",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);