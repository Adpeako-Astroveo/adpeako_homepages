import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import domain metadata from the domains directory
const domainsDir = path.join(__dirname, 'src', 'domains');
const domainFiles = fs.readdirSync(domainsDir)
  .filter(file => file.endsWith('.js'));

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'domain-html');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Get the base HTML template
const baseHtml = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');

// Process each domain
domainFiles.forEach(domainFile => {
  try {
    // Extract domain name from filename (remove .js extension)
    const domainName = domainFile.replace('.js', '');
    
    // Read domain metadata (we'll parse it manually since we can't import ES modules)
    const domainFilePath = path.join(domainsDir, domainFile);
    const domainFileContent = fs.readFileSync(domainFilePath, 'utf8');
    
    // Extract metadata using regex patterns
    const titleMatch = domainFileContent.match(/title: ['"]([^'"]+)['"]/);
    const descriptionMatch = domainFileContent.match(/description: ['"]([^'"]+)['"]/);
    const keywordsMatch = domainFileContent.match(/keywords: ['"]([^'"]+)['"]/);
    const faviconMatch = domainFileContent.match(/favicon: ['"]([^'"]+)['"]/);
    
    // Get metadata values or use defaults
    const title = titleMatch ? titleMatch[1] : 'Premium Entertainment Platform';
    const description = descriptionMatch 
      ? descriptionMatch[1] 
      : 'Access premium entertainment content including games, videos, music, sports, and more.';
    const keywords = keywordsMatch 
      ? keywordsMatch[1] 
      : 'entertainment, premium content';
    const favicon = faviconMatch 
      ? faviconMatch[1] 
      : `/default-logo.svg`;
    
    // Replace metadata in HTML template
    let domainHtml = baseHtml
      .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
      .replace(/<meta name="description" content=".*">/, `<meta name="description" content="${description}">`)
      .replace(/href="\/briskvideos-logo\.svg"/, `href="${favicon}"`)
      .replace('<!-- DOMAIN_METADATA -->', `
    <meta name="keywords" content="${keywords}">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${description}">
    <meta property="og:type" content="website">
    <meta name="domain-id" content="${domainName}">
    <script>
      window.DOMAIN_METADATA = {
        id: "${domainName}",
        title: "${title}",
        description: "${description}",
        keywords: "${keywords}"
      };
    </script>`);
    
    // Write domain-specific HTML file
    fs.writeFileSync(path.join(outputDir, `${domainName}.html`), domainHtml);
    console.log(`Generated HTML for ${domainName}`);
  } catch (error) {
    console.error(`Error processing ${domainFile}:`, error);
  }
});

console.log('Domain-specific HTML generation complete!');