const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://ebanexint.co.tz';

// Static routes of the Ebanex website
const staticRoutes = [
  '',
  '/about',
  '/training',
  '/it-audit-advisory',
  '/conference',
  '/contact',
  '/feedback',
  '/privacy',
  '/terms'
];

try {
  console.log('Generating sitemap.xml & robots.txt...');

  // Paths
  const trainingDataPath = path.resolve(__dirname, '../src/constants/trainingData.ts');
  const sitemapOutputPath = path.resolve(__dirname, '../public/sitemap.xml');
  const robotsOutputPath = path.resolve(__dirname, '../public/robots.txt');

  // Read trainingData.ts to extract dynamic training slugs
  const trainingDataContent = fs.readFileSync(trainingDataPath, 'utf8');
  
  // Use regex to find all program/event slugs: e.g., slug: 'security-culture'
  const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
  const slugs = new Set();
  
  let match;
  while ((match = slugRegex.exec(trainingDataContent)) !== null) {
    slugs.add(match[1]);
  }

  console.log(`Found ${slugs.size} dynamic training program slugs.`);

  // Generate XML content
  const currentDate = new Date().toISOString().split('T')[0];
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // 1. Add static routes
  staticRoutes.forEach((route) => {
    // Priority: Home page gets 1.0, main services/landing pages get 0.8, auxiliary pages (terms, feedback) get 0.5
    let priority = '0.8';
    let changefreq = 'weekly';
    
    if (route === '') {
      priority = '1.0';
      changefreq = 'daily';
    } else if (route === '/privacy' || route === '/terms' || route === '/feedback') {
      priority = '0.5';
      changefreq = 'monthly';
    }

    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    xml += '  </url>\n';
  });

  // 2. Add dynamic training routes
  slugs.forEach((slug) => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}/training/${slug}</loc>\n`;
    xml += `    <lastmod>${currentDate}</lastmod>\n`;
    xml += '    <changefreq>weekly</changefreq>\n';
    xml += '    <priority>0.7</priority>\n';
    xml += '  </url>\n';
  });

  xml += '</urlset>\n';

  // Write sitemap.xml
  fs.writeFileSync(sitemapOutputPath, xml, 'utf8');
  console.log(`Successfully generated sitemap.xml at ${sitemapOutputPath}`);

  // Generate robots.txt content
  let robots = '# https://www.robotstxt.org/robotstxt.html\n\n';
  robots += 'User-agent: *\n';
  robots += 'Allow: /\n';
  robots += 'Disallow: /api/           # Block API endpoints\n';
  robots += 'Disallow: /src/           # Block raw src paths if exposed\n';
  robots += 'Disallow: /node_modules/  # Block node_modules\n\n';
  robots += `# Sitemap URL\n`;
  robots += `Sitemap: ${DOMAIN}/sitemap.xml\n`;

  // Write robots.txt
  fs.writeFileSync(robotsOutputPath, robots, 'utf8');
  console.log(`Successfully generated robots.txt at ${robotsOutputPath}`);

} catch (error) {
  console.error('Error generating sitemap and robots.txt:', error);
  process.exit(1);
}
