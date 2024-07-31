(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{576:function(_,v,i){"use strict";i.r(v);var s=i(0),t=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("p",[_._v("一 问题简述")]),_._v(" "),v("p",[_._v("随着公司的服务器越来越多,人员流动性也开始与日俱增,以往管理服务器的陈旧思想（root权限随意给出，开发、测试、运维共用同一账号）应当摒弃,公司需要有更好更完善的权限体系,经过多轮沟通和协商,公司一致决定重新整理规划权限体系。运维主管明确指出权限存在的问题,并需要解决以往的root权限泛滥问题。")]),_._v(" "),v("p",[_._v("我作为本次权限规划的发起人,我首先了解到公司服务器权限现状后,经过多次与相关员工及领导沟通,确认了公司存在的部分问题:运维部基本入职离职流程中存在一些账号问题，如：离职不报备,系统权限不回收、账号密码过于简单化等。root权限随意给开发及测试。")]),_._v(" "),v("p",[_._v("以上问题无疑给公司的服务器及数据安全造成了不小的隐患。因此下文将详解此次关于权限划分的方案。")]),_._v(" "),v("p",[_._v("公司有多个部门使用我们提供的linux服务器以及开通的账号:安全权限没有进行合理规划,因此我提出更加安全的账号管理方式:①领用账号权限流程，②命令执行以sudo授权形式。")]),_._v(" "),v("p",[_._v("优势: 它可以对账号进行详细的权限分层划分,给服务器带来了更好的安全保障，公司有级别不同的运维人员,我们需要对其权限整理划分,根据职责能力我们规划权限为初级、中级、高级。而其他部门，如开发、测试等部门采取服务器账号权限流程。这样有利于权限最小化控制，避免因权限滥用导致服务运行不稳定，配置随意修改，不规范操作等安全隐患。为后续日志审计等溯源，分析奠定基础。")]),_._v(" "),v("p",[_._v("二 权限规划表及技术人员配备情况")]),_._v(" "),v("p",[_._v("1.权限规划表")]),_._v(" "),v("p",[_._v("①运维组权限规划表")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th")])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("级别")]),_._v(" "),v("td",[_._v("权限")])]),_._v(" "),v("tr",[v("td",[_._v("初级运维")]),_._v(" "),v("td",[_._v("查看系统、网络、服务、进程状态信息："),v("br"),_._v("/bin/hostname,/sbin/ifconfig,/bin/netstat,/sbin/route,/sbin/ip,/bin/ping,"),v("br"),_._v("/usr/bin/sar,/usr/bin/free, "),v("br"),_._v("  /usr/bin/vmstat,/usr/bin/mpstat,/usr/bin/iostat,/usr/sbin/iotop,/usr/bin/top,/bin/ps")])]),_._v(" "),v("tr",[v("td",[_._v("高级运维")]),_._v(" "),v("td",[_._v("查看和修改系统、网格、服务、进程状态配置信息，软件包管理，存储管理"),v("br"),v("br"),_._v("/bin/hostname,/sbin/ifconfig,/bin/netstat,/sbin/route,/sbin/ip,/usr/bin/sar,"),v("br"),_._v("/usr/bin/free, /usr/bin/vmstat,"),v("br"),_._v("/usr/bin/mpstat,/usr/bin/iostat,/usr/sbin/iotop,/usr/bin/top,"),v("br"),_._v("/bin/ps,/sbin/iptables,/etc/init.d/network,/bin/nice,/bin/kill,/usr/bin/kill,"),v("br"),_._v("/usr/bin/killall,/bin/rpm,/usr/bin/up2date,/usr/bin/yum,/sbin/fdisk,/sbin/sfdisk,"),v("br"),_._v("/sbin/parted,/sbin/partprobe,/bin/mount,/bin/umount")])]),_._v(" "),v("tr",[v("td",[_._v("运维经理")]),_._v(" "),v("td",[_._v("超级用户所有权限"),v("br"),v("br"),_._v("  ALL")])])])]),_._v(" "),v("p",[_._v("②开发组权限模板")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th")])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("级别")]),_._v(" "),v("td",[_._v("权限")])]),_._v(" "),v("tr",[v("td",[_._v("初级开发")]),_._v(" "),v("td",[_._v("root的查看权限，对应服务查看日志的权限"),v("br"),v("br"),_._v("  /usr/bin/tail /app/log*,/bin/grep /app/log*,/bin/cat,/bin/ls")])]),_._v(" "),v("tr",[v("td",[_._v("高级开发")]),_._v(" "),v("td",[_._v("root的查看权限，对应服务查看日志的权限，重启对应服务的权限"),v("br"),v("br"),_._v("/sbin/service,/sbin/chkconfig,/usr/bin/tail /app/log*,/bin/grep   /app/log*,/bin/cat,/bin/ls, /bin/sh ~/scripts/deploy.sh")])]),_._v(" "),v("tr",[v("td",[_._v("开发经理")]),_._v(" "),v("td",[_._v("项目所在服务器的ALL权限，不能修改root密码"),v("br"),v("br"),_._v("  ALL,!/usr/bin/passwd root,!/usr/sbin/visudo,!/usr/bin/vim   /etc/sudoers")])])])]),_._v(" "),v("p",[_._v("③测试组权限模板")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th")])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("级别")]),_._v(" "),v("td",[_._v("权限")])]),_._v(" "),v("tr",[v("td",[_._v("测试")]),_._v(" "),v("td",[_._v("普通用户的权限"),v("br"),v("br"),_._v("不加入sudo列表")])])])]),_._v(" "),v("p",[_._v("④DBA组权限模板")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th")])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("级别")]),_._v(" "),v("td",[_._v("权限")])]),_._v(" "),v("tr",[v("td",[_._v("初级DBA")]),_._v(" "),v("td",[_._v("普通用户的权限"),v("br"),v("br"),_._v("不加入sudo列表")])]),_._v(" "),v("tr",[v("td",[_._v("高级DBA")]),_._v(" "),v("td",[_._v("项目所在数据库服务器的ALL权限"),v("br"),v("br"),_._v("  ALL,!/usr/bin/passwd root,!/usr/sbin/visudo,!/usr/bin/vim   /etc/sudoers")])])])]),_._v(" "),v("p",[_._v("⑤网络组权限模板")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th")])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("级别")]),_._v(" "),v("td",[_._v("权限")])]),_._v(" "),v("tr",[v("td",[_._v("初级网工")]),_._v(" "),v("td",[_._v("普通用户的权限"),v("br"),v("br"),_._v("不加入sudo列表")])]),_._v(" "),v("tr",[v("td",[_._v("高级网工")]),_._v(" "),v("td",[_._v("项目所在服务器的有关网络配置的权限"),v("br"),v("br"),_._v("  /sbin/route,/sbin/ifconfig,/bin/ping,/sbin/dhclient,/usr/bin/net,"),v("br"),_._v("/sbin/ip,/sbin/iptables,/usr/bin/rfcomm,/usr/bin/wvdial,/sbin/iwconfig,/sbin/mii-tool,/bin/cat /var/log/"),v("em",[_._v(",/usr/bin/vim   /etc/sysconfig/network-scripts/")])])])])]),_._v(" "),v("p",[_._v("2.公司目前的技术人员配备情况")]),_._v(" "),v("p",[_._v("运维组：5个初级运维，2个高级运维，1个运维经理")]),_._v(" "),v("p",[_._v("开发组：3个初级开发人员，1个高级开发，1个开发经理")]),_._v(" "),v("p",[_._v("测试组：2个测试工程师（测试组不加入sudo）")]),_._v(" "),v("p",[_._v("DBA组：3个初级DBA（初级DBA不加入sudo），1个高级DBA")]),_._v(" "),v("p",[_._v("网络组：2个初级网工（初级DBA不加入sudo），1个高级网工")]),_._v(" "),v("p",[_._v("三 命令讲解")]),_._v(" "),v("p",[_._v("创建用户")]),_._v(" "),v("p",[_._v('useradd yw && echo "123456" | passwd --stdin yw')]),_._v(" "),v("p",[_._v("创建yw用户,然后输出一个123456交passwd作为yw用户的密码")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 21 25")]),_._v(';do useradd user$n;echo "user$n'),v("code",[_._v("echo user$n|md5sum|cut -c4-8")]),_._v('"|passwd --stdin user$n;done')]),_._v(" "),v("p",[_._v("用for循环来创建用户账号和密码: seq 21 25创建5个数字（21，22，23，24，25），n 就代表这5个数字，后面的创建用户接着user$n就是以user开头接n，")]),_._v(" "),v("p",[_._v("然后 echo 输出用户名的md5，使用cut 取出4-8块的字符交给passwd --stdin来为每位用户配置不同的密码,他们的密码都是用户名的md5值的4至8位字符串。")]),_._v(" "),v("p",[_._v("删除用户")]),_._v(" "),v("p",[_._v("userdel yw")]),_._v(" "),v("p",[_._v("删除yw用户")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 21 25")]),_._v(";do userdel -r user$n;done")]),_._v(" "),v("p",[_._v("用for循环删除用户")]),_._v(" "),v("p",[_._v("查看自己的sudo权限：sudo -l")]),_._v(" "),v("p",[_._v("……")]),_._v(" "),v("p",[_._v("……")]),_._v(" "),v("p",[_._v("四 实施命令脚本")]),_._v(" "),v("p",[_._v("举例：在公司时根据实际情况编写用户账号密码及相应权限，此处根据上述权限规划表为例。")]),_._v(" "),v("p",[_._v("1.创建用户组和用户：")]),_._v(" "),v("p",[_._v("#运维组、开发组、测试组、DBA组、网络组")]),_._v(" "),v("p",[_._v("groupadd chujiyunwei -g 1100")]),_._v(" "),v("p",[_._v("groupadd gaojiyunwei -g 1110")]),_._v(" "),v("p",[_._v("groupadd yunweijingli -g 1120")]),_._v(" "),v("p",[_._v("groupadd chujikaifa -g 1200")]),_._v(" "),v("p",[_._v("groupadd gaojikaifa -g 1210")]),_._v(" "),v("p",[_._v("groupadd kaifajingli -g 1220")]),_._v(" "),v("p",[_._v("groupadd ceshi -g 1300")]),_._v(" "),v("p",[_._v("groupadd chujidba -g 1400")]),_._v(" "),v("p",[_._v("groupadd gaojidba -g 1410")]),_._v(" "),v("p",[_._v("groupadd chujinetwork -g 1500")]),_._v(" "),v("p",[_._v("groupadd gaojinetwork -g 1510")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("#运维组：5个初级运维，2个高级运维，1个运维经理")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 1 5")]),_._v(';do useradd chujiyunwei$n -g 1100;echo "123456" | passwd --stdin chuji$n;done')]),_._v(" "),v("p",[_._v("#创建5个初级运维账户并配置了密码")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 1 2")]),_._v(';do useradd gaojiyunwei$n -g 1110;echo "123456" | passwd --stdin gaoji$n;done')]),_._v(" "),v("p",[_._v("#创建2个高级运维的用户和密码")]),_._v(" "),v("p",[_._v("useradd yunweijingli -g 1120 && echo 123456 | passwd --stdin yunweijingli")]),_._v(" "),v("p",[_._v("#创建1个运维经理的账号和密码")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("#开发组：3个初级开发人员，1个高级开发，1个开发经理")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 1 3")]),_._v(';do useradd chujikaifa$n -g 1200;echo "123456" | passwd --stdin chujikaifa$n;done')]),_._v(" "),v("p",[_._v("#创建3个初级开发账户并配置了密码")]),_._v(" "),v("p",[_._v('useradd gaojikaifa1 -g 1210 && echo "123456" | passwd --stdin gaojikaifa1')]),_._v(" "),v("p",[_._v("#创建1个高级开发的用户和密码")]),_._v(" "),v("p",[_._v("useradd kaifajingli -g 1220 && echo 123456 | passwd --stdin kaifajingli")]),_._v(" "),v("p",[_._v("#创建1个开发经理的账号和密码")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("#测试组：2个测试")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 1 2")]),_._v(';do useradd ceshi$n -g 1300;echo "123456" | passwd --stdin ceshi$n;done')]),_._v(" "),v("p",[_._v("#创建2个测试账号和密码")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("#DBA组：3个初级DBA，1个高级DBA")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 1 3")]),_._v(';do useradd chujidba$n -g 1400;echo "123456" | passwd --stdin chujidba$n;done')]),_._v(" "),v("p",[_._v("#创建3个初级dba 账号和密码")]),_._v(" "),v("p",[_._v("useradd gaojidba1 -g 1410&& echo 123456 | passwd --stdin gaojidba1")]),_._v(" "),v("p",[_._v("#创建1个高级dba账号和密码")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("#网工组：2个初级网工，1个高级网工")]),_._v(" "),v("p",[_._v("#-----------------------------------------------------------------------------")]),_._v(" "),v("p",[_._v("for n in "),v("code",[_._v("seq 1 2")]),_._v(';do useradd chujinetwork$n -g 1500;echo "123456" | passwd --stdin chujinetwork$n;done')]),_._v(" "),v("p",[_._v("#创建2个初级网工")]),_._v(" "),v("p",[_._v("useradd gaojinetwork1 -g 1510 && echo 123456 | passwd --stdin gaojinetwork1")]),_._v(" "),v("p",[_._v("#创建1个高级网工")]),_._v(" "),v("p",[_._v("2.配置/etc/sudoers文件")]),_._v(" "),v("p",[_._v("cat >>/etc/sudoers<<EOF")]),_._v(" "),v("p",[_._v("#配置用户组别名:")]),_._v(" "),v("p",[_._v("User_Alias CHUJIYUNWEI = %chujiyunwei")]),_._v(" "),v("p",[_._v("User_Alias GAOJIYUNWEI = %gaojiyunwei")]),_._v(" "),v("p",[_._v("User_Alias YUNWEIJINGLI = %yunweijingli")]),_._v(" "),v("p",[_._v("User_Alias CHUJIKAIFA = %chujikaifa")]),_._v(" "),v("p",[_._v("User_Alias GAOJIKAIFA = %gaojikaifa")]),_._v(" "),v("p",[_._v("User_Alias KAIFAJINGLI = %kaifajingli")]),_._v(" "),v("p",[_._v("User_Alias CESHI= %ceshi")]),_._v(" "),v("p",[_._v("User_Alias CHUJIDBA = %chujidba")]),_._v(" "),v("p",[_._v("User_Alias GAOJIDBA = %gaojidba")]),_._v(" "),v("p",[_._v("User_Alias CHUJINETWORK = %chujinetwork")]),_._v(" "),v("p",[_._v("User_Alias GAOJINETWORK = %gaojinetwork")]),_._v(" "),v("p",[_._v("#配置命令别名：")]),_._v(" "),v("p",[_._v("Cmnd_Alias CHUJIYUNWEI_CMD =  /bin/hostname,/sbin/ifconfig,/bin/netstat,/sbin/route,/sbin/ip,/bin/ping,/usr/bin/sar,/usr/bin/free, /usr/bin/vmstat,/usr/bin/mpstat,/usr/bin/iostat,/usr/sbin/iotop,/usr/bin/top,/bin/ps")]),_._v(" "),v("p",[_._v("Cmnd_Alias GAOJIYUNWEI_CMD =  /bin/hostname,/sbin/ifconfig,/bin/netstat,/sbin/route,/sbin/ip,/usr/bin/sar,/usr/bin/free,/usr/bin/vmstat,/usr/bin/mpstat,/usr/bin/iostat,/usr/sbin/iotop,/usr/bin/top,/bin/ps,/sbin/iptables,/etc/init.d/network,/bin/nice,/bin/kill,/usr/bin/kill,/usr/bin/killall,/bin/rpm,/usr/bin/up2date,/usr/bin/yum,/sbin/fdisk,/sbin/sfdisk,/sbin/parted,/sbin/partprobe,/bin/mount,/bin/umount")]),_._v(" "),v("p",[_._v("Cmnd_Alias YUNWEIJINGLI_CMD =  ALL")]),_._v(" "),v("p",[_._v("Cmnd_Alias CHUJIKAIFA_CMD =  /usr/bin/tail /app/log*,/bin/grep /app/log*,/bin/cat,/bin/ls")]),_._v(" "),v("p",[_._v("Cmnd_Alias GAOJIKAIFA_CMD =  /sbin/service,/sbin/chkconfig,/usr/bin/tail /app/log*,/bin/grep /app/log*,/bin/cat,/bin/ls, /bin/sh ~/scripts/deploy.sh")]),_._v(" "),v("p",[_._v("Cmnd_Alias KAIFAJINGLI_CMD =  ALL,!/usr/bin/passwd root,!/usr/sbin/visudo,!/usr/bin/vim /etc/sudoers")]),_._v(" "),v("p",[_._v("Cmnd_Alias CESHI_CMD =  /usr/bin/uname")]),_._v(" "),v("p",[_._v("Cmnd_Alias CHUJIDBA_CMD =  /usr/bin/uname")]),_._v(" "),v("p",[_._v("Cmnd_Alias GAOJIDBA_CMD =  ALL,!/usr/bin/passwd root,!/usr/sbin/visudo,!/usr/bin/vim /etc/sudoers")]),_._v(" "),v("p",[_._v("Cmnd_Alias CHUJINETWORK_CMD =  /usr/bin/uname")]),_._v(" "),v("p",[_._v("Cmnd_Alias GAOJINETWORK_CMD =  /sbin/route,/sbin/ifconfig,/bin/ping,/sbin/dhclient,/usr/bin/net,/sbin/ip,/sbin/iptables,/usr/bin/rfcomm,/usr/bin/wvdial,/sbin/iwconfig,/sbin/mii-tool,/bin/cat /var/log/"),v("em",[_._v(",/usr/bin/vim /etc/sysconfig/network-scripts/")])]),_._v(" "),v("p",[_._v("#用户组能获取到的权限")]),_._v(" "),v("p",[_._v("Runas_Alias CHUJIYUNWEI = root")]),_._v(" "),v("p",[_._v("Runas_Alias GAOJIYUNWEI = root")]),_._v(" "),v("p",[_._v("Runas_Alias YUNWEIJINGLI = root")]),_._v(" "),v("p",[_._v("Runas_Alias CHUJIKAIFA = root")]),_._v(" "),v("p",[_._v("Runas_Alias GAOJIKAIFA = root")]),_._v(" "),v("p",[_._v("Runas_Alias KAIFAJINGLI = root")]),_._v(" "),v("p",[_._v("Runas_Alias CESHI = root")]),_._v(" "),v("p",[_._v("Runas_Alias CHUJIDBA = root")]),_._v(" "),v("p",[_._v("Runas_Alias GAOJIDBA = root")]),_._v(" "),v("p",[_._v("Runas_Alias CHUJINETWORK = root")]),_._v(" "),v("p",[_._v("Runas_Alias GAOJINETWORK = root")]),_._v(" "),v("p",[_._v("#用户组权限对应关系")]),_._v(" "),v("p",[_._v("CHUJIYUNWEI ALL=(CHUJIYUNWEI) CHUJIYUNWEI_CMD")]),_._v(" "),v("p",[_._v("GAOJIYUNWEI ALL=(GAOJIYUNWEI) GAOJIYUNWEI_CMD")]),_._v(" "),v("p",[_._v("YUNWEIJINGLI ALL=(YUNWEIJINGLI) YUNWEIJINGLI_CMD")]),_._v(" "),v("p",[_._v("CHUJIKAIFA ALL=(CHUJIKAIFA) CHUJIKAIFA_CMD")]),_._v(" "),v("p",[_._v("GAOJIKAIFA ALL=(GAOJIKAIFA) GAOJIKAIFA_CMD")]),_._v(" "),v("p",[_._v("KAIFAJINGLI ALL=(KAIFAJINGLI) KAIFAJINGLI_CMD")]),_._v(" "),v("p",[_._v("CESHI ALL=(CESHI) CESHI_CMD")]),_._v(" "),v("p",[_._v("CHUJIDBA ALL=(CHUJIDBA) CHUJIDBA_CMD")]),_._v(" "),v("p",[_._v("GAOJIDBA ALL=(GAOJIDBA) GAOJIDBA_CMD")]),_._v(" "),v("p",[_._v("CHUJINETWORK ALL=(CHUJINETWORK) CHUJINETWORK_CMD")]),_._v(" "),v("p",[_._v("GAOJINETWORK ALL=(GAOJINETWORK) GAOJINETWORK_CMD")]),_._v(" "),v("p",[_._v("EOF")]),_._v(" "),v("p",[_._v("五 权限领用流程")]),_._v(" "),v("p",[_._v("1.   领用流程")]),_._v(" "),v("p",[_._v("① 领用人发起权限领用流程，填写权限配置变更申请表，交由运维人员审核。")]),_._v(" "),v("p",[_._v("② 运维人员审核没有问题告知运维主管，由运维主管开放权限。")]),_._v(" "),v("p",[_._v("2.配置更变申请表")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th"),_._v(" "),v("th"),_._v(" "),v("th"),_._v(" "),v("th"),_._v(" "),v("th")])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("配置变更申请表")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("*以下申请部门填写")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("填表日期：")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("申请部门")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("申 请 人")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("联系方式")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("申请测试日期")]),_._v(" "),v("td"),_._v(" "),v("td",[_._v("年  月  日")]),_._v(" "),v("td",[_._v("申请实施日期")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("实施部门")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("实施联系人")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td",[_._v("联系方式")]),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("变更目的：")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("变更内容：（如内容较多，请另附页说明）")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("申请部门"),v("br"),v("br"),_._v("意   见")]),_._v(" "),v("td",[_._v("口 一般变更    口 重大变更    口 紧急变更")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("签章：                  日期：      年    月    日")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("*以下为运维单位填写")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("运维单位"),v("br"),v("br"),_._v("意   见")]),_._v(" "),v("td",[_._v("口 一般变更    口 重大变更    口 紧急变更")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("口 同意申请实施日期     口 请在以下日期执行：     年  月  日")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("签章：                  日期：      年    月    日")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("*以下为实施人填写")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("运维单位"),v("br"),v("br"),_._v("处理结果")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")]),_._v(" "),v("tr",[v("td",[_._v("签章：                  日期：      年    月    日")]),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td"),_._v(" "),v("td")])])]),_._v(" "),v("p",[_._v("注： 1、该申请需附带需求报告、开发及变更计划、变更方案操作步骤详解、用户测试报告、源代码或脚本等的纸质文件，及操作所涉及到的电子文件用以存档。")]),_._v(" "),v("p",[_._v("2、变更方案需包括变更步骤详解、变更成功标志、回滚方案等。")]),_._v(" "),v("p",[_._v("（例子）")]),_._v(" "),v("p",[_._v("groupadd loguser -g 1003")]),_._v(" "),v("p",[_._v('useradd loguser -g 1003 && echo "############" | passwd --stdin loguser')]),_._v(" "),v("p",[_._v("cat >>/etc/sudoers<<EOF")]),_._v(" "),v("p",[_._v("User_Alias LOGUSER = %loguser")]),_._v(" "),v("p",[_._v("Cmnd_Alias LOGUSER_CMD = /sbin/service,/sbin/chkconfig,/usr/bin/tail,/bin/grep,/bin/cat,/bin/ls, /bin/sh,/bin/vim,/bin/less,/usr/bin/docker")]),_._v(" "),v("p",[_._v("Runas_Alias LOGUSER = root")]),_._v(" "),v("p",[_._v("LOGUSER ALL=(LOGUSER) NOPASSWD:LOGUSER_CMD")]),_._v(" "),v("p",[_._v("EOF")])])}),[],!1,null,null,null);v.default=t.exports}}]);