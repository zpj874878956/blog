#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 远程服务器信息
REMOTE_USER="root"  # 替换为你在远程服务器上的用户名
REMOTE_HOST="114.55.113.57"
REMOTE_DIR="/data/nginx/html/blog.zzppjj.top/"
# 本地源目录
SOURCE_DIR="docs/.vuepress/dist/"
# 生成静态文件
export NODE_OPTIONS=--openssl-legacy-provider && yarn build

# 进入生成的文件夹
#cd docs/.vuepress/dist

# 如果是发布到自定义域名
#echo 'blog.zzppjj.top' > CNAME

git init
git add -A
git commit -m 'deploy'
git push
# 删除远程服务器的 dist 目录
ssh $REMOTE_USER@$REMOTE_HOST "rm -rf ${REMOTE_DIR}*"
# 如果你想要部署到 https://USERNAME.github.io
#git push -f git@github.com:zpj874878956/blog.git master:gh-pages

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages
# 检查删除是否成功
if [ $? -ne 0 ]; then
  echo "远程删除失败！"
  exit 1
fi

echo "远程 dist 目录删除成功"

# 使用 scp 将 dist 目录复制到远程服务器
scp -r ${SOURCE_DIR}* $REMOTE_USER@$REMOTE_HOST:$REMOTE_DIR

# 检查是否成功复制
if [ $? -eq 0 ]; then
  echo "文件传输成功！"
else
  echo "文件传输失败！"
  exit 1
fi
#cd -