#!/bin/bash

# 配置变量
REMOTE_USER="root"
REMOTE_HOST="114.55.113.57"
REMOTE_PATH="/data/nginx/html/blog.zzppjj.top"
GITHUB_BRANCH="master"
LOCAL_PATH="/d/zpj/blog/docs/.vuepress"
# 颜色输出函数
print_success() {
    echo -e "\033[32m$1\033[0m" >&2
}

print_error() {
    echo -e "\033[31m$1\033[0m" >&2
}

print_info() {
    echo -e "\033[34m$1\033[0m" >&2
}

# 错误处理函数
handle_error() {
    print_error "错误: $1"
    exit 1
}

# 1. Git 提交和推送
git_push() {
    print_info "开始 Git 提交流程..."
    
    # 检查是否有更改需要提交
    if [[ -z $(git status -s) ]]; then
        print_info "没有需要提交的更改"
        return 0
    fi
    
    # 添加所有更改
    git add . || handle_error "git add 失败"
    
    # 提交更改
    echo "请输入提交信息:"
    read commit_message
    git commit -m "$commit_message" || handle_error "git commit 失败"
    
    # 推送到远程仓库
    git push origin $GITHUB_BRANCH || handle_error "git push 失败"
    
    print_success "Git 提交完成"
}

# 2. 构建项目
build_project() {
    print_info "开始构建项目..."
    
    # 安装依赖
    #yarn install || handle_error "yarn install 失败"
    
    # 构建项目
    export NODE_OPTIONS=--openssl-legacy-provider && yarn build || handle_error "yarn build 失败"
    
    print_success "项目构建完成"
}

# 3. 打包dist目录
package_dist() {
    print_info "开始打包dist目录..."
    cd $LOCAL_PATH
    # 检查dist目录是否存在
    if [ ! -d "dist" ]; then
        handle_error "dist目录不存在"
    fi
    
    # 创建带时间戳的压缩包名称
    timestamp=$(date +%Y%m%d_%H%M%S)
    archive_name="dist_${timestamp}.tar.gz"
    
    # 压缩dist目录
    tar -czf $archive_name dist || handle_error "压缩dist目录失败"
    
    print_success "打包完成: $archive_name"
    printf "%s" "$archive_name"
}

# 4. 部署到服务器
deploy_to_server() {
    local archive_name=$1
    print_info "开始部署到服务器..."
    # 创建远程目录（如果不存在）
    ssh $REMOTE_USER@$REMOTE_HOST "mkdir -p $REMOTE_PATH" || handle_error "创建远程目录失败"
    #cd $LOCAL_PATH
    # 传输文件到服务器
    pwd
    scp docs/.vuepress/$archive_name $REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/ || handle_error "文件传输失败"
    
    # 在服务器上解压文件
    ssh $REMOTE_USER@$REMOTE_HOST "cd $REMOTE_PATH && \
        tar -xzf $archive_name && \
        rm $archive_name" || handle_error "远程解压失败"
    # 清理本地压缩包
    rm docs/.vuepress/$archive_name
    
    print_success "部署完成"
}

# 主流程
main() {
    print_info "开始部署流程..."
    
    # 执行Git提交
    #git_push
    
    # 构建项目
    #build_project
    
    # 打包dist目录
    archive_name=$(package_dist)
    
    # 部署到服务器
    deploy_to_server $archive_name
    
    print_success "所有流程执行完成！"
}

# 执行主流程
main
