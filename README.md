# Vue 3 + Vite Multi-Domain Project

This template helps you develop with Vue 3 in Vite, with support for multiple domains and domain-specific content.

## Project Structure

- `src/domains/` - Contains domain-specific metadata and configurations
- `src/designs/` - Contains domain-specific design components
- `domain-html/` - Contains generated domain-specific HTML files (after running the generator)

## Domain-Specific HTML Files

This project supports creating separate HTML files for each domain while maintaining the Vue architecture. This is useful for:

- SEO optimization with domain-specific metadata
- Custom favicons and branding per domain
- Domain-specific analytics or third-party scripts

### Generating Domain HTML Files

Run the following command to generate domain-specific HTML files:

```bash
node domain-html-generator.js
```

This will:
1. Read metadata from all domain files in `src/domains/`
2. Generate separate HTML files in the `domain-html/` directory
3. Include domain-specific metadata, titles, descriptions, and favicons

### Testing Domain HTML Files

You can test the domain-specific HTML files using the included server:

```bash
node domain-html-server.js
```

Then, add entries to your hosts file to test different domains:
```
127.0.0.1 brisk-otter.localhost
127.0.0.1 briskvideos.localhost
127.0.0.1 jewel-video-content.localhost
```

Visit `http://brisk-otter.localhost:3000` (or other domain) in your browser.

## Deployment

For production deployment with domain-specific HTML files, you'll need to:

1. Generate the domain HTML files using `node domain-html-generator.js`
2. Configure your web server to serve the appropriate HTML file based on the domain
3. Ensure that the Vue application bundle is included in all HTML files

A sample Nginx configuration might look like:

```nginx
server {
    listen 80;
    server_name brisk-otter.com;
    root /path/to/your/dist;
    
    location / {
        try_files $uri $uri/ /brisk-otter.html;
    }
}

server {
    listen 80;
    server_name briskvideos.com;
    root /path/to/your/dist;
    
    location / {
        try_files $uri $uri/ /briskvideos.html;
    }
}
```

## Customizing Domain Metadata

To add or modify domain metadata:

1. Create or edit a domain file in `src/domains/`
2. Include metadata like title, description, keywords, and favicon
3. Run the generator to update HTML files