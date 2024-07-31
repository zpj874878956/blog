(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{451:function(e,o,v){"use strict";v.r(o);var t=v(0),_=Object(t.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h3",{attrs:{id:"一、pod"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#一、pod"}},[e._v("#")]),e._v(" 一、Pod")]),e._v(" "),o("p",[e._v("Pod是一组紧密关联的容器集合，支持多个容器在一个Pod中共享网络和文件系统，可以通过进程间通信和文件共享这种简单高效的方式完成服务，是Kubernetes调度的基本单位。Pod的设计理念是每个Pod都有一个唯一的IP。")]),e._v(" "),o("p",[e._v("Pod具有如下特征：")]),e._v(" "),o("ul",[o("li",[e._v("包含多个共享IPC、Network和UTC namespace的容器，可直接通过localhost通信")]),e._v(" "),o("li",[e._v("所有Pod内容器都可以访问共享的Volume，可以访问共享数据")]),e._v(" "),o("li",[e._v("优雅终止：Pod删除的时候先给其内的进程发送SIGTERM，等待一段时间(grace period)后才强制停止依然还在运行的进程")]),e._v(" "),o("li",[e._v("特权容器(通过SecurityContext配置)具有改变系统配置的权限(在网络插件中大量应用)")]),e._v(" "),o("li",[e._v("支持三种重启策略（restartPolicy），分别是：Always、OnFailure、Never")]),e._v(" "),o("li",[e._v("支持三种镜像拉取策略（imagePullPolicy），分别是：Always、Never、IfNotPresent")]),e._v(" "),o("li",[e._v("资源限制，Kubernetes通过CGroup限制容器的CPU以及内存等资源，可以设置request以及limit值")]),e._v(" "),o("li",[e._v("健康检查，提供两种健康检查探针，分别是livenessProbe和redinessProbe，前者用于探测容器是否存活，如果探测失败，则根据重启策略进行重启操作，后者用于检查容器状态是否正常，如果检查容器状态不正常，则请求不会到达该Pod")]),e._v(" "),o("li",[e._v("Init container在所有容器运行之前执行，常用来初始化配置")]),e._v(" "),o("li",[e._v("容器生命周期钩子函数，用于监听容器生命周期的特定事件，并在事件发生时执行已注册的回调函数，支持两种钩子函数：postStart和preStop，前者是在容器启动后执行，后者是在容器停止前执行")])]),e._v(" "),o("h3",{attrs:{id:"二、namespace"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#二、namespace"}},[e._v("#")]),e._v(" 二、Namespace")]),e._v(" "),o("p",[e._v("Namespace（命名空间）是对一组资源和对象的抽象集合，比如可以用来将系统内部的对象划分为不同的项目组或者用户组。常见的pod、service、replicaSet和deployment等都是属于某一个namespace的(默认是default)，而node, persistentVolumes等则不属于任何namespace。")]),e._v(" "),o("p",[o("strong",[e._v("常用namespace操作：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("kubectl get namespace")]),e._v(", 查询所有namespace")]),e._v(" "),o("li",[o("code",[e._v("kubectl create namespace ns-name")]),e._v("，创建namespace")]),e._v(" "),o("li",[o("code",[e._v("kubectl delete namespace ns-name")]),e._v(", 删除namespace")])]),e._v(" "),o("p",[o("strong",[e._v("删除命名空间时，需注意以下几点：")])]),e._v(" "),o("ol",[o("li",[e._v("删除一个namespace会自动删除所有属于该namespace的资源。")]),e._v(" "),o("li",[o("code",[e._v("default")]),e._v(" 和 "),o("code",[e._v("kube-system")]),e._v(" 命名空间不可删除。")]),e._v(" "),o("li",[o("code",[e._v("PersistentVolumes")]),e._v("是不属于任何namespace的，但"),o("code",[e._v("PersistentVolumeClaim")]),e._v("是属于某个特定namespace的。")]),e._v(" "),o("li",[e._v("Events是否属于namespace取决于产生"),o("code",[e._v("events")]),e._v("的对象。")])]),e._v(" "),o("h3",{attrs:{id:"三、node"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#三、node"}},[e._v("#")]),e._v(" 三、Node")]),e._v(" "),o("p",[e._v("Node是Pod真正运行的主机，可以是物理机也可以是虚拟机。Node本质上不是Kubernetes来创建的， Kubernetes只是管理Node上的资源。为了管理Pod，每个Node节点上至少需要运行"),o("code",[e._v("container runtime（Docker）")]),e._v("、kubelet和kube-proxy服务。")]),e._v(" "),o("p",[o("strong",[e._v("常用node操作：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("kubectl get nodes")]),e._v("，查询所有node")]),e._v(" "),o("li",[o("code",[e._v("kubectl cordon $nodename")]),e._v(", 将node标志为不可调度")]),e._v(" "),o("li",[o("code",[e._v("kubectl uncordon $nodename")]),e._v(", 将node标志为可调度")])]),e._v(" "),o("p",[o("strong",[e._v("taint(污点)")])]),e._v(" "),o("p",[e._v("使用"),o("code",[e._v("kubectl taint")]),e._v("命令可以给某个Node节点设置污点，Node被设置上污点之后就和Pod之间存在了一种相斥的关系，可以让Node拒绝Pod的调度执行，甚至将Node已经存在的Pod驱逐出去。每个污点的组成："),o("code",[e._v("key=value:effect")]),e._v("，当前"),o("code",[e._v("taint effect")]),e._v("支持如下三个选项：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("NoSchedule")]),e._v("：表示k8s将不会将Pod调度到具有该污点的Node上")]),e._v(" "),o("li",[o("code",[e._v("PreferNoSchedule")]),e._v("：表示k8s将尽量避免将Pod调度到具有该污点的Node上")]),e._v(" "),o("li",[o("code",[e._v("NoExecute")]),e._v("：表示k8s将不会将Pod调度到具有该污点的Node上，同时会将Node上已经存在的Pod驱逐出去")])]),e._v(" "),o("p",[o("strong",[e._v("常用命令如下：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("kubectl taint node node0 key1=value1:NoShedule")]),e._v("，为node0设置不可调度污点")]),e._v(" "),o("li",[o("code",[e._v("kubectl taint node node0 key-")]),e._v("，将node0上key值为key1的污点移除")]),e._v(" "),o("li",[o("code",[e._v("kubectl taint node node1 node-role.kubernetes.io/master=:NoSchedule")]),e._v("，为kube-master节点设置不可调度污点")]),e._v(" "),o("li",[o("code",[e._v("kubectl taint node node1 node-role.kubernetes.io/master=PreferNoSchedule")]),e._v("，为kube-master节点设置尽量不可调度污点")])]),e._v(" "),o("p",[o("strong",[e._v("容忍(Tolerations)")])]),e._v(" "),o("p",[e._v("设置了污点的Node将根据taint的"),o("code",[e._v("effect：NoSchedule")]),e._v("、"),o("code",[e._v("PreferNoSchedule")]),e._v("、"),o("code",[e._v("NoExecute")]),e._v("和Pod之间产生互斥的关系，Pod将在一定程度上不会被调度到Node上。 但我们可以在Pod上设置容忍(Toleration)，意思是设置了容忍的Pod将可以容忍污点的存在，可以被调度到存在污点的Node上。")]),e._v(" "),o("h3",{attrs:{id:"四、service"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#四、service"}},[e._v("#")]),e._v(" 四、Service")]),e._v(" "),o("p",[e._v("Service是对一组提供相同功能的Pods的抽象，并为他们提供一个统一的入口，借助 Service 应用可以方便的实现服务发现与负载均衡，并实现应用的零宕机升级。Service通过标签(label)来选取后端Pod，一般配合ReplicaSet或者Deployment来保证后端容器的正常运行。")]),e._v(" "),o("p",[o("strong",[e._v("service 有如下四种类型，默认是ClusterIP：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ClusterIP")]),e._v(": 默认类型，自动分配一个仅集群内部可以访问的虚拟IP")]),e._v(" "),o("li",[o("code",[e._v("NodePort")]),e._v(": 在ClusterIP基础上为Service在每台机器上绑定一个端口，这样就可以通过 NodeIP:NodePort 来访问该服务")]),e._v(" "),o("li",[o("code",[e._v("LoadBalancer")]),e._v(": 在NodePort的基础上，借助cloud provider创建一个外部的负载均衡器，并将请求转发到 NodeIP:NodePort")]),e._v(" "),o("li",[o("code",[e._v("ExternalName")]),e._v(": 将服务通过DNS CNAME记录方式转发到指定的域名")])]),e._v(" "),o("p",[e._v("另外，也可以将已有的服务以Service的形式加入到Kubernetes集群中来，只需要在创建 Service 的时候不指定Label selector，而是在Service创建好后手动为其添加endpoint。")]),e._v(" "),o("h3",{attrs:{id:"五、volume-存储卷"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#五、volume-存储卷"}},[e._v("#")]),e._v(" 五、Volume 存储卷")]),e._v(" "),o("p",[e._v("默认情况下容器的数据是非持久化的，容器消亡以后数据也会跟着丢失，所以Docker提供了Volume机制以便将数据持久化存储。Kubernetes提供了更强大的Volume机制和插件，解决了容器数据持久化以及容器间共享数据的问题。")]),e._v(" "),o("p",[o("strong",[e._v("Kubernetes存储卷的生命周期与Pod绑定")])]),e._v(" "),o("ul",[o("li",[e._v("容器挂掉后Kubelet再次重启容器时，Volume的数据依然还在")]),e._v(" "),o("li",[e._v("Pod删除时，Volume才会清理。数据是否丢失取决于具体的Volume类型，比如emptyDir的数据会丢失，而PV的数据则不会丢")])]),e._v(" "),o("p",[o("strong",[e._v("目前Kubernetes主要支持以下Volume类型：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("emptyDir")]),e._v("：Pod存在，emptyDir就会存在，容器挂掉不会引起emptyDir目录下的数据丢失，但是pod被删除或者迁移，emptyDir也会被删除")]),e._v(" "),o("li",[o("code",[e._v("hostPath")]),e._v("：hostPath允许挂载Node上的文件系统到Pod里面去")]),e._v(" "),o("li",[o("code",[e._v("NFS（Network File System）")]),e._v("：网络文件系统，Kubernetes中通过简单地配置就可以挂载NFS到Pod中，而NFS中的数据是可以永久保存的，同时NFS支持同时写操作。")]),e._v(" "),o("li",[o("code",[e._v("glusterfs")]),e._v("：同NFS一样是一种网络文件系统，Kubernetes可以将glusterfs挂载到Pod中，并进行永久保存")]),e._v(" "),o("li",[o("code",[e._v("cephfs")]),e._v("：一种分布式网络文件系统，可以挂载到Pod中，并进行永久保存")]),e._v(" "),o("li",[o("code",[e._v("subpath")]),e._v("：Pod的多个容器使用同一个Volume时，会经常用到")]),e._v(" "),o("li",[o("code",[e._v("secret")]),e._v("：密钥管理，可以将敏感信息进行加密之后保存并挂载到Pod中")]),e._v(" "),o("li",[o("code",[e._v("persistentVolumeClaim")]),e._v("：用于将持久化存储（PersistentVolume）挂载到Pod中")])]),e._v(" "),o("h3",{attrs:{id:"六、persistentvolume-pv-持久化存储卷"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#六、persistentvolume-pv-持久化存储卷"}},[e._v("#")]),e._v(" 六、PersistentVolume(PV) 持久化存储卷")]),e._v(" "),o("p",[e._v("PersistentVolume(PV)是集群之中的一块网络存储。跟 Node 一样，也是集群的资源。PersistentVolume (PV)和PersistentVolumeClaim (PVC)提供了方便的持久化卷: PV提供网络存储资源，而PVC请求存储资源并将其挂载到Pod中。")]),e._v(" "),o("p",[o("strong",[e._v("PV的访问模式(accessModes)有三种:")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("ReadWriteOnce(RWO)")]),e._v(": 是最基本的方式，可读可写，但只支持被单个Pod挂载。")]),e._v(" "),o("li",[o("code",[e._v("ReadOnlyMany(ROX)")]),e._v(": 可以以只读的方式被多个Pod挂载。")]),e._v(" "),o("li",[o("code",[e._v("ReadWriteMany(RWX)")]),e._v(": 这种存储可以以读写的方式被多个Pod共享。")])]),e._v(" "),o("p",[e._v("不是每一种存储都支持这三种方式，像共享方式，目前支持的还比较少，比较常用的是 NFS。在PVC绑定PV时通常根据两个条件来绑定，一个是存储的大小，另一个就是 访问模式。")]),e._v(" "),o("p",[o("strong",[e._v("PV的回收策略(persistentVolumeReclaimPolicy)也有三种：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Retain")]),e._v("，不清理保留Volume(需要手动清理)")]),e._v(" "),o("li",[o("code",[e._v("Recycle")]),e._v("，删除数据，即 rm -rf /thevolume/* (只有NFS和HostPath支持)")]),e._v(" "),o("li",[o("code",[e._v("Delete")]),e._v("，删除存储资源")])]),e._v(" "),o("h3",{attrs:{id:"七、deployment-无状态应用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#七、deployment-无状态应用"}},[e._v("#")]),e._v(" 七、Deployment 无状态应用")]),e._v(" "),o("p",[e._v("一般情况下我们不需要手动创建Pod实例，而是采用更高一层的抽象或定义来管理Pod，针对无状态类型的应用，Kubernetes使用Deloyment的Controller对象与之对应。其典型的应用场景包括：")]),e._v(" "),o("ul",[o("li",[e._v("定义Deployment来创建Pod和ReplicaSet")]),e._v(" "),o("li",[e._v("滚动升级和回滚应用")]),e._v(" "),o("li",[e._v("扩容和缩容")]),e._v(" "),o("li",[e._v("暂停和继续Deployment")])]),e._v(" "),o("p",[o("strong",[e._v("常用的操作命令如下：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("kubectl run www --image=10.0.0.183:5000/hanker/www:0.0.1 --port=8080")]),e._v(" 生成一个Deployment对象")]),e._v(" "),o("li",[o("code",[e._v("kubectl get deployment --all-namespaces")]),e._v(" 查找Deployment")]),e._v(" "),o("li",[o("code",[e._v("kubectl describe deployment www")]),e._v(" 查看某个Deployment")]),e._v(" "),o("li",[o("code",[e._v("kubectl edit deployment www")]),e._v(" 编辑Deployment定义")]),e._v(" "),o("li",[o("code",[e._v("kubectl delete deployment www")]),e._v(" 删除某Deployment")]),e._v(" "),o("li",[o("code",[e._v("kubectl scale deployment/www--replicas=2")]),e._v(" 扩缩容操作，即修改Deployment下的Pod实例个数")]),e._v(" "),o("li",[o("code",[e._v("kubectl set image deployment/nginx-deployment nginx=nginx:1.9.1")]),e._v("更新镜像")]),e._v(" "),o("li",[o("code",[e._v("kubectl rollout undo deployment/nginx-deployment")]),e._v(" 回滚操作")]),e._v(" "),o("li",[o("code",[e._v("kubectl rollout status deployment/nginx-deployment")]),e._v(" 查看回滚进度")]),e._v(" "),o("li",[o("code",[e._v("kubectl autoscale deployment nginx-deployment --min=10 --max=15 --cpu-percent=80")]),e._v(" 启用水平伸缩（HPA - horizontal pod autoscaling），设置最小、最大实例数量以及目标cpu使用率")]),e._v(" "),o("li",[o("code",[e._v("kubectl rollout pause deployment/nginx-deployment")]),e._v(" 暂停更新Deployment")]),e._v(" "),o("li",[o("code",[e._v("kubectl rollout resume deploy nginx")]),e._v(" 恢复更新Deployment")])]),e._v(" "),o("p",[o("strong",[e._v("更新策略：")])]),e._v(" "),o("p",[o("code",[e._v(".spec.strategy")]),e._v(" 指新的Pod替换旧的Pod的策略，有以下两种类型")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("RollingUpdate")]),e._v(" 滚动升级，可以保证应用在升级期间，对外正常提供服务。")]),e._v(" "),o("li",[o("code",[e._v("Recreate")]),e._v(" 重建策略，在创建出新的Pod之前会先杀掉所有已存在的Pod。")])]),e._v(" "),o("p",[o("strong",[e._v("Deployment和ReplicaSet两者之间的关系：")])]),e._v(" "),o("ul",[o("li",[e._v("使用Deployment来创建ReplicaSet。ReplicaSet在后台创建pod，检查启动状态，看它是成功还是失败。")]),e._v(" "),o("li",[e._v("当执行更新操作时，会创建一个新的ReplicaSet，Deployment会按照控制的速率将pod从旧的ReplicaSet移 动到新的ReplicaSet中")])]),e._v(" "),o("h3",{attrs:{id:"八、statefulset-有状态应用"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#八、statefulset-有状态应用"}},[e._v("#")]),e._v(" 八、StatefulSet 有状态应用")]),e._v(" "),o("p",[e._v("Deployments和ReplicaSets是为无状态服务设计的，那么StatefulSet则是为了有状态服务而设计，其应用场景包括：")]),e._v(" "),o("ul",[o("li",[e._v("稳定的持久化存储，即Pod重新调度后还是能访问到相同的持久化数据，基于PVC来实现")]),e._v(" "),o("li",[e._v("稳定的网络标志，即Pod重新调度后其PodName和HostName不变，基于Headless Service(即没有Cluster IP的Service)来实现")]),e._v(" "),o("li",[e._v("有序部署，有序扩展，即Pod是有顺序的，在部署或者扩展的时候要依据定义的顺序依次进行操作(即从0到N-1，在下一个Pod运行之前所有之前的Pod必须都是Running和Ready状态)，基于init containers来实现")]),e._v(" "),o("li",[e._v("有序收缩，有序删除(即从N-1到0)")])]),e._v(" "),o("p",[o("strong",[e._v("支持两种更新策略：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("OnDelete")]),e._v(": 当 "),o("code",[e._v(".spec.template")]),e._v("更新时，并不立即删除旧的Pod，而是等待用户手动删除这些旧Pod后自动创建新Pod。这是默认的更新策略，兼容v1.6版本的行为")]),e._v(" "),o("li",[o("code",[e._v("RollingUpdate")]),e._v(": 当 "),o("code",[e._v(".spec.template")]),e._v(" 更新时，自动删除旧的Pod并创建新Pod替换。在更新时这些Pod是按逆序的方式进行，依次删除、创建并等待Pod变成Ready状态才进行下一个Pod的更新。")])]),e._v(" "),o("h3",{attrs:{id:"九、daemonset-守护进程集"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#九、daemonset-守护进程集"}},[e._v("#")]),e._v(" 九、DaemonSet 守护进程集")]),e._v(" "),o("p",[e._v("DaemonSet保证在特定或所有Node节点上都运行一个Pod实例，常用来部署一些集群的日志采集、监控或者其他系统管理应用。典型的应用包括:")]),e._v(" "),o("ul",[o("li",[e._v("日志收集，比如fluentd，logstash等")]),e._v(" "),o("li",[e._v("系统监控，比如Prometheus Node Exporter，collectd等")]),e._v(" "),o("li",[e._v("系统程序，比如kube-proxy, kube-dns, glusterd, ceph，ingress-controller等")])]),e._v(" "),o("p",[o("strong",[e._v("指定Node节点：")])]),e._v(" "),o("p",[e._v("DaemonSet会忽略Node的unschedulable状态，有两种方式来指定Pod只运行在指定的Node节点上:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("nodeSelector")]),e._v(": 只调度到匹配指定label的Node上")]),e._v(" "),o("li",[o("code",[e._v("nodeAffinity")]),e._v(": 功能更丰富的Node选择器，比如支持集合操作")]),e._v(" "),o("li",[o("code",[e._v("podAffinity")]),e._v(": 调度到满足条件的Pod所在的Node上")])]),e._v(" "),o("p",[o("strong",[e._v("目前支持两种策略：")])]),e._v(" "),o("ul",[o("li",[o("code",[e._v("OnDelete")]),e._v(": 默认策略，更新模板后，只有手动删除了旧的Pod后才会创建新的Pod")]),e._v(" "),o("li",[o("code",[e._v("RollingUpdate")]),e._v(": 更新DaemonSet模版后，自动删除旧的Pod并创建新的Pod")])]),e._v(" "),o("h3",{attrs:{id:"十、ingress"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#十、ingress"}},[e._v("#")]),e._v(" 十、Ingress")]),e._v(" "),o("p",[e._v("Kubernetes中的负载均衡我们主要用到了以下两种机制：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Service")]),e._v("：使用Service提供集群内部的负载均衡，Kube-proxy负责将service请求负载均衡到后端的Pod中")]),e._v(" "),o("li",[o("code",[e._v("Ingress Controller")]),e._v("：使用Ingress提供集群外部的负载均衡")])]),e._v(" "),o("p",[e._v("Service和Pod的IP仅可在集群内部访问。集群外部的请求需要通过负载均衡转发到service所在节点暴露的端口上，然后再由kube-proxy通过边缘路由器将其转发到相关的Pod，Ingress可以给service提供集群外部访问的URL、负载均衡、HTTP路由等，为了配置这些Ingress规则，集群管理员需要部署一个Ingress Controller，它监听Ingress和service的变化，并根据规则配置负载均衡并提供访问入口。")]),e._v(" "),o("p",[o("strong",[e._v("常用的ingress controller：")])]),e._v(" "),o("ul",[o("li",[e._v("nginx")]),e._v(" "),o("li",[e._v("traefik")]),e._v(" "),o("li",[e._v("Kong")]),e._v(" "),o("li",[e._v("Openresty")])]),e._v(" "),o("h3",{attrs:{id:"十一、job-cronjob-任务和定时任务"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#十一、job-cronjob-任务和定时任务"}},[e._v("#")]),e._v(" 十一、Job & CronJob 任务和定时任务")]),e._v(" "),o("p",[e._v("Job负责批量处理短暂的一次性任务 (short lived>CronJob即定时任务，就类似于Linux系统的crontab，在指定的时间周期运行指定的任务。")]),e._v(" "),o("h3",{attrs:{id:"十二、hpa-horizontal-pod-autoscaling-水平伸缩"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#十二、hpa-horizontal-pod-autoscaling-水平伸缩"}},[e._v("#")]),e._v(" 十二、HPA（Horizontal Pod Autoscaling） 水平伸缩")]),e._v(" "),o("p",[e._v("Horizontal Pod Autoscaling可以根据CPU、内存使用率或应用自定义metrics自动扩展Pod数量 (支持replication controller、deployment和replica set)。")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("控制管理器默认每隔30s查询metrics的资源使用情况(可以通过 "),o("code",[e._v("--horizontal-pod-autoscaler-sync-period")]),e._v(" 修改)")])]),e._v(" "),o("li",[o("p",[e._v("支持三种metrics类型")])]),e._v(" "),o("li",[o("ul",[o("li",[e._v("预定义metrics(比如Pod的CPU)以利用率的方式计算")]),e._v(" "),o("li",[e._v("自定义的Pod metrics，以原始值(raw value)的方式计算")]),e._v(" "),o("li",[e._v("自定义的object metrics")])])]),e._v(" "),o("li",[o("p",[e._v("支持两种metrics查询方式:Heapster和自定义的REST API")])]),e._v(" "),o("li",[o("p",[e._v("支持多metrics")])])]),e._v(" "),o("p",[e._v("可以通过如下命令创建HPA："),o("code",[e._v("kubectl autoscale deployment php-apache --cpu-percent=50 --min=1 --max=10")])]),e._v(" "),o("h3",{attrs:{id:"十三、service-account"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#十三、service-account"}},[e._v("#")]),e._v(" 十三、Service Account")]),e._v(" "),o("p",[e._v("Service account是为了方便Pod里面的进程调用Kubernetes API或其他外部服务而设计的！")]),e._v(" "),o("p",[o("strong",[e._v("授权")])]),e._v(" "),o("p",[e._v("Service Account为服务提供了一种方便的认证机制，但它不关心授权的问题。可以配合RBAC(Role Based Access Control)来为Service Account鉴权，通过定义Role、RoleBinding、ClusterRole、ClusterRoleBinding来对sa进行授权。")]),e._v(" "),o("h3",{attrs:{id:"十四、secret-密钥"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#十四、secret-密钥"}},[e._v("#")]),e._v(" 十四、Secret 密钥")]),e._v(" "),o("p",[e._v("Sercert-密钥解决了密码、token、密钥等敏感数据的配置问题，而不需要把这些敏感数据暴露到镜像或者Pod Spec中。Secret可以以Volume或者环境变量的方式使用。有如下三种类型：")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("Service Account")]),e._v(": 用来访问Kubernetes API，由Kubernetes自动创建，并且会自动挂载到Pod的 "),o("code",[e._v("/run/secrets/kubernetes.io/serviceaccount")]),e._v(" 目录中;")]),e._v(" "),o("li",[o("code",[e._v("Opaque")]),e._v(": base64编码格式的Secret，用来存储密码、密钥等;")]),e._v(" "),o("li",[o("code",[e._v("kubernetes.io/dockerconfigjson")]),e._v(": 用来存储私有docker registry的认证信息。")])]),e._v(" "),o("h3",{attrs:{id:"十五、configmap-配置中心"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#十五、configmap-配置中心"}},[e._v("#")]),e._v(" 十五、ConfigMap 配置中心")]),e._v(" "),o("p",[e._v("ConfigMap用于保存配置数据的键值对，可以用来保存单个属性，也可以用来保存配置文件。ConfigMap跟secret很类似，但它可以更方便地处理不包含敏感信息的字符串。ConfigMap可以通过三种方式在Pod中使用，三种分别方式为:设置环境变量、设置容器命令行参数以及在Volume中直接挂载文件或目录。")]),e._v(" "),o("p",[e._v("可以使用 "),o("code",[e._v("kubectl create configmap")]),e._v("从文件、目录或者key-value字符串创建等创建 ConfigMap。也可以通过 "),o("code",[e._v("kubectl create-f value.yaml")]),e._v(" 创建。")]),e._v(" "),o("h3",{attrs:{id:"十六、resource-quotas-资源配额"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#十六、resource-quotas-资源配额"}},[e._v("#")]),e._v(" 十六、Resource Quotas 资源配额")]),e._v(" "),o("p",[e._v("资源配额(Resource Quotas)是用来限制用户资源用量的一种机制。")]),e._v(" "),o("p",[e._v("资源配额有如下类型：")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("计算资源，包括cpu和memory")])]),e._v(" "),o("li",[o("ul",[o("li",[e._v("cpu, limits.cpu, requests.cpu")]),e._v(" "),o("li",[e._v("memory, limits.memory, requests.memory")])])]),e._v(" "),o("li",[o("p",[e._v("存储资源，包括存储资源的总量以及指定storage class的总量")])]),e._v(" "),o("li",[o("ul",[o("li",[e._v("requests.storage:存储资源总量，如500Gi")]),e._v(" "),o("li",[e._v("persistentvolumeclaims:pvc的个数")]),e._v(" "),o("li",[e._v("storageclass.storage.k8s.io/requests.storage")]),e._v(" "),o("li",[e._v("storageclass.storage.k8s.io/persistentvolumeclaims")])])]),e._v(" "),o("li",[o("p",[e._v("对象数，即可创建的对象的个数")])]),e._v(" "),o("li",[o("ul",[o("li",[e._v("pods, replicationcontrollers, configmaps, secrets")]),e._v(" "),o("li",[e._v("resourcequotas, persistentvolumeclaims")]),e._v(" "),o("li",[e._v("services, services.loadbalancers, services.nodeports")])])])]),e._v(" "),o("p",[e._v("它的工作原理为:")]),e._v(" "),o("ul",[o("li",[e._v("资源配额应用在Namespace上，并且每个Namespace最多只能有一个 ResourceQuota 对象")]),e._v(" "),o("li",[e._v("开启计算资源配额后，创建容器时必须配置计算资源请求或限制(也可以 用LimitRange设置默认值)，用户超额后禁止创建新的资源")])]),e._v(" "),o("hr"),e._v(" "),o("p",[o("a",{attrs:{href:"https://www.cnblogs.com/lvzhenjiang/p/15836618.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("原文链接"),o("OutboundLink")],1)])])}),[],!1,null,null,null);o.default=_.exports}}]);