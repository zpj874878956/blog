(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{476:function(s,a,n){"use strict";n.r(a);var t=n(0),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一、下载jenkins-rpm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、下载jenkins-rpm包"}},[s._v("#")]),s._v(" 一、下载jenkins rpm包")]),s._v(" "),a("p",[s._v("选择镜像站（这里选择第一个清华大学镜像站）—>选择对应的系统-（redhat）—>选择版本（我选择的是jenkins-2.346.3-1.1.noarch.rpm）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://mirrors.tuna.tsinghua.edu.cn/jenkins/redhat-stable/jenkins-2.346.3-1.1.noarch.rpm\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"二、安装jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、安装jenkins"}},[s._v("#")]),s._v(" 二、安装jenkins")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ivh")]),s._v(" jenkins-2.346.3-1.1.noarch.rpm\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("安装完以后重要的目录说明：\n/usr/lib/jenkins/jenkins.war WAR包")]),s._v(" "),a("p",[s._v("/etc/sysconfig/jenkins 配置文件")]),s._v(" "),a("p",[s._v("/var/lib/jenkins/ 默认的JENKINS_HOME目录")]),s._v(" "),a("p",[s._v("/var/log/jenkins/jenkins.log Jenkins日志文件")]),s._v(" "),a("h3",{attrs:{id:"三、配置jenkins"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、配置jenkins"}},[s._v("#")]),s._v(" 三、配置jenkins")]),s._v(" "),a("p",[s._v("修改jenkins配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/jenkins\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2023/06/dc85cc6e228b7c8a.jpg",alt:"dc85cc6e228b7c8a.jpg"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2023/06/039ebc942175555e.jpg",alt:"039ebc942175555e.jpg"}})]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/ar/lib/jenkins"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_PORT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8080"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JENKINS_JAVA_OPTIONS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Djava.awt.headless=true -Dorg.apache.commons.jelly.tags.fmt.timeZone=Asia/Shanghai"')]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"四、配置jdk路径"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、配置jdk路径"}},[s._v("#")]),s._v(" 四、配置jdk路径")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#结果为  /usr/bin/java ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#在 candidates 后追加jdk 安装路径 一直到jdk安装路径下的bin/java")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/init.d/jenkins\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#如果存在 就不需要添加了 如果修改了 需要执行下面命令才能生效")]),s._v("\nsystemctl daemon-reload\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"五、jenkins启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、jenkins启动"}},[s._v("#")]),s._v(" 五、jenkins启动")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("systemctl start jenkins\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#访问服务 ip:port ，访问时需要注意firewalld 是否放开端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#用于检查系统的jenkins服务")]),s._v("\n/sbin/chkconfig jenkins on\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("hr"),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/Lin_p/article/details/119935230",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考链接"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);