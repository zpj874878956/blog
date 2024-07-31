(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{437:function(s,e,a){"use strict";a.r(e);var n=a(0),r=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("什么是Kubernetes（k8s）？它的主要功能是什么？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Kubernetes（简称 k8s）是一个开源的容器编排平台，用于自动化应用程序的部署、扩展和管理。它的主要功能包括：\n\n应用程序部署和版本控制\n自动伸缩\n容器负载均衡\n自我修复\n存储编排\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("什么是Pod？Pod之间的通信是如何实现的？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Pod 是 Kubernetes 的基本部署单位，包含一个或多个容器。\nPod 内的容器共享相同的网络命名空间，可以通过 localhost 相互通信。\nPod 之间可以通过 Service 或直接使用 Pod IP 进行通信\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("什么是Service？Service有哪些类型？它们的区别是什么？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Service 是 Kubernetes 提供的一种抽象，用于将一组具有相同功能的 Pod 暴露给其他 Pod 或外部客户端。Service 有以下类型：\n\nClusterIP：提供一个集群内部的虚拟 IP 地址，供其他 Pod 访问\nNodePort：在每个节点上暴露一个端口，供外部访问\nLoadBalancer：为 Service 提供一个外部负载均衡器，供外部访问\nExternalName：将 Service 映射到一个外部的名称，如 DNS 名称\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("Kubernetes中的控制器有哪些？它们各自的作用是什么？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Deployment：用于管理无状态应用程序的 Pod\nStatefulSet：用于管理有状态应用程序的 Pod\nDaemonSet：在每个节点上运行一个 Pod 实例\nReplicaSet：确保指定数量的 Pod 副本始终运行\nJob：执行一次性任务\nCronJob：执行定时任务\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("Kubernetes中的存储卷（Volume）有哪些类型？它们的区别是什么？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("emptyDir：临时存储，与 Pod 生命周期相同\nhostPath：挂载节点上的文件或目录到 Pod\nnfs：将 NFS 共享挂载到 Pod\npersistentVolumeClaim：使用 PVC 管理持久化存储\n其他存储插件（如 AWS EBS、GCE PD 等）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("网络插件（CNI）是什么？它的作用是什么？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("容器网络接口（CNI）是一种插件化的网络解决方案，负责配置 Pod 之间的网络通信\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Kubernetes中的调度器是什么？它的作用是什么？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Kubernetes 调度器负责根据 Pod 的资源需求、优先级等因素将 Pod 分配到合适的节点上运行。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Kubernetes中的监控和日志收集是如何实现的？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Kubernetes 中的监控和日志收集通常通过第三方工具实现，如 Prometheus、Grafana（监控）和 Fluentd、Elasticsearch（日志收集）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Kubernetes中的安全机制有哪些？如何保障Pod的安全性？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("身份认证和授权（RBAC）\n网络策略\n节点安全\n容器安全（如安全上下文、限制容器权限等）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Kubernetes中的自动伸缩是如何实现的？有哪些策略可以使用？")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("水平 Pod 自动伸缩（HPA）：根据 CPU 利用率或自定义指标自动调整 Pod 副本数量。\n- 垂直 Pod 自动伸缩（VPA）：根据应用程序的资源需求自动调整 Pod 的 CPU 和内存资源限制。\n- 集群自动伸缩（CA）：根据集群中的资源需求自动调整节点数量。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])}),[],!1,null,null,null);e.default=r.exports}}]);