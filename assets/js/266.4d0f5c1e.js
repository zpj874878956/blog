(window.webpackJsonp=window.webpackJsonp||[]).push([[266],{618:function(s,a,e){"use strict";e.r(a);var n=e(0),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一、docker安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、docker安装"}},[s._v("#")]),s._v(" 一、docker安装")]),s._v(" "),a("p",[s._v("学安全的人想必都知道openvas，他是一个开源的离线漏洞评估系统，有非常丰富的漏洞库。不过这也是让人烦恼的一个地方，有丰富的漏洞库然后又是离线的就代表安装的时候要下载很多很多数据包。光openvas本身就要下载1G的安装包，更新漏洞库的时候还有下载1G的包 重点是openvas的下载服务器在国外，对我们这种有长城保护的良民来说就是10几K的下载速度"),a("br"),s._v("\n最近无意间看到github上面有个openvas的开源项目，把openvas打包成一个docker容器，部署只需要启动一个容器，快速，方便还不占空间。github项目地址：https://github.com/mikesplain/openvas-docker")]),s._v(" "),a("p",[s._v("1，首先你要安装个docker"),a("br"),s._v("\n源安装很简单，Debian：apt install lxc-docker，Centos：yum install docker-io")]),s._v(" "),a("p",[s._v("2，搜索容器："),a("br"),s._v("\nroot@controller-node:~#docker search openvas")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181107134156923.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doYXRkYXk=,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("3，下载openvas9版本的容器："),a("br"),s._v("\nroot@controller-node:~#docker pull mikesplain/openvas:9")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181107134225480.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3doYXRkYXk=,size_16,color_FFFFFF,t_70",alt:""}})]),s._v(" "),a("p",[s._v("4，后台运行容器然后映射443端口："),a("br"),s._v("\n注意如果宿主机443端口有在使用应映射到其他端口"),a("br"),s._v("\nroot@controller-node:~#docker run -d -p 443:443 --name openvas mikesplain/openvas:9"),a("br"),s._v("\n注：启动容器后发现它很容易在扫描的时候把宿主机进程跑满，最好限制下资源使用"),a("br"),s._v("\nroot@controller-node:~#docker run --cpuset-cpus=4 -m 8192M -d -p 443:443 --name openvas mikesplain/openvas:9")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/20181107134256751.png",alt:""}})]),s._v(" "),a("p",[s._v("好了，现在我们的openvas环境已经部署好了，全程不到半小时."),a("br"),s._v("\n现在我们访问宿主机的web就可以进入openvas web了"),a("br"),s._v("\nhttps://127.0.0.1 默认账号:admin 默认密码：admin")]),s._v(" "),a("p",[s._v("如果想在局域网访问宿主机中的docker openvas 需要设置 openvas 的dns hostname 具体如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v(":443 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PUBLIC_HOSTNAME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".6.141 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" openvas mikesplain/openvas\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("还要设置宿主机防火墙 centos7 关闭防火墙命令：systemctl stop firewalld.service")]),s._v(" "),a("p",[s._v("其中192.168.6.141是宿主机的IP 这样设置后再局域网就可以访问openvas了")]),s._v(" "),a("p",[s._v("docker 中的openvas启动需要一点时间 等待一分钟后访问 以下网址")]),s._v(" "),a("p",[s._v("https://192.168.6.141 默认账号:admin 默认密码：admin")]),s._v(" "),a("h3",{attrs:{id:"二、docker-compose安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、docker-compose安装"}},[s._v("#")]),s._v(" 二、docker compose安装")]),s._v(" "),a("p",[s._v("docker-compose文件如下")]),s._v(" "),a("div",{staticClass:"language-docker line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-docker"}},[a("code",[s._v('version: \'3\'\n\nservices:\n  openvas:\n    image: mikesplain/openvas\n    container_name: openvas\n    ports:\n      - "443:443"\n      - "9390:9390"\n    volumes:\n      - /data/openvas:/var/lib/openvas/mgr\n      - /data/redis:/var/lib/redis\n    environment:\n      - OV_PASSWORD=your_password_here\n    restart: always\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);