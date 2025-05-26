const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const domainHtmlDir = path.join(__dirname, 'domain-html');

// Create server
const server = http.createServer((req, res) => {
  // Get hostname from request headers
  const hostname = req.headers.host.split(':')[0];
  
  console.log(`Request from: ${hostname}`);
  
  // Extract domain name without TLD for matching
  const domainParts = hostname.split('.');
  let domainName = domainParts[0];
  
  // For subdomains, use the second part
  if (domainParts.length > 2) {
    domainName = domainParts[1];
  }
  
  // For handling actual domain requests (with .com, .tv, etc)
  // Extract the domain name without the TLD
  if (domainParts.length >= 2) {
    // Check if the last part is a common TLD
    const tlds = ['com', 'org', 'net', 'tv', 'io', 'co'];
    if (tlds.includes(domainParts[domainParts.length - 1])) {
      // Get the second-to-last part as the domain name
      domainName = domainParts[domainParts.length - 2];
    }
  }
  
  console.log(`Mapped to domain name: ${domainName}`);
  
  // Handle subdirectories in the request URL
  const urlPath = new URL(req.url, `http://${hostname}`).pathname;
  
  // Serve static files if the request is for a static asset
  if (urlPath.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico)$/)) {
    const filePath = path.join(__dirname, urlPath);
    
    // Check if file exists
    if (fs.existsSync(filePath)) {
      const contentType = getContentType(urlPath);
      const content = fs.readFileSync(filePath);
      
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
      return;
    }
  }
  
  // Locate the appropriate HTML file
  let htmlFile = path.join(domainHtmlDir, `${domainName}.html`);
  
  console.log(`Looking for HTML file: ${htmlFile}`);
  
  // Fallback to default if the domain-specific file doesn't exist
  if (!fs.existsSync(htmlFile)) {
    console.log(`File not found, falling back to default.html`);
    htmlFile = path.join(domainHtmlDir, 'default.html');
    
    // If default.html doesn't exist, use the original index.html
    if (!fs.existsSync(htmlFile)) {
      console.log(`default.html not found, falling back to index.html`);
      htmlFile = path.join(__dirname, 'index.html');
    }
  }
  
  // Read and serve the HTML file
  fs.readFile(htmlFile, (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err.message}`);
      res.writeHead(500);
      res.end('Error loading HTML file');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// Helper function to get content type based on file extension
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
  };
  
  return contentTypes[ext] || 'application/octet-stream';
}

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('To test domain-specific HTML files, add entries to your hosts file:');
  console.log('127.0.0.1 brisk-otter.localhost');
  console.log('127.0.0.1 briskvideos.localhost');
  console.log('127.0.0.1 jewel-video-content.localhost');
  console.log('127.0.0.1 funpuzzlepalace.localhost');
  console.log('(and other domains as needed)');
});