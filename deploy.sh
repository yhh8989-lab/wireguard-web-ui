#!/bin/bash
# WireGuard-UI Deploy Script for Linux Server
# Usage: ./deploy.sh [OPTIONS]

set -e

# Default settings
INSTALL_DIR="/opt/wireguard-ui"
SERVICE_NAME="wireguard-ui"
PORT=8080
ADMIN_USER="admin"
ADMIN_PASS="admin"
SESSION_SECRET=""
AUTO_START="false"
AUTO_RESTART="false"

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

usage() {
    echo "Usage: $0 [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  --port PORT           Port to listen on (default: 8080)"
    echo "  --user USERNAME       Admin username (default: admin)"
    echo "  --password PASSWORD   Admin password"
    echo "  --secret SESSION_SECRET  Session secret key"
    echo "  --auto-start          Auto start WireGuard on boot"
    echo "  --auto-restart        Auto restart when config changes"
    echo "  --help                Show this help"
    echo ""
    echo "Example:"
    echo "  $0 --password mypassword --auto-start --auto-restart"
}

# Parse arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --port)
            PORT="$2"
            shift 2
            ;;
        --user)
            ADMIN_USER="$2"
            shift 2
            ;;
        --password)
            ADMIN_PASS="$2"
            shift 2
            ;;
        --secret)
            SESSION_SECRET="$2"
            shift 2
            ;;
        --auto-start)
            AUTO_START="true"
            shift
            ;;
        --auto-restart)
            AUTO_RESTART="true"
            shift
            ;;
        --help)
            usage
            exit 0
            ;;
        *)
            echo -e "${RED}Unknown option: $1${NC}"
            usage
            exit 1
            ;;
    esac
done

# Generate session secret if not provided
if [ -z "$SESSION_SECRET" ]; then
    SESSION_SECRET=$(head -c 32 /dev/urandom | base64)
fi

echo -e "${GREEN}=== WireGuard-UI Deploy Script ===${NC}"
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then
    echo -e "${YELLOW}Warning: Not running as root. Some features may not work.${NC}"
    echo ""
fi

# Install system dependencies
echo -e "${GREEN}[1/6] Installing system dependencies...${NC}"
if command -v apt-get &> /dev/null; then
    sudo apt-get update
    sudo apt-get install -y wireguard curl git
elif command -v yum &> /dev/null; then
    sudo yum install -y wireguard-tools curl git
elif command -v apk &> /dev/null; then
    sudo apk add wireguard-tools curl git
fi

# Create installation directory
echo -e "${GREEN}[2/6] Creating installation directory...${NC}"
sudo mkdir -p "$INSTALL_DIR"
cd "$INSTALL_DIR"

# Clone or copy project
echo -e "${GREEN}[3/6] Downloading WireGuard-UI...${NC}"
if [ -d ".git" ]; then
    sudo git pull
else
    sudo git clone https://github.com/ngoduykhanh/wireguard-ui.git .
fi

# Build
echo -e "${GREEN}[4/6] Building WireGuard-UI...${NC}"
chmod +x prepare_assets.sh
./prepare_assets.sh 2>/dev/null || true
sudo go build -o wireguard-ui .

# Create systemd service
echo -e "${GREEN}[5/6] Creating systemd service...${NC}"
sudo cat > /etc/systemd/system/wgui.service << EOF
[Unit]
Description=WireGuard UI
After=network.target

[Service]
Type=simple
WorkingDirectory=$INSTALL_DIR
ExecStart=$INSTALL_DIR/wireguard-ui \
    -session-secret $SESSION_SECRET \
    -username $ADMIN_USER \
    -password $ADMIN_PASS \
    -manage-start=$AUTO_START \
    -manage-restart=$AUTO_RESTART
Restart=always
RestartSec=10
User=root

[Install]
WantedBy=multi-user.target
EOF

# Enable and start service
echo -e "${GREEN}[6/6] Starting service...${NC}"
sudo systemctl daemon-reload
sudo systemctl enable wgui.service
sudo systemctl start wgui.service

# Setup WireGuard auto-restart (optional)
if [ "$AUTO_RESTART" = "true" ]; then
    echo -e "${YELLOW}Setting up WireGuard auto-restart...${NC}"
    sudo cat > /etc/systemd/system/wg-auto-restart.service << 'EOFSVC'
[Unit]
Description=Restart WireGuard
After=network.target

[Service]
Type=oneshot
ExecStart=/usr/bin/systemctl restart wg-quick@wg0.service

[Install]
RequiredBy=wg-auto-restart.path
EOFSVC

    sudo cat > /etc/systemd/system/wg-auto-restart.path << 'EOFPATH'
[Unit]
Description=Watch /etc/wireguard/wg0.conf for changes

[Path]
PathModified=/etc/wireguard/wg0.conf

[Install]
WantedBy=multi-user.target
EOFPATH

    sudo systemctl enable wg-auto-restart.{path,service}
    sudo systemctl start wg-auto-restart.{path,service}
fi

# Output result
echo ""
echo -e "${GREEN}=== Deployment Complete! ===${NC}"
echo ""
echo -e "Access URL: ${BLUE}http://localhost:${PORT}${NC}"
echo -e "Username: ${BLUE}${ADMIN_USER}${NC}"
echo -e "Password: ${BLUE}${ADMIN_PASS}${NC}"
echo ""
echo "Commands:"
echo "  sudo systemctl status wgui    # Check status"
echo "  sudo systemctl restart wgui  # Restart"
echo "  sudo systemctl stop wgui      # Stop"
echo ""
echo -e "${YELLOW}Please change your password immediately!${NC}"
