(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{628:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("官方网站: https://github.com/chrislusf/seaweedfs/wiki/Getting-Started")]),e._v(" "),t("blockquote",[t("p",[e._v("seaweedfs是一个非常优秀的由 golang 开发的分布式存储开源项目。它是用来存储文件的系统，并且与使用的语言无关，使得文件储存在云端变得非常方便。")])]),e._v(" "),t("p",[e._v("在逻辑上Seaweedfs的几个概念：")]),e._v(" "),t("ul",[t("li",[e._v("Node 系统抽象的节点，抽象为DataCenter、Rack、DataNode")]),e._v(" "),t("li",[e._v("DataCenter 数据中心，对应现实中的不同机房")]),e._v(" "),t("li",[e._v("Rack 机架，对应现实中的机柜")]),e._v(" "),t("li",[e._v("Datanode 存储节点，用于管理、存储逻辑卷")]),e._v(" "),t("li",[e._v("Volume 逻辑卷，存储的逻辑结构，逻辑卷下存储Needle")]),e._v(" "),t("li",[e._v("Needle 逻辑卷中的Object，对应存储的文件")]),e._v(" "),t("li",[e._v("Collection 文件集，可以分布在多个逻辑卷上")])]),e._v(" "),t("p",[t("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2023/08/025605d189c73d99.png",alt:"025605d189c73d99.png"}})]),e._v(" "),t("p",[e._v("常用参数说明")]),e._v(" "),t("ol",[t("li",[e._v("-dir表示该DataNode数据存储的目录； -dir表示数据的存储文件地址")]),e._v(" "),t("li",[e._v("-max表示volume个数最大值；")]),e._v(" "),t("li",[e._v("-mserver表示Master地址；-mserver是主节点的ip以及端口，")]),e._v(" "),t("li",[e._v("-port该DataNode监听的端口；-port表示该volume的端口，")]),e._v(" "),t("li",[e._v("-ip为启动volume的ip，")]),e._v(" "),t("li",[e._v("publicUrl 表示外部访问存储数据的链接地址，")]),e._v(" "),t("li",[e._v("-mdir 元数据目录")]),e._v(" "),t("li",[e._v("data下面包含 xxx.dat与xxx.idx文件中，通过fid确定在哪个卷中")])]),e._v(" "),t("p",[e._v("普通部署方式：")]),e._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#1 nohup ./weed master -port=19333 -mdir="mdir" -defaultReplication=001 >> master.log 2>&1 &')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#2 nohup ./weed volume -port=18081 -dir=vdir1 -max=100 -mserver="127.0.0.1:19333" -dataCenter=dc1 -rack=rack1  >> v1.log 2>&1 &')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('#3 nohup  ./weed volume -port=18082 -dir=vdir2 -max=100 -mserver="127.0.0.1:19333" -dataCenter=dc1 -rack=rack1 >> v2.log 2>&1 &')]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("docker部署方式")]),e._v(" "),t("div",{staticClass:"language-textile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-textile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token phrase"}},[e._v("1 docker run  "),t("span",{pre:!0,attrs:{class:"token inline"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("p 9333:9333 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("p 19333:19333 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("v /opt/seaweed/mdir:/data ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")])]),e._v("-name weed_master chrislusf/seaweedfs master -defaultReplication=001\n2 docker run "),t("span",{pre:!0,attrs:{class:"token inline"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("p 9334:8080 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("v /opt/seaweed/vdir1:/data ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")])]),t("span",{pre:!0,attrs:{class:"token inline"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("name weed_volume1 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")])]),e._v('-link weed_master chrislusf/seaweedfs volume -max=30 -mserver="weed_master:9333" -port=8080  -dataCenter=dc1 -rack=rack1 -publicUrl="volume1.tonisf.com:88"\n3 docker run '),t("span",{pre:!0,attrs:{class:"token inline"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("p 9335:8080 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("v /opt/seaweed/vdir2:/data ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")])]),t("span",{pre:!0,attrs:{class:"token inline"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),t("span",{pre:!0,attrs:{class:"token deleted"}},[e._v("name weed_volume2 ")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")])]),e._v('-link weed_master chrislusf/seaweedfs volume -max=30 -mserver="weed_master:9333" -port=8080  -dataCenter=dc1 -rack=rack1 -publicUrl="volume2.tonisf.com:88"\n')])])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("三个master 二个slave 部署方式")]),e._v(" "),t("div",{staticClass:"language-textile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-textile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token phrase"}},[e._v("#服务器 21 22 23\nnohup ./weed master -port=9333 -mdir=/opt/seaweed/mdir -defaultReplication=001 -ip=192.168.100.21 -peers=192.168.100.21:9333,192.168.100.22:9333,192.168.100.23:9333  >> master.log 2>&1 &\nnohup ./weed master -port=9333 -mdir=/opt/seaweed/mdir -defaultReplication=001 -ip=192.168.100.22 -peers=192.168.100.21:9333,192.168.100.22:9333,192.168.100.23:9333  >> master.log 2>&1 &\nnohup ./weed master -port=9333 -mdir=/opt/seaweed/mdir -defaultReplication=001 -ip=192.168.100.23 -peers=192.168.100.21:9333,192.168.100.22:9333,192.168.100.23:9333  >> master.log 2>&1 &\n#服务器 22\nnohup ./weed volume -port=9334 -dir=/opt/seaweed/vdir1 -max=30 -mserver=192.168.100.21:9333,192.168.100.22:9333,192.168.100.23:9333 -dataCenter=dc1 -rack=rack1   -publicUrl=volume1.tonisf.com -ip=192.168.100.22 >> v1.log 2>&1 &\n#服务器 23\nnohup  ./weed volume -port=9335 -dir=/opt/seaweed/vdir2 -max=30 -mserver=192.168.100.21:9333,192.168.100.22:9333,192.168.100.23:9333 -dataCenter=dc1 -rack=rack1  -publicUrl=volume2.tonisf.com -ip=192.168.100.23 >> v2.log 2>&1 &\n")])])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);