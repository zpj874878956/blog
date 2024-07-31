(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{467:function(t,_,v){"use strict";v.r(_);var a=v(0),d=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"前言"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),_("p",[t._v("ES8自2020年2月发布至今已有一年多时间，相较于es7而言，最大的改变是彻底删除_type，并默认开启三层安全配置，进一步提高了集群安全性，同时kibana的实用性也进一步提升，大部分日常操作都可以通过web界面完成。本系列教程使用最新的es8.8版本，从运维角度出发，以构建日志平台为目的，以尽可能贴近实际生产的场景案例，优先使用简易的部署方式和kibana图形化界面操作。由浅入深，带领大家逐步上手和掌握ELK技术栈。更多ELK相关内容欢迎访问官方文档或本人博客笔记：https://www.cuiliangblog.cn/catalog/10898409")]),t._v(" "),_("h1",{attrs:{id:"业务场景需求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#业务场景需求"}},[t._v("#")]),t._v(" 业务场景需求")]),t._v(" "),_("p",[t._v("日志类业务，假设理想情况下，此集群每天最多能够采集20GB的原始日志，需要经常查询最近7天数据，历史数据最大查询时间为30天，日志数据归档存储最多为60天。")]),t._v(" "),_("h1",{attrs:{id:"规划分析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#规划分析"}},[t._v("#")]),t._v(" 规划分析")]),t._v(" "),_("h2",{attrs:{id:"集群架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群架构"}},[t._v("#")]),t._v(" 集群架构")]),t._v(" "),_("p",[t._v("日志类业务，通常情况下首选热温架构。如果有数据归档存储需求，可加入冷节点存储归档数据。"),_("br"),t._v("\n热节点使用高速SSD+小内存机器，温节点使用低速HDD+大内存机器，冷节点使用最便宜的DAS/SAN/磁带存储，组合达到最大性能和最低成本。")]),t._v(" "),_("h2",{attrs:{id:"预估容量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#预估容量"}},[t._v("#")]),t._v(" 预估容量")]),t._v(" "),_("p",[t._v("原始数据量和索引后所占磁盘空间之间的比例大约为 1.1，所以20GB的原始数据预计会在磁盘上产生 22GB的索引数据。"),_("br"),t._v("\n加上副本分片（通常为1副本）后，此数值会翻倍，每天为44GB。"),_("br"),t._v("\n在30天内，主副分片占用量为1320GB，加上归档存储30天的数据（通常为0副本）占用量660GB，总计1980GB，这就是集群需要处理的总量。")]),t._v(" "),_("h2",{attrs:{id:"热节点规模预估"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#热节点规模预估"}},[t._v("#")]),t._v(" 热节点规模预估")]),t._v(" "),_("p",[t._v("在预估数据节点时，需要注意以下几点：")]),t._v(" "),_("ul",[_("li",[t._v("预留 15%警戒磁盘水位空间。")]),t._v(" "),_("li",[t._v("为错误余量和后台活动预留+ 5％。")]),t._v(" "),_("li",[t._v("保留等效的数据节点以处理故障。")])]),t._v(" "),_("p",[t._v("基于这些数据，我们便可以确定热节点所需的总磁盘空间和总内存量。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("磁盘与内存的比例")]),t._v(" "),_("th",[t._v("有效保留期（天）")]),t._v(" "),_("th",[t._v("需存储的数据量 (GB)")]),t._v(" "),_("th",[t._v("所需总磁盘空间 (GB)")]),t._v(" "),_("th",[t._v("所需总内存 (GB)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("30:1")]),t._v(" "),_("td",[t._v("7")]),t._v(" "),_("td",[t._v("308")]),t._v(" "),_("td",[t._v("370")]),t._v(" "),_("td",[t._v("12")])])])]),t._v(" "),_("p",[t._v("为保障数据完整性，避免单点故障，同一索引的主副分片不能位于同一节点，因此热温节点数量最少各2台。考虑到hot节点写入负载较高，为提高集群写入能力，规划三台节点，热节点的最低配置如下所示：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("节点")]),t._v(" "),_("th",[t._v("CPU（核）")]),t._v(" "),_("th",[t._v("内存（GB）")]),t._v(" "),_("th",[t._v("数据盘（GB）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("hot-1")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("123")])]),t._v(" "),_("tr",[_("td",[t._v("hot-2")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("123")])]),t._v(" "),_("tr",[_("td",[t._v("hot-3")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("4")]),t._v(" "),_("td",[t._v("123")])])])]),t._v(" "),_("h2",{attrs:{id:"温节点规模预估"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#温节点规模预估"}},[t._v("#")]),t._v(" 温节点规模预估")]),t._v(" "),_("p",[t._v("热节点上超出保留期的数据将会转移到温节点。通过计算这些节点需要存储的数据量，我们便可以预估所需的规模，计算时也需要将高磁盘水位线和后台活动预留的开销考虑在内。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("磁盘与内存的比例")]),t._v(" "),_("th",[t._v("有效保留期(天)")]),t._v(" "),_("th",[t._v("需存储的数据量(GB)")]),t._v(" "),_("th",[t._v("所需总磁盘空间(GB)")]),t._v(" "),_("th",[t._v("所需总内存 (GB)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("100:1")]),t._v(" "),_("td",[t._v("23")]),t._v(" "),_("td",[t._v("1012")]),t._v(" "),_("td",[t._v("1214")]),t._v(" "),_("td",[t._v("12")])])])]),t._v(" "),_("p",[t._v("温节点的最低配置如下所示")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("节点")]),t._v(" "),_("th",[t._v("CPU（核）")]),t._v(" "),_("th",[t._v("内存（GB）")]),t._v(" "),_("th",[t._v("数据盘（GB）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("warm-1")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("607")])]),t._v(" "),_("tr",[_("td",[t._v("warm-2")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("6")]),t._v(" "),_("td",[t._v("607")])])])]),t._v(" "),_("h2",{attrs:{id:"冷节点规模预估"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#冷节点规模预估"}},[t._v("#")]),t._v(" 冷节点规模预估")]),t._v(" "),_("p",[t._v("温节点上超出保留期的数据将会转移到冷节点。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("磁盘与内存的比例")]),t._v(" "),_("th",[t._v("有效保留期(天)")]),t._v(" "),_("th",[t._v("需存储的数据量(GB)")]),t._v(" "),_("th",[t._v("所需总磁盘空间(GB)")]),t._v(" "),_("th",[t._v("所需总内存 (GB)")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1000:1")]),t._v(" "),_("td",[t._v("30")]),t._v(" "),_("td",[t._v("660")]),t._v(" "),_("td",[t._v("792")]),t._v(" "),_("td",[t._v("1")])])])]),t._v(" "),_("p",[t._v("本实验中仅使用一台冷节点为例演示，存储到冷节点的索引不设置副本数。冷节点的最低配置如下所示")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("节点")]),t._v(" "),_("th",[t._v("CPU（核）")]),t._v(" "),_("th",[t._v("内存（GB）")]),t._v(" "),_("th",[t._v("数据盘（GB）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("cold-1")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("792")])])])]),t._v(" "),_("h2",{attrs:{id:"master节点预估"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#master节点预估"}},[t._v("#")]),t._v(" master节点预估")]),t._v(" "),_("p",[t._v("除了数据节点，我们通常还需要专用master节点，在实际生产环境建议部署3台master节点，以便提高集群的弹性和可用性。由于这些节点不处理任何流量，所以它们的规模很小，后期随着业务集群规模增长再提高配置或增加master节点数。master节点的最低配置如下所示")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("节点")]),t._v(" "),_("th",[t._v("CPU（核）")]),t._v(" "),_("th",[t._v("内存（GB）")]),t._v(" "),_("th",[t._v("数据盘（GB）")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("master")]),t._v(" "),_("td",[t._v("1")]),t._v(" "),_("td",[t._v("2")]),t._v(" "),_("td",[t._v("0")])])])]),t._v(" "),_("h1",{attrs:{id:"集群规划设计"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#集群规划设计"}},[t._v("#")]),t._v(" 集群规划设计")]),t._v(" "),_("h2",{attrs:{id:"组件调用关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#组件调用关系"}},[t._v("#")]),t._v(" 组件调用关系")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/03/f690af1e2b0864a8.jpg",alt:"f690af1e2b0864a8.jpg"}})]),t._v(" "),_("h2",{attrs:{id:"es集群组件关系"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es集群组件关系"}},[t._v("#")]),t._v(" ES集群组件关系")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2024/03/7a0cf713fca7ff13.jpg",alt:"7a0cf713fca7ff13.jpg"}})]),t._v(" "),_("h2",{attrs:{id:"节点角色与配置"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#节点角色与配置"}},[t._v("#")]),t._v(" 节点角色与配置")]),t._v(" "),_("p",[t._v("建议将数据节点内存至少配置到4G以上，随着数据写入以及Elastic Agent部署，2G内存经常会出现OOM。"),_("br"),t._v("\n由于是实验环境，master节点暂部署一台，生产环境建议master节点3台。"),_("br"),t._v("\nfleet server节点建议部署在es集群之外，生产环境建议2台及以上组成集群，通过负载均衡方式管理与下发agent策略。"),_("br"),t._v("\n考虑到es节点还需要运行logstash、kibana、filebeat、kafka等服务，集群角色与配置规划如下：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("主机名")]),t._v(" "),_("th",[t._v("CPU")]),t._v(" "),_("th",[t._v("内存")]),t._v(" "),_("th",[t._v("数据盘")]),t._v(" "),_("th",[t._v("es角色")]),t._v(" "),_("th",[t._v("其他服务")]),t._v(" "),_("th",[t._v("ip")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("es-fleet1")]),t._v(" "),_("td",[t._v("1C")]),t._v(" "),_("td",[t._v("1G")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("fleet server、filebeat、自定义APP")]),t._v(" "),_("td",[t._v("192.168.10.130")])]),t._v(" "),_("tr",[_("td",[t._v("es-fleet2")]),t._v(" "),_("td",[t._v("1C")]),t._v(" "),_("td",[t._v("1G")]),t._v(" "),_("td",[t._v("0")]),t._v(" "),_("td"),t._v(" "),_("td",[t._v("fleet server、minIO、Grafana、Prometheus")]),t._v(" "),_("td",[t._v("192.168.10.131")])]),t._v(" "),_("tr",[_("td",[t._v("es-master")]),t._v(" "),_("td",[t._v("4C")]),t._v(" "),_("td",[t._v("4G")]),t._v(" "),_("td",[t._v("50G")]),t._v(" "),_("td",[t._v("master,ingest")]),t._v(" "),_("td",[t._v("kibana、elastic agent")]),t._v(" "),_("td",[t._v("192.168.10.132")])]),t._v(" "),_("tr",[_("td",[t._v("es-hot1")]),t._v(" "),_("td",[t._v("2C")]),t._v(" "),_("td",[t._v("4G")]),t._v(" "),_("td",[t._v("120G")]),t._v(" "),_("td",[t._v("data_content,data_hot")]),t._v(" "),_("td",[t._v("kafka、elastic agent")]),t._v(" "),_("td",[t._v("192.168.10.133")])]),t._v(" "),_("tr",[_("td",[t._v("es-hot2")]),t._v(" "),_("td",[t._v("2C")]),t._v(" "),_("td",[t._v("4G")]),t._v(" "),_("td",[t._v("120G")]),t._v(" "),_("td",[t._v("data_content,data_hot")]),t._v(" "),_("td",[t._v("kafka、elastic agent")]),t._v(" "),_("td",[t._v("192.168.10.134")])]),t._v(" "),_("tr",[_("td",[t._v("es-hot3")]),t._v(" "),_("td",[t._v("2C")]),t._v(" "),_("td",[t._v("4G")]),t._v(" "),_("td",[t._v("120G")]),t._v(" "),_("td",[t._v("data_content,data_hot")]),t._v(" "),_("td",[t._v("kafka、elastic agent")]),t._v(" "),_("td",[t._v("192.168.10.135")])]),t._v(" "),_("tr",[_("td",[t._v("es-warm1")]),t._v(" "),_("td",[t._v("2C")]),t._v(" "),_("td",[t._v("6G")]),t._v(" "),_("td",[t._v("600G")]),t._v(" "),_("td",[t._v("data_content,data_warm")]),t._v(" "),_("td",[t._v("logstash、elastic agent")]),t._v(" "),_("td",[t._v("192.168.10.136")])]),t._v(" "),_("tr",[_("td",[t._v("es-warm2")]),t._v(" "),_("td",[t._v("2C")]),t._v(" "),_("td",[t._v("6G")]),t._v(" "),_("td",[t._v("600G")]),t._v(" "),_("td",[t._v("data_content,data_warm")]),t._v(" "),_("td",[t._v("logstash、elastic agent")]),t._v(" "),_("td",[t._v("192.168.10.137")])]),t._v(" "),_("tr",[_("td",[t._v("es-cold")]),t._v(" "),_("td",[t._v("1C")]),t._v(" "),_("td",[t._v("2G")]),t._v(" "),_("td",[t._v("800G")]),t._v(" "),_("td",[t._v("data_content,data_cold")]),t._v(" "),_("td",[t._v("elastic agent")]),t._v(" "),_("td",[t._v("192.168.10.138")])])])]),t._v(" "),_("h2",{attrs:{id:"软件与系统版本"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#软件与系统版本"}},[t._v("#")]),t._v(" 软件与系统版本")]),t._v(" "),_("p",[t._v("操作系统：rockylinux:9.2"),_("br"),t._v("\n内核版本：5.15.49"),_("br"),t._v("\nELK版本：8.8.2"),_("br"),t._v("\nprometheus版本：2.45.0"),_("br"),t._v("\ngrafana版本：10.0.2")]),t._v(" "),_("hr"),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.cuiliangblog.cn/detail/article/58",target:"_blank",rel:"noopener noreferrer"}},[t._v("原文链接"),_("OutboundLink")],1)])])}),[],!1,null,null,null);_.default=d.exports}}]);