# Domain HTML Connection Guide

This guide explains how to connect each domain to its specific HTML file from the `domain-html` directory.

## Overview

The project structure includes:

- `domain-html-generator.js` - Generates domain-specific HTML files
- `domain-html/` - Directory containing HTML files for each domain
- Nginx configuration files - Connect each domain to its HTML file

## Setup Instructions

### 1. Generate Domain-Specific HTML Files

Run the domain HTML generator:

```bash
node domain-html-generator.js
```

This creates HTML files in the `domain-html` directory for each domain.

### 2. Deploy to Production Server

You can use the included deployment script:

```bash
chmod +x deploy-domains.sh
./deploy-domains.sh
```

This script will:
- Copy all HTML files to the web server
- Set up Nginx configurations for each domain
- Reload Nginx to apply changes

### 3. Manual Setup (Alternative)

If you prefer to set up the server manually:

1. Copy the domain HTML files to your web server:
   ```bash
   scp domain-html/*.html user@server:/var/www/html/
   ```

2. Copy the Nginx map configuration:
   ```bash
   scp nginx/domain-connection.conf user@server:/etc/nginx/conf.d/
   ```

3. For each domain, create an Nginx configuration using the template:
   ```bash
   # Replace DOMAIN_NAME with your actual domain
   cat etc/nginx/sites-available/domain-template | sed "s/DOMAIN_NAME/your-domain.com/g" > your-domain.conf
   scp your-domain.conf user@server:/etc/nginx/sites-available/your-domain.com
   ssh user@server "ln -sf /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/your-domain.com"
   ```

4. Test and reload Nginx:
   ```bash
   ssh user@server "nginx -t && systemctl reload nginx"
   ```

### 4. Verification

After setup, verify that each domain serves its corresponding HTML file:

- Visit each domain in your browser
- Confirm that the correct HTML is displayed
- Check for any errors in the Nginx logs

## Adding New Domains

When adding a new domain:

1. Add the domain to the list in `src/domains/`
2. Run the generator: `node domain-html-generator.js`
3. Update the Nginx map in `/etc/nginx/conf.d/domain-connection.conf`
4. Create a new Nginx server block for the domain
5. Reload Nginx: `sudo systemctl reload nginx`

## Troubleshooting

If a domain is not serving the correct HTML file:

1. Check that the HTML file exists in the `/var/www/html/` directory
2. Verify the domain is correctly mapped in the Nginx configuration
3. Check Nginx logs for errors: `sudo tail -f /var/log/nginx/error.log`
4. Ensure the domain DNS is pointing to your server