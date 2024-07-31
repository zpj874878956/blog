(window.webpackJsonp=window.webpackJsonp||[]).push([[343],{696:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("这次来体验一个开源的照片管理程序，叫 photoprism，功能很强大，适合喜欢摄影或者收集的朋友使用。不过注意，这个程序是针对照片管理的，并不适合作为图床使用。程序由于使用 TensorFlow，官方推荐内存不小于 4G 的机子使用，内存太小 TensorFlow 就跑不起来了。")]),s._v(" "),t("p",[s._v("photoprism 的官方开源地址在这")]),s._v(" "),t("blockquote",[t("p",[t("a",{attrs:{href:"https://github.com/",title:"Github",target:"_blank",rel:"noopener noreferrer"}},[s._v("GitHub"),t("OutboundLink")],1)]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/photoprism/photoprism",target:"_blank",rel:"noopener noreferrer"}},[s._v("photoprism/photoprism"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("AI-Powered Photos App for the Decentralized Web 🌈💎✨ "),t("a",{attrs:{href:"https://www.photoprism.app/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.photoprism.app"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("33635  1846")])]),s._v(" "),t("h2",{attrs:{id:"一、环境部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、环境部署"}},[s._v("#")]),s._v(" 一、环境部署")]),s._v(" "),t("p",[s._v("我使用的机子是 ubuntu 系统，按照官方的指引使用 docker 部署")]),s._v(" "),t("p",[s._v("首先更新一下软件包")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" update "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" upgrade\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("安装 docker")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker.io\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("安装 docker compose")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" python3-pip libffi-dev\npip3 "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /usr/local/bin/docker-compose\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("下载 docker-compose.yml")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.photoprism.app/docker/docker-compose.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("下载下来应该是下面这个样子，可以按照需求更改配置，注意一定要更改密码")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Example Docker Compose config file for PhotoPrism (Linux / AMD64)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Note:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - Running PhotoPrism on a server with less than 4 GB of swap space or setting a memory/swap limit can cause unexpected")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#   restarts ("crashes"), for example, when the indexer temporarily needs more memory to process large files.')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - If you install PhotoPrism on a public server outside your home network, please always run it behind a secure")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   HTTPS reverse proxy such as Traefik or Caddy. Your files and passwords will otherwise be transmitted")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   in clear text and can be intercepted by anyone, including your provider, hackers, and governments:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   https://docs.photoprism.app/getting-started/proxies/traefik/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Setup Guides:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - https://docs.photoprism.app/getting-started/docker-compose/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - https://docs.photoprism.app/getting-started/raspberry-pi/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - https://www.photoprism.app/kb/activation")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Troubleshooting Checklists:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - https://docs.photoprism.app/getting-started/troubleshooting/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - https://docs.photoprism.app/getting-started/troubleshooting/docker/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - https://docs.photoprism.app/getting-started/troubleshooting/mariadb/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CLI Commands:")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - https://docs.photoprism.app/getting-started/docker-compose/#command-line-interface")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# All commands may have to be prefixed with "sudo" when not running as root.')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# This will point the home directory shortcut ~ to /root in volume mounts.")]),s._v("\n\nservices:\n  photoprism:\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Use photoprism/photoprism:preview for testing preview builds:")]),s._v("\n    image: photoprism/photoprism:latest\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Don't enable automatic restarts until PhotoPrism has been properly configured and tested!")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## If the service gets stuck in a restart loop, this points to a memory, filesystem, network, or database issue:")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## https://docs.photoprism.app/getting-started/troubleshooting/#fatal-server-errors")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# restart: unless-stopped")]),s._v("\n    stop_grace_period: 10s\n    depends_on:\n      - mariadb\n    security_opt:\n      - seccomp:unconfined\n      - apparmor:unconfined\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Server port mapping in the format "Host:Container". To use a different port, change the host port on')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## the left-hand side and keep the container port, e.g. "80:2342" (for HTTP) or "443:2342 (for HTTPS):')]),s._v("\n    ports:\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2342:2342"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Before you start the service, please check the following config options (and change them as needed):")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## https://docs.photoprism.app/getting-started/config-options/")]),s._v("\n    environment:\n      PHOTOPRISM_ADMIN_USER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# admin login username")]),s._v("\n      PHOTOPRISM_ADMIN_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure"')]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# initial admin password (8-72 characters)")]),s._v("\n      PHOTOPRISM_AUTH_MODE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"password"')]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# authentication mode (public, password)")]),s._v("\n      PHOTOPRISM_SITE_URL: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://localhost:2342/"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# server URL in the format "http(s)://domain.name(:port)/(path)"')]),s._v("\n      PHOTOPRISM_DISABLE_TLS: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables HTTPS/TLS even if the site URL starts with https:// and a certificate is available")]),s._v("\n      PHOTOPRISM_DEFAULT_TLS: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# defaults to a self-signed HTTPS/TLS certificate if no other certificate is available")]),s._v("\n      PHOTOPRISM_ORIGINALS_LIMIT: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# file size limit for originals in MB (increase for high-res video)")]),s._v("\n      PHOTOPRISM_HTTP_COMPRESSION: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"gzip"')]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# improves transfer speed and bandwidth utilization (none or gzip)")]),s._v("\n      PHOTOPRISM_LOG_LEVEL: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"info"')]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# log level: trace, debug, info, warning, error, fatal, or panic")]),s._v("\n      PHOTOPRISM_READONLY: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("                   "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# do not modify originals directory (reduced functionality)")]),s._v("\n      PHOTOPRISM_EXPERIMENTAL: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enables experimental features")]),s._v("\n      PHOTOPRISM_DISABLE_CHOWN: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables updating storage permissions via chmod and chown on startup")]),s._v("\n      PHOTOPRISM_DISABLE_WEBDAV: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables built-in WebDAV server")]),s._v("\n      PHOTOPRISM_DISABLE_SETTINGS: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("           "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables settings UI and API")]),s._v("\n      PHOTOPRISM_DISABLE_TENSORFLOW: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables all features depending on TensorFlow")]),s._v("\n      PHOTOPRISM_DISABLE_FACES: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("              "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables face detection and recognition (requires TensorFlow)")]),s._v("\n      PHOTOPRISM_DISABLE_CLASSIFICATION: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables image classification (requires TensorFlow)")]),s._v("\n      PHOTOPRISM_DISABLE_VECTORS: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables vector graphics support")]),s._v("\n      PHOTOPRISM_DISABLE_RAW: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# disables indexing and conversion of RAW images")]),s._v("\n      PHOTOPRISM_RAW_PRESETS: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# enables applying user presets when converting RAW images (reduces performance)")]),s._v("\n      PHOTOPRISM_SIDECAR_YAML: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# creates YAML sidecar files to back up picture metadata")]),s._v("\n      PHOTOPRISM_BACKUP_ALBUMS: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# creates YAML files to back up album metadata")]),s._v("\n      PHOTOPRISM_BACKUP_DATABASE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("             "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# creates regular backups based on the configured schedule")]),s._v("\n      PHOTOPRISM_BACKUP_SCHEDULE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"daily"')]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# backup SCHEDULE in cron format (e.g. "0 12 * * *" for daily at noon) or at a random time (daily, weekly)')]),s._v("\n      PHOTOPRISM_INDEX_SCHEDULE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# indexing SCHEDULE in cron format (e.g. "@every 3h" for every 3 hours; "" to disable)')]),s._v("\n      PHOTOPRISM_AUTO_INDEX: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# delay before automatically indexing files in SECONDS when uploading via WebDAV (-1 to disable)")]),s._v("\n      PHOTOPRISM_AUTO_IMPORT: "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-1")]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# delay before automatically importing files in SECONDS when uploading via WebDAV (-1 to disable)")]),s._v("\n      PHOTOPRISM_DETECT_NSFW: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"false"')]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# automatically flags photos as private that MAY be offensive (requires TensorFlow)")]),s._v("\n      PHOTOPRISM_UPLOAD_NSFW: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("                 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# allows uploads that MAY be offensive (no effect without TensorFlow)")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# PHOTOPRISM_DATABASE_DRIVER: "sqlite"         # SQLite is an embedded database that does not require a separate database server')]),s._v("\n      PHOTOPRISM_DATABASE_DRIVER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mysql"')]),s._v("            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MariaDB 10.5.12+ (MySQL successor) offers significantly better performance compared to SQLite")]),s._v("\n      PHOTOPRISM_DATABASE_SERVER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"mariadb:3306"')]),s._v("     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MariaDB database server (hostname:port)")]),s._v("\n      PHOTOPRISM_DATABASE_NAME: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"photoprism"')]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MariaDB database schema name")]),s._v("\n      PHOTOPRISM_DATABASE_USER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"photoprism"')]),s._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MariaDB database user name")]),s._v("\n      PHOTOPRISM_DATABASE_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure"')]),s._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MariaDB database user password")]),s._v("\n      PHOTOPRISM_SITE_CAPTION: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"AI-Powered Photos App"')]),s._v("\n      PHOTOPRISM_SITE_DESCRIPTION: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("                "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# meta site description")]),s._v("\n      PHOTOPRISM_SITE_AUTHOR: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("                     "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# meta site author")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Video Transcoding (https://docs.photoprism.app/getting-started/advanced/transcoding/):")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# PHOTOPRISM_FFMPEG_ENCODER: "software"        # H.264/AVC encoder (software, intel, nvidia, apple, raspberry, or vaapi)')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# PHOTOPRISM_FFMPEG_SIZE: "1920"               # video size limit in pixels (720-7680) (default: 3840)')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# PHOTOPRISM_FFMPEG_BITRATE: "32"              # video bitrate limit in Mbit/s (default: 50)')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Run/install on first startup (options: update https gpu ffmpeg tensorflow davfs clitools clean):")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# PHOTOPRISM_INIT: "https gpu tensorflow"')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Run as a non-root user after initialization (supported: 0, 33, 50-99, 500-600, and 900-1200):")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PHOTOPRISM_UID: 1000")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PHOTOPRISM_GID: 1000")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PHOTOPRISM_UMASK: 0000")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Start as non-root user before initialization (supported: 0, 33, 50-99, 500-600, and 900-1200):")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# user: "1000:1000"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Share hardware devices with FFmpeg and TensorFlow (optional):")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# devices:")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/dri:/dev/dri"                         # Intel QSV')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/nvidia0:/dev/nvidia0"                 # Nvidia CUDA')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/nvidiactl:/dev/nvidiactl"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/nvidia-modeset:/dev/nvidia-modeset"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/nvidia-nvswitchctl:/dev/nvidia-nvswitchctl"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/nvidia-uvm:/dev/nvidia-uvm"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/nvidia-uvm-tools:/dev/nvidia-uvm-tools"')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#  - "/dev/video11:/dev/video11"                 # Video4Linux Video Encode Device (h264_v4l2m2m)')]),s._v("\n    working_dir: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/photoprism"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# do not change or remove")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## Storage Folders: "~" is a shortcut for your home directory, "." for the current directory')]),s._v("\n    volumes:\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "/host/folder:/photoprism/folder"                # Example')]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/Pictures:/photoprism/originals"')]),s._v("               "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Original media files (DO NOT REMOVE)")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - "/example/family:/photoprism/originals/family" # *Additional* media folders can be mounted like this')]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# - "~/Import:/photoprism/import"                  # *Optional* base folder from which files can be imported to originals')]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./storage:/photoprism/storage"')]),s._v("                  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# *Writable* storage folder for cache, database, and sidecar files (DO NOT REMOVE)")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## MariaDB Database Server (recommended)")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## see https://docs.photoprism.app/getting-started/faq/#should-i-use-sqlite-mariadb-or-mysql")]),s._v("\n  mariadb:\n    image: mariadb:11\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## If MariaDB gets stuck in a restart loop, this points to a memory or filesystem issue:")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## https://docs.photoprism.app/getting-started/troubleshooting/#fatal-server-errors")]),s._v("\n    restart: unless-stopped\n    stop_grace_period: 5s\n    security_opt: "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# see https://github.com/MariaDB/mariadb-docker/issues/434#issuecomment-1136151239")]),s._v("\n      - seccomp:unconfined\n      - apparmor:unconfined\n    command: --innodb-buffer-pool-size"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("512M --transaction-isolation"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("READ-COMMITTED --character-set-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4 --collation-server"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("utf8mb4_unicode_ci --max-connections"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v(" --innodb-rollback-on-timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("OFF --innodb-lock-wait-timeout"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("120")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Never store database files on an unreliable device such as a USB flash drive, an SD card, or a shared network folder:")]),s._v("\n    volumes:\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./database:/var/lib/mysql"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# DO NOT REMOVE")]),s._v("\n    environment:\n      MARIADB_AUTO_UPGRADE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n      MARIADB_INITDB_SKIP_TZINFO: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),s._v("\n      MARIADB_DATABASE: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"photoprism"')]),s._v("\n      MARIADB_USER: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"photoprism"')]),s._v("\n      MARIADB_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure"')]),s._v("\n      MARIADB_ROOT_PASSWORD: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"insecure"')]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Watchtower upgrades services automatically (optional)")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## see https://docs.photoprism.app/getting-started/updates/#watchtower")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('## activate via "COMPOSE_PROFILES=update docker compose up -d"')]),s._v("\n  watchtower:\n    restart: unless-stopped\n    image: containrrr/watchtower\n    profiles: "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"update"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n    environment:\n      WATCHTOWER_CLEANUP: "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),s._v("\n      WATCHTOWER_POLL_INTERVAL: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7200")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# checks for updates every two hours")]),s._v("\n    volumes:\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/var/run/docker.sock:/var/run/docker.sock"')]),s._v("\n      - "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"~/.docker/config.json:/config.json"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# optional, for authentication if you have a Docker Hub account")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br"),t("span",{staticClass:"line-number"},[s._v("79")]),t("br"),t("span",{staticClass:"line-number"},[s._v("80")]),t("br"),t("span",{staticClass:"line-number"},[s._v("81")]),t("br"),t("span",{staticClass:"line-number"},[s._v("82")]),t("br"),t("span",{staticClass:"line-number"},[s._v("83")]),t("br"),t("span",{staticClass:"line-number"},[s._v("84")]),t("br"),t("span",{staticClass:"line-number"},[s._v("85")]),t("br"),t("span",{staticClass:"line-number"},[s._v("86")]),t("br"),t("span",{staticClass:"line-number"},[s._v("87")]),t("br"),t("span",{staticClass:"line-number"},[s._v("88")]),t("br"),t("span",{staticClass:"line-number"},[s._v("89")]),t("br"),t("span",{staticClass:"line-number"},[s._v("90")]),t("br"),t("span",{staticClass:"line-number"},[s._v("91")]),t("br"),t("span",{staticClass:"line-number"},[s._v("92")]),t("br"),t("span",{staticClass:"line-number"},[s._v("93")]),t("br"),t("span",{staticClass:"line-number"},[s._v("94")]),t("br"),t("span",{staticClass:"line-number"},[s._v("95")]),t("br"),t("span",{staticClass:"line-number"},[s._v("96")]),t("br"),t("span",{staticClass:"line-number"},[s._v("97")]),t("br"),t("span",{staticClass:"line-number"},[s._v("98")]),t("br"),t("span",{staticClass:"line-number"},[s._v("99")]),t("br"),t("span",{staticClass:"line-number"},[s._v("100")]),t("br"),t("span",{staticClass:"line-number"},[s._v("101")]),t("br"),t("span",{staticClass:"line-number"},[s._v("102")]),t("br"),t("span",{staticClass:"line-number"},[s._v("103")]),t("br"),t("span",{staticClass:"line-number"},[s._v("104")]),t("br"),t("span",{staticClass:"line-number"},[s._v("105")]),t("br"),t("span",{staticClass:"line-number"},[s._v("106")]),t("br"),t("span",{staticClass:"line-number"},[s._v("107")]),t("br"),t("span",{staticClass:"line-number"},[s._v("108")]),t("br"),t("span",{staticClass:"line-number"},[s._v("109")]),t("br"),t("span",{staticClass:"line-number"},[s._v("110")]),t("br"),t("span",{staticClass:"line-number"},[s._v("111")]),t("br"),t("span",{staticClass:"line-number"},[s._v("112")]),t("br"),t("span",{staticClass:"line-number"},[s._v("113")]),t("br"),t("span",{staticClass:"line-number"},[s._v("114")]),t("br"),t("span",{staticClass:"line-number"},[s._v("115")]),t("br"),t("span",{staticClass:"line-number"},[s._v("116")]),t("br"),t("span",{staticClass:"line-number"},[s._v("117")]),t("br"),t("span",{staticClass:"line-number"},[s._v("118")]),t("br"),t("span",{staticClass:"line-number"},[s._v("119")]),t("br"),t("span",{staticClass:"line-number"},[s._v("120")]),t("br"),t("span",{staticClass:"line-number"},[s._v("121")]),t("br"),t("span",{staticClass:"line-number"},[s._v("122")]),t("br"),t("span",{staticClass:"line-number"},[s._v("123")]),t("br"),t("span",{staticClass:"line-number"},[s._v("124")]),t("br"),t("span",{staticClass:"line-number"},[s._v("125")]),t("br"),t("span",{staticClass:"line-number"},[s._v("126")]),t("br"),t("span",{staticClass:"line-number"},[s._v("127")]),t("br"),t("span",{staticClass:"line-number"},[s._v("128")]),t("br"),t("span",{staticClass:"line-number"},[s._v("129")]),t("br"),t("span",{staticClass:"line-number"},[s._v("130")]),t("br"),t("span",{staticClass:"line-number"},[s._v("131")]),t("br"),t("span",{staticClass:"line-number"},[s._v("132")]),t("br"),t("span",{staticClass:"line-number"},[s._v("133")]),t("br"),t("span",{staticClass:"line-number"},[s._v("134")]),t("br"),t("span",{staticClass:"line-number"},[s._v("135")]),t("br"),t("span",{staticClass:"line-number"},[s._v("136")]),t("br"),t("span",{staticClass:"line-number"},[s._v("137")]),t("br"),t("span",{staticClass:"line-number"},[s._v("138")]),t("br"),t("span",{staticClass:"line-number"},[s._v("139")]),t("br"),t("span",{staticClass:"line-number"},[s._v("140")]),t("br"),t("span",{staticClass:"line-number"},[s._v("141")]),t("br"),t("span",{staticClass:"line-number"},[s._v("142")]),t("br"),t("span",{staticClass:"line-number"},[s._v("143")]),t("br"),t("span",{staticClass:"line-number"},[s._v("144")]),t("br"),t("span",{staticClass:"line-number"},[s._v("145")]),t("br"),t("span",{staticClass:"line-number"},[s._v("146")]),t("br"),t("span",{staticClass:"line-number"},[s._v("147")]),t("br"),t("span",{staticClass:"line-number"},[s._v("148")]),t("br"),t("span",{staticClass:"line-number"},[s._v("149")]),t("br"),t("span",{staticClass:"line-number"},[s._v("150")]),t("br"),t("span",{staticClass:"line-number"},[s._v("151")]),t("br"),t("span",{staticClass:"line-number"},[s._v("152")]),t("br")])]),t("p",[s._v("尤其注意更改下面几个配置：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("PHOTOPRISM_ADMIN_PASSWORD\nPHOTOPRISM_DATABASE_PASSWORD\nMARIADB_PASSWORD\nMARIADB_ROOT_PASSWORD\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("修改完成后，启动程序")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker-compose")]),s._v(" up "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("如果不出意外，此时访问 http://ip:2342 就可以打开了，默认用户名是 admin，密码是刚才设置的 PHOTOPRISM_ADMIN_PASSWORD")]),s._v(" "),t("hr"),s._v(" "),t("p",[t("a",{attrs:{href:"https://pickstar.today/2022/09/%E4%B8%80%E4%B8%AA%E5%BC%80%E6%BA%90%E7%9A%84%E7%85%A7%E7%89%87%E7%AE%A1%E7%90%86%E7%A8%8B%E5%BA%8F-photoprism/",target:"_blank",rel:"noopener noreferrer"}},[s._v("原文链接"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);