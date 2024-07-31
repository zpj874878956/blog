(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{444:function(s,a,n){"use strict";n.r(a);var e=n(0),t=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"一、制作镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、制作镜像"}},[s._v("#")]),s._v(" 一、制作镜像")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("FROM tomcat \nLABEL maintainer www.ctnrs.com\nRUN "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" /usr/local/tomcat/webapps/*\nADD target/ROOT /usr/local/tomcat/webapps/ROOT \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("1、配置可信任（如果仓库是HTTPS访问不用配置）")]),s._v(" "),a("p",[s._v("vi /etc/docker/daemon.json")]),s._v(" "),a("p",[s._v('{\n"insecure-registries": ["192.168.31.90"]\n}')]),s._v(" "),a("p",[s._v("2、将镜像仓库认证凭据保存在k8s secret中")]),s._v(" "),a("p",[s._v("kubectl create secret docker-registry registry-auth --docker-username=admin --dockerpassword=Harbor12345 --docker-server=192.168.31.90")]),s._v(" "),a("p",[s._v("3、在yaml中使用这个认证凭据")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("imagePullSecrets:\n- name: registry-auth\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"二、使用deployment控制器部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、使用deployment控制器部署"}},[s._v("#")]),s._v(" 二、使用deployment控制器部署")]),s._v(" "),a("p",[s._v("configmap.yaml")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("apiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: java-demo-config\ndata:\n    application.yml: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n        server:\n          port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n        spring:\n          datasource:\n            url: jdbc:mysql://localhost:3306/test?characterEncoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf-8\n            username: root\n            password: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456789")]),s._v("\n            driver-class-name: com.mysql.jdbc.Driver\n          freemarker:\n            allow-request-override: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            cache: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            check-template-location: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n            charset: UTF-8\n            content-type: text/html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("charset")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf-8\n            expose-request-attributes: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            expose-session-attributes: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            expose-spring-macro-helpers: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n            suffix: .ftl\n            template-loader-path:\n              - classpath:/templates/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br")])]),a("p",[s._v("deployment.yaml")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: java-demo\nspec:\n  replicas: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n  selector:\n    matchLabels:\n      project: www\n      app: java-demo\n  template:\n    metadata:\n      labels:\n        project: www\n        app: java-demo\n    spec:\n      imagePullSecrets:\n      - name: registry-auth\n      containers:\n      - image: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".31.90/microservice/java-demo:v1 \n        name: java-demo\n        volumeMounts:\n        - name: config\n          mountPath: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/tomcat/webapps/ROOT/WEB-INF/classes/application.yml"')]),s._v("\n          subPath: application.yml\n        resources:\n          requests:\n            cpu: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),s._v("\n            memory: 500Mi\n          limits: \n            cpu: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n            memory: 1Gi\n        livenessProbe:\n          httpGet:\n            path: /\n            port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n          initialDelaySeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n          periodSeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        readinessProbe:\n          httpGet:\n            path: /\n            port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n          initialDelaySeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),s._v("\n          periodSeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n      volumes:\n      - name: config\n        configMap:\n          name: java-demo-config \n          items:\n          - key: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application.yml"')]),s._v("\n            path: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application.yml"')]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("h3",{attrs:{id:"三、对外暴露应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、对外暴露应用"}},[s._v("#")]),s._v(" 三、对外暴露应用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("apiVersion: v1\nkind: Service\nmetadata:\n  name: java-demo \nspec:\n  selector:\n    project: www\n    app: java-demo\n  ports:\n    - protocol: TCP\n      port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n      targetPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"四、部署数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、部署数据库"}},[s._v("#")]),s._v(" 四、部署数据库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("apiVersion: v1\nkind: Secret\nmetadata:\n  name: java-demo-db \n  namespace: default\ntype: Opaque\ndata:\n  mysql-root-password: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MTIzNDU2"')]),s._v("\n  mysql-password: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"MTIzNDU2"')]),s._v("\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: java-demo-db \n  namespace: default\nspec:\n  selector:\n    matchLabels:\n      project: www\n      app: mysql\n  template:\n    metadata:\n      labels:\n        project: www\n        app: mysql\n    spec:\n      containers:\n      - name: db\n        image: mysql:5.7.30\n        resources:\n          requests:\n            cpu: 500m\n            memory: 512Mi\n          limits: \n            cpu: 500m\n            memory: 512Mi\n        env:\n        - name: MYSQL_ROOT_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: java-demo-db\n              key: mysql-root-password\n        - name: MYSQL_PASSWORD\n          valueFrom:\n            secretKeyRef:\n              name: java-demo-db\n              key: mysql-password\n        - name: MYSQL_USER\n          value: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"aliang"')]),s._v("\n        - name: MYSQL_DATABASE\n          value: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k8s"')]),s._v("\n        ports:\n        - name: mysql\n          containerPort: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n        livenessProbe:\n          exec:\n            command:\n            - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n            - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n            - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysqladmin ping -u root -p'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MYSQL_ROOT_PASSWORD}")]),s._v('"')]),s._v("\n          initialDelaySeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v("\n          periodSeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        readinessProbe:\n          exec:\n            command:\n            - "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n            - "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n            - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysqladmin ping -u root -p'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MYSQL_ROOT_PASSWORD}")]),s._v('"')]),s._v("\n          initialDelaySeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n          periodSeconds: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n        volumeMounts:\n        - name: data\n          mountPath: /var/lib/mysql\n        \n      volumes:\n      - name: data\n        persistentVolumeClaim:\n          claimName: java-demo-db\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: java-demo-db \n  namespace: default\nspec:\n  storageClassName: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"managed-nfs-storage"')]),s._v("\n  accessModes:\n    - "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ReadWriteOnce"')]),s._v("\n  resources:\n    requests:\n      storage: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8Gi"')]),s._v("\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: java-demo-db\n  namespace: default\nspec:\n  type: ClusterIP\n  ports:\n  - name: mysql\n    port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\n    targetPort: mysql\n  selector:\n    project: www\n    app: mysql \n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);