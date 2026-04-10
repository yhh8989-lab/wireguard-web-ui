# 使用 Docker 构建并生成 Linux 二进制文件的完整指南

## 方案一：使用 Docker 交叉编译（推荐）

```bash
# 1. 在你的电脑上构建 Linux 二进制文件
#    不需要安装 Go，使用 Docker 容器进行交叉编译

docker run --rm \
  -v "$(pwd):/src" \
  -w /src \
  golang:1.21-alpine \
  sh -c "apk add --no-cache git yarn && ./prepare_assets.sh && CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o wireguard-ui-linux-amd64 ."

# 2. 传输到 Linux 服务器
scp wireguard-ui-linux-amd64 user@your-server:/tmp/wireguard-ui

# 3. 在服务器上安装
ssh user@your-server << 'EOF'
sudo cp /tmp/wireguard-ui /usr/local/bin/wireguard-ui
sudo chmod +x /usr/local/bin/wireguard-ui
sudo mkdir -p /opt/wireguard-ui

# 创建数据目录
sudo mkdir -p /opt/wireguard-ui/db

# 创建 systemd 服务
sudo cat > /etc/systemd/system/wgui.service << 'SVC'
[Unit]
Description=WireGuard UI
After=network.target

[Service]
Type=simple
WorkingDirectory=/opt/wireguard-ui
ExecStart=/usr/local/bin/wireguard-ui \
  -session-secret $(openssl rand -base64 32) \
  -password admin
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
SVC

sudo systemctl daemon-reload
sudo systemctl enable wgui
sudo systemctl start wgui
EOF

echo "Done! Access http://your-server:8080"
```

## 方案二：在 Linux 服务器上直接构建

```bash
# SSH 到你的 Linux 服务器
ssh user@your-server

# 1. 安装依赖
## Ubuntu/Debian
sudo apt update && sudo apt install -y wireguard git golang-go

## CentOS/RHEL
sudo yum install -y wireguard-tools git golang

# 2. 下载项目
git clone https://github.com/ngoduykhanh/wireguard-ui.git
cd wireguard-ui

# 3. 构建
chmod +x prepare_assets.sh
./prepare_assets.sh
go build -o wireguard-ui .

# 4. 创建数据目录
sudo mkdir -p /opt/wireguard-ui/db
sudo cp wireguard-ui /usr/local/bin/

# 5. 创建启动脚本
sudo cat > /opt/wireguard-ui/start.sh << 'EOF'
#!/bin/bash
docker pull ngoduykhanh/wireguard-ui:latest

docker run -d \
  --name wg-ui \
  --cap-add NET_ADMIN \
  --network host \
  -e SESSION_SECRET=$(openssl rand -base64 32) \
  -e WGUI_USERNAME=admin \
  -e WGUI_PASSWORD=your_secure_password \
  -e WGUI_MANAGE_START=true \
  -e WGUI_MANAGE_RESTART=true \
  -v $(pwd)/db:/app/db \
  -v /etc/wireguard:/etc/wireguard \
  --restart unless-stopped \
  ngoduykhanh/wireguard-ui:latest
EOF

chmod +x /opt/wireguard-ui/start.sh
```

## 方案三：使用 Docker 直接运行

```bash
# 1. 在服务器上运行
docker run -d \
  --name wg-ui \
  --cap-add NET_ADMIN \
  --network host \
  -e SESSION_SECRET=your-secret-key \
  -e WGUI_USERNAME=admin \
  -e WGUI_PASSWORD=your-password \
  -e WGUI_MANAGE_START=true \
  -e WGUI_MANAGE_RESTART=true \
  -v ~/wireguard-ui/db:/app/db \
  -v /etc/wireguard:/etc/wireguard \
  --restart unless-stopped \
  ngoduykhanh/wireguard-ui:latest
```

## 一键部署脚本

```bash
# 在 Linux 服务器上运行
curl -sSL https://raw.githubusercontent.com/ngoduykhanh/wireguard-ui/master/init.sh | bash
```

## 环境变量说明

| 变量 | 说明 | 必需 |
|------|------|------|
| `SESSION_SECRET` | 会话加密密钥 | 是 |
| `WGUI_USERNAME` | 管理员用户名 | 是 |
| `WGUI_PASSWORD` | 管理员密码 | 是 |
| `WGUI_MANAGE_START` | 启动时启动 WireGuard | 否 |
| `WGUI_MANAGE_RESTART` | 配置变更时重启 | 否 |
| `WGUI_ENDPOINT_ADDRESS` | 公网 IP | 否 |

## 推荐：使用我的构建脚本

我已经创建了 `build.sh` 和 `deploy.sh` 脚本：

```bash
# 本地构建（需要 Go）
./build.sh

# 服务器部署
./deploy.sh --password mypassword --auto-start --auto-restart
```
