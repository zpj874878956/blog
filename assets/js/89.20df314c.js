(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{443:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"_1-rbac授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-rbac授权"}},[s._v("#")]),s._v(" 1.RBAC授权")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://pic.zzppjj.top/LightPicture/2023/05/af196ee1abfd502b.jpeg",alt:"af196ee1abfd502b.jpeg"}})]),s._v(" "),a("p",[s._v("解题")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n\nkubectl create clusterrole deployment-clusterrole "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--verb")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("create -- "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("resource")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deployments,daemonsets,statefulsets \nkubectl create serviceaccount cicd-token "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" app-team1 \nkubectl create rolebinding cicd-token "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--serviceaccount")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("app-team1:cicd-token -- "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("clusterrole")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("deployment-clusterrole "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" app-team1 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("参考资料：https://kubernetes.io/zh/docs/reference/access-authn-authz/rbac/")]),s._v(" "),a("h3",{attrs:{id:"_2-节点设置不可用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-节点设置不可用"}},[s._v("#")]),s._v(" 2.节点设置不可用")]),s._v(" "),a("p",[s._v("将名为ek8s-node1 的node设置为不可用，并重新调度该node上所有运行的pods")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context ek8s \n\nkubectl cordon ek8s-node-1 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置为不可调度 ")]),s._v("\nkubectl drain ek8s-node-1 --ignore-daemonsets "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 驱逐节点上 Pod ")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注：如果执行 drain 提示错误，根据提示再加上选项，例如--delete-local-data force")]),s._v(" "),a("h3",{attrs:{id:"_3-升级k8s版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-升级k8s版本"}},[s._v("#")]),s._v(" 3.升级k8s版本")]),s._v(" "),a("p",[s._v("现有的kubernetes集群正在运行版本1.20.0 。仅将主节点上的所有kubernetes控制平面和节点组件升级到版本1.20.1")]),s._v(" "),a("p",[s._v("确保在升级之前drain主节点，并在升级后uncordon主节点")]),s._v(" "),a("p",[s._v("另外，在主节点上升级kubelet和kubectl")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context ek8s \n \nkubectl drain k8s-master-0 --ignore-daemonsets "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" mk8s-master-0 \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kubeadm")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.20")]),s._v(".1-00 –y kubeadm upgrade plan \nkubeadm upgrade apply v1.20.1 --etcd-upgrade"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("false "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 题目要求不升级 etcd kubectl uncordon k8s-master-0 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 升级 kubelet 和 kubectl ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kubelet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.20")]),s._v(".1-00 "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("kubectl")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.20")]),s._v(".1-00 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" systemctl restart kubelet \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看升级结果 ")]),s._v("\nkubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("参考资料：https://kubernetes.io/zh/docs/tasks/administer-cluster/kubeadm/kubeadm- upgrade/")]),s._v(" "),a("h3",{attrs:{id:"_4-etcd备份与恢复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-etcd备份与恢复"}},[s._v("#")]),s._v(" 4.etcd备份与恢复")]),s._v(" "),a("p",[s._v("首先，为运行在https://127.0.0.1:2379上的现有etcd实例创建快照并将快照保存到/data/backup/etcd-snapshot.db")]),s._v(" "),a("p",[s._v("然后还原位于/data/backup/etcd-snapshot-previous.db的现有先前快照")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl snapshot save /data/backup/etcd-snapshot.db -- "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("endpoints")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://127.0.0.1:2379 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cacert")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/KUIN00601/ca.crt -- "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cert")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/KUIN00601/etcd-client.crt "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/opt/KUIN00601/etcd-client.key \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 恢复 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先暂停 kube-apiserver 和 etcd 容器 ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/kubernetes/manifests /etc/kubernetes/manifests.bak "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /var/lib/etcd/ /var/lib/etcd.bak \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ETCDCTL_API")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" etcdctl snapshot restore /data/backup/etcd-snapshot-previous.db -- data-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/var/lib/etcd \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/kubernetes/manifests.bak /etc/kubernetes/manifests \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("注：执行备份命令如果提示没证书文件，exit 退回上一步操作")]),s._v(" "),a("p",[s._v("参 考 资 料 ： https://kubernetes.io/zh/docs/tasks/administer-cluster/configure- upgrade-etcd/")]),s._v(" "),a("h3",{attrs:{id:"_5-网络策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-网络策略"}},[s._v("#")]),s._v(" 5.网络策略")]),s._v(" "),a("p",[s._v("在现有的namespace my-app中创建一个名为allow-port-from-namespace的新NetworkPolicy")]),s._v(" "),a("p",[s._v("确保新的NetworkPolicy允许namespace my-app中的pods来连接到namespace big-corp中的端口8080")]),s._v(" "),a("p",[s._v("进一步确保新的NetworkPolicy：")]),s._v(" "),a("p",[s._v("不允许对没有在监听端口8080的pods的访问")]),s._v(" "),a("p",[s._v("不允许不来自namespace my-app中的pods的访问")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context hk8s \n \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v("  networkpolicy.yaml apiVersion: networking.k8s.io/v1 kind: NetworkPolicy \nmetadata: \n  name: allow-port-from-namespace \n  namespace: my-app spec: \n  podSelector: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   \n  policyTypes: \n  - Ingress \n  ingress: \n  - from: \n    - namespaceSelector:\n        matchLabels: \n          name: big-corp \n    ports: \n    - protocol: TCP \n      port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" \nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" networkpolicy.yaml \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("参 考 资 料 ： https://kubernetes.io/zh/docs/concepts/services-networking/network- policies/")]),s._v(" "),a("h3",{attrs:{id:"_6-svc暴露应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-svc暴露应用"}},[s._v("#")]),s._v(" 6.svc暴露应用")]),s._v(" "),a("p",[s._v("请重新配置现有的部署front-end以及添加名为http的端口规范来公开现有容器nginx的端口80/tcp")]),s._v(" "),a("p",[s._v("创建一个名为front-end-svc的新服务，以公开容器端口http")]),s._v(" "),a("p",[s._v("配置此服务，以通过在排定的节点上的NodePort来公开各个pods")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \nkubectl edit deployment front-end \n… \n      containers: \n      - image: nginx \n        imagePullPolicy: Always \n        name: nginx \n        ports: \n        - name: http \n          protocol: TCP \n          containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" \n… \nkubectl expose deployment front-end "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--port")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" --target-port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("NodePort -- "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("front-end-svc \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h3",{attrs:{id:"_7-ingress"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-ingress"}},[s._v("#")]),s._v(" 7.Ingress")]),s._v(" "),a("p",[s._v("如下创建一个新的nginx ingress资源")]),s._v(" "),a("p",[s._v("名称：pong")]),s._v(" "),a("p",[s._v("Namespace：ing-internal")]),s._v(" "),a("p",[s._v("使用服务端口5678在路径/hello上公开服务hello")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \napiVersion: networking.k8s.io/v1 kind: Ingress \nmetadata: \n  name: pong \n  namespace: ing-internal \n  annotations: \n    nginx.ingress.kubernetes.io/rewrite-target: / spec: \n  rules: \n  - http: \n      paths: \n      - path: /hello \n        pathType: Prefix \n        backend:\n          service: \n            name: hello \n            port: \n              number: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5678")]),s._v(" \n \nkubectl get ingress "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" ing-internal "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-kL")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("获取 ingress 的 IP 地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/hello  \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("参考资料：https://kubernetes.io/zh/docs/concepts/services-networking/ingress/")]),s._v(" "),a("h3",{attrs:{id:"_8-扩容pod数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-扩容pod数量"}},[s._v("#")]),s._v(" 8.扩容pod数量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \nkubectl scale deployment loadbalancer "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--replicas")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"_9-nodeselector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-nodeselector"}},[s._v("#")]),s._v(" 9.nodeselector")]),s._v(" "),a("p",[s._v("按如下要求调度一个pod")]),s._v(" "),a("p",[s._v("名称：nginx-kusc00401")]),s._v(" "),a("p",[s._v("Image: nginx")]),s._v(" "),a("p",[s._v("Node selector:disk=ssd")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \napiVersion: v1 kind: Pod metadata: \n  name: nginx-kusc00401 spec: \n  containers: \n  - name: nginx \n    image: nginx \n  nodeSelector: \n    disk: ssd \nkubectl get po nginx-kusc00401 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" wide \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("参考资料： https://kubernetes.io/zh/docs/concepts/scheduling-eviction/assign-pod-node/")]),s._v(" "),a("h3",{attrs:{id:"_10-统计准备就绪节点数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10-统计准备就绪节点数量"}},[s._v("#")]),s._v(" 10.统计准备就绪节点数量")]),s._v(" "),a("p",[s._v("检查有多少worker nodes已准备就绪（不包括被打上taint：Noschedule的节点），并将数量写入")]),s._v(" "),a("p",[s._v("/opt/KUSC00402/kusc00402.txt")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\nkubectl config use-context k8s \n \nkubectl describe "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("kubectl get nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Ready"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $1}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" Taint"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vc")]),s._v(" NoSchedule "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/KUSC00402/kusc00402.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("注：如果记不住这条命令，手动统计应该也可以")]),s._v(" "),a("h3",{attrs:{id:"_11-pod配置多容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_11-pod配置多容器"}},[s._v("#")]),s._v(" 11.pod配置多容器")]),s._v(" "),a("p",[s._v("创建一个名为kucc4的pod，在pod里面分别为一下每个images单独运行一个app container（可能会有1-4个images）:")]),s._v(" "),a("p",[s._v("nginx+redis+memcached")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \napiVersion: v1 kind: Pod metadata: \n  name: kucc4 spec: \n  containers: \n  - name: nginx \n    image: nginx \n  - name: redis \n    image: redis \n  - name: memcached \n    image: memcached \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"_12-创建pv"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_12-创建pv"}},[s._v("#")]),s._v(" 12.创建pv")]),s._v(" "),a("p",[s._v("创建名为app-data的persistent volume容量为2Gi，访问模式为ReadWriteOnce。volume类型为hostpath，位于/srv/app-data")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context hk8s \n \napiVersion: v1 \nkind: PersistentVolume metadata: \n  name: app-data\nspec: \n  capacity: \n    storage: 2Gi \n  accessModes: \n    - ReadWriteOnce \n  hostPath: \n    path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/srv/app-data"')]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("参考资料： https://kubernetes.io/zh/docs/tasks/configure-pod-container/configure- persistent-volume-storage/")]),s._v(" "),a("h3",{attrs:{id:"_13-pod使用pvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_13-pod使用pvc"}},[s._v("#")]),s._v(" 13.pod使用pvc")]),s._v(" "),a("p",[s._v("创建一个新的PersistentVolumeClaim:")]),s._v(" "),a("p",[s._v("名称：pv-volume")]),s._v(" "),a("p",[s._v("Class: csi-hostpath-sc")]),s._v(" "),a("p",[s._v("容量：10Mi")]),s._v(" "),a("p",[s._v("创建一个新的pod，此pod将作为volume挂载到PersistentVolumeClaim:")]),s._v(" "),a("p",[s._v("名称：web-server")]),s._v(" "),a("p",[s._v("image:nginx")]),s._v(" "),a("p",[s._v("挂载路径：/usr/share/nginx/html")]),s._v(" "),a("p",[s._v("配置新的pod，以对volume具有ReadWriteOnce权限")]),s._v(" "),a("p",[s._v("最后，使用kubectl edit或kubectl patch将")]),s._v(" "),a("p",[s._v("PersistentVolumeClaim的容量扩展为70Mi,并记录此更改")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context ok8s \n \napiVersion: v1 \nkind: PersistentVolumeClaim metadata: \n  name: pv-volume spec: \n  storageClassName: csi-hostpath-sc \n  accessModes: \n    - ReadWriteOnce \n  resources: \n    requests: \n      storage: 10Mi \n--- \napiVersion: v1 kind: Pod metadata: \n  name: web-server spec: \n  containers: \n    - name: web-server \n      image: nginx \n      ports: \n        - containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" \n          name: http-server \n      volumeMounts: \n        - mountPath: /usr/share/nginx/html \n          name: data  \n  volumes: \n    - name: data  \n      persistentVolumeClaim: \n        claimName: pv-volume \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 扩容 PVC 容量 ")]),s._v("\nkubectl edit pvc pv-volume --save-config \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])]),a("p",[s._v("参考资料： https://kubernetes.io/zh/docs/tasks/configure-pod-container/configure- persistent-volume-storage/")]),s._v(" "),a("h3",{attrs:{id:"_14-获取pod错误日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_14-获取pod错误日志"}},[s._v("#")]),s._v(" 14.获取pod错误日志")]),s._v(" "),a("p",[s._v("监控pod bar的日志并：")]),s._v(" "),a("p",[s._v("提取与错误file-not-found想对应的日志行")]),s._v(" "),a("p",[s._v("将这些日志行写入/opt/KUTR00101/bar")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \nkubectl logs foobar "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" file-not-found "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/KUTR00101/bar \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("参考资料：https://kubernetes.io/zh/docs/concepts/cluster-administration/logging/")]),s._v(" "),a("h3",{attrs:{id:"_15-给pod增加一个容器-边车"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_15-给pod增加一个容器-边车"}},[s._v("#")]),s._v(" 15.给pod增加一个容器（边车）")]),s._v(" "),a("p",[s._v("将一个现有的pod集成到kubernetes的内置日志记录体系结构中（例如kubectl logs）添加streaming sidecar容器是实现此要求的一种好方法")]),s._v(" "),a("p",[s._v("使用busybox Image来将名为sidecar的sidecar容器添加到现有的pod legacy-app中。新的sidecar容器必须运行以下命令")]),s._v(" "),a("p",[s._v("/bin/sh -c tail -n+1 -f /var/log/legacy-app.log")]),s._v(" "),a("p",[s._v("使用安装在/var/log的volume。使日志文件legacy-app.log可用于sidecar容器")]),s._v(" "),a("p",[s._v("注：除了添加所需的volume mount以外，请勿更改现有容器的规格")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \napiVersion: v1 kind: Pod metadata: \n  name: legacy-app spec: \n  containers: \n  - name: count \n    image: busybox \n    args: \n    - /bin/sh \n    - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" \n    - "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$i")]),s._v(": "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /var/log/legacy-app.log"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sleep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v(" \n    volumeMounts: \n    - name: varlog \n      mountPath: /var/log \n  - name: sidecar \n    image: busybox \n    args: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("/bin/sh, -c, "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tail -n+1 -f /var/log/legacy-app.log'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" \n    volumeMounts: \n    - name: varlog \n      mountPath: /var/log \n  volumes: \n  - name: varlog \n    emptyDir: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n \nkubectl get pod big-corp-app "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" big-corp-app.yaml "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出后修改文件kubectl delete pod big-corp-app ")]),s._v("\nkubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" big-corp-app.yaml \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br")])]),a("p",[s._v("参考资料：https://kubernetes.io/zh/docs/concepts/cluster-administration/logging/")]),s._v(" "),a("p",[s._v("注：由于 Pod 不能在线增加容器，可先导出 yaml 再添加最后 apply")]),s._v(" "),a("h3",{attrs:{id:"_16-统计使用cpu最高的pod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_16-统计使用cpu最高的pod"}},[s._v("#")]),s._v(" 16.统计使用cpu最高的pod")]),s._v(" "),a("p",[s._v("通过pod label name=cpu-utilizer，找到运行时占用大量cpu的pod，并将占用CPU最高的pod名称写入文件")]),s._v(" "),a("p",[s._v("/opt/KUTR00401/KUTR00401.txt(已存在)")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context k8s \n \nkubectl "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("top")]),s._v(" pod "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("cpu-utilizer --sort-by"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cpu"')]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"<podname>"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /opt/KUR00401.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将第一个 Pod 名称写到文件")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_17-节点notready处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_17-节点notready处理"}},[s._v("#")]),s._v(" 17.节点NotReady处理")]),s._v(" "),a("p",[s._v("名为wk8s-node-0的kubernetes worker node处于NotReady 状态。调查发生这种情况的原因，并采取相应措施将node恢复为Ready状态，确保所做的任何更改永久有效")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("kubectl config use-context wk8s \n \nkubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" wk8s-node-0 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" \nsystemctl status kubelet\n systemctl start kubelet \nsystemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" kubelet \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);