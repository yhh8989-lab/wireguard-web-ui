#!/bin/bash
# WireGuard-UI Build & Deploy Script for Linux

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${GREEN}=== WireGuard-UI Build Script ===${NC}"

# Check if Go is installed
if ! command -v go &> /dev/null; then
    echo -e "${RED}Error: Go is not installed${NC}"
    echo "Install Go on Ubuntu/Debian:"
    echo "  sudo apt update"
    echo "  sudo apt install -y golang-go"
    exit 1
fi

# Check if WireGuard is installed
if ! command -v wg &> /dev/null; then
    echo -e "${YELLOW}Warning: WireGuard is not installed${NC}"
    echo "Install WireGuard on Ubuntu/Debian:"
    echo "  sudo apt install -y wireguard"
fi

echo -e "${GREEN}[1/5] Installing dependencies...${NC}"
go mod download

echo -e "${GREEN}[2/5] Installing Node.js dependencies...${NC}"
if command -v yarn &> /dev/null; then
    yarn install --production
elif command -v npm &> /dev/null; then
    npm install --production
else
    echo -e "${YELLOW}Warning: Node.js package manager not found, skipping asset preparation${NC}"
fi

echo -e "${GREEN}[3/5] Preparing assets...${NC}"
chmod +x prepare_assets.sh
./prepare_assets.sh

echo -e "${GREEN}[4/5] Building binary...${NC}"
# Get git commit hash for build
GIT_COMMIT=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")
go build -ldflags="-s -w -X main.gitCommit=${GIT_COMMIT}" -o wireguard-ui .

echo -e "${GREEN}[5/5] Build complete!${NC}"
echo ""
echo -e "${GREEN}Binary: wireguard-ui${NC}"
echo ""
echo "To run the application:"
echo "  ./wireguard-ui"
echo ""
echo "Then access: http://localhost:8080"
echo ""
echo -e "${YELLOW}Environment variables (optional):${NC}"
echo "  SESSION_SECRET=your-secret-key \\"
echo "  WGUI_USERNAME=admin \\"
echo "  WGUI_PASSWORD=your-password \\"
echo "  ./wireguard-ui"
