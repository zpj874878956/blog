#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
export NODE_OPTIONS=--openssl-legacy-provider && yarn build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'blog.zzppjj.top' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果你想要部署到 https://USERNAME.github.io
git push -f git@github.com:zpj874878956/blog.git master:gh-pages

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -