const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const domainHtmlDir = path.join(__dirname, 'domain-html');

// Create server
const server = http.createServer((req, res) => {
  // Get hostname from request headers
  const hostname = req.headers.host.split(':')[0];
  
  // Extract domain name without TLD for matching
  const domainParts = hostname.split('.');
  let domainName = domainParts[0];
  
  // For subdomains, use the second part
  if (domainParts.length > 2) {
    domainName = domainParts[1];
  }
  
  // Locate the appropriate HTML file
  let htmlFile = path.join(domainHtmlDir, `${domainName}.html`);
  
  // Fallback to default if the domain-specific file doesn't exist
  if (!fs.existsSync(htmlFile)) {
    htmlFile = path.join(domainHtmlDir, 'default.html');
    
    // If default.html doesn't exist, use the original index.html
    if (!fs.existsSync(htmlFile)) {
      htmlFile = path.join(__dirname, 'index.html');
    }
  }
  
  // Read and serve the HTML file
  fs.readFile(htmlFile, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading HTML file');
      return;
    }
    
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('To test domain-specific HTML files, add entries to your hosts file:');
  console.log('127.0.0.1 brisk-otter.localhost');
  console.log('127.0.0.1 briskvideos.localhost');
  console.log('127.0.0.1 jewel-video-content.localhost');
  console.log('(and other domains as needed)');
});