#!/bin/bash
# Build Linux binary using Docker (no Go required on local machine)
# Usage: ./build-docker.sh

set -e

echo "=== Building WireGuard-UI Linux Binary via Docker ==="

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed"
    echo "Install Docker: https://docs.docker.com/get-docker/"
    exit 1
fi

# Build the binary
echo "Building wireguard-ui for Linux amd64..."
docker run --rm \
    -v "$(cd "$(dirname "$0")" && pwd):/src" \
    -w /src \
    -e CGO_ENABLED=0 \
    -e GOOS=linux \
    -e GOARCH=amd64 \
    golang:1.21-alpine \
    sh -c "
        apk add --no-cache git yarn make
        ./prepare_assets.sh
        go build -o wireguard-ui-linux-amd64 .
    "

echo ""
echo "=== Build Complete! ==="
echo ""
echo "Generated files:"
ls -lh wireguard-ui-linux-amd64
echo ""
echo "To deploy to Linux server:"
echo "  scp wireguard-ui-linux-amd64 user@your-server:/tmp/"
echo "  ssh user@your-server"
echo "  sudo cp /tmp/wireguard-ui-linux-amd64 /usr/local/bin/wireguard-ui"
echo "  sudo chmod +x /usr/local/bin/wireguard-ui"
echo "  sudo mkdir -p /opt/wireguard-ui/db"
echo "  sudo /usr/local/bin/wireguard-ui"
echo ""
echo "Or use Docker on the server:"
echo "  docker run -d --name wg-ui --cap-add NET_ADMIN --network host \\"
echo "    -e SESSION_SECRET=secret -e WGUI_USERNAME=admin -e WGUI_PASSWORD=admin \\"
echo "    -v ~/wireguard-ui/db:/app/db -v /etc/wireguard:/etc/wireguard \\"
echo "    --restart unless-stopped ngoduykhanh/wireguard-ui:latest"
