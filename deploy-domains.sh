#!/bin/bash

# This script deploys domain-specific HTML files to the server
# and creates the necessary Nginx configurations

# Configuration
SERVER_USER="forge"
SERVER_HOST="your-server-ip"
REMOTE_DIR="/var/www/html"
LOCAL_HTML_DIR="./domain-html"
NGINX_TEMPLATE="./etc/nginx/sites-available/domain-template"
REMOTE_NGINX_DIR="/etc/nginx/sites-available"
DOMAINS=(
    "brisk-otter.com"
    "brisk-elm.com"
    "briskvideos.com"
    "confused-eliphant.com"
    "gleaming-fern.com"
    "height-ways.com"
    "iqchampionhub.com"
    "jazzy-mango.com"
    "jewel-video-content.com"
    "lofty-sprout.com"
    "nextlevelstreams.com"
    "switch-runner.com"
    "timber-content.com"
    "timber-tube.com"
    "wave-view.com"
    "yellow-racoon.com"
    "gameonlive.tv"
)

# Ensure domain-html directory exists
if [ ! -d "$LOCAL_HTML_DIR" ]; then
    echo "Error: domain-html directory not found"
    echo "Run node domain-html-generator.js to generate HTML files"
    exit 1
fi

# Copy Nginx map configuration
echo "Copying Nginx map configuration..."
scp ./nginx/domain-connection.conf $SERVER_USER@$SERVER_HOST:/etc/nginx/conf.d/

# Copy domain HTML files
echo "Copying domain HTML files to server..."
ssh $SERVER_USER@$SERVER_HOST "mkdir -p $REMOTE_DIR"
scp $LOCAL_HTML_DIR/*.html $SERVER_USER@$SERVER_HOST:$REMOTE_DIR/

# Create and enable Nginx configurations for each domain
for domain in "${DOMAINS[@]}"; do
    echo "Setting up Nginx configuration for $domain..."
    
    # Create domain-specific configuration from template
    config_content=$(cat $NGINX_TEMPLATE | sed "s/DOMAIN_NAME/$domain/g")
    
    # Create a temporary file
    temp_file=$(mktemp)
    echo "$config_content" > $temp_file
    
    # Copy to server
    scp $temp_file $SERVER_USER@$SERVER_HOST:$REMOTE_NGINX_DIR/$domain
    
    # Enable the site
    ssh $SERVER_USER@$SERVER_HOST "ln -sf $REMOTE_NGINX_DIR/$domain /etc/nginx/sites-enabled/$domain"
    
    # Clean up temp file
    rm $temp_file
done

# Reload Nginx to apply changes
echo "Reloading Nginx..."
ssh $SERVER_USER@$SERVER_HOST "nginx -t && systemctl reload nginx"

echo "Deployment complete!"
echo "Domain-specific HTML files have been deployed and Nginx has been configured"
echo "Each domain will now serve its corresponding HTML file"