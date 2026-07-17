const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '../src/pages');
const pages = ['HospitalsPage.tsx', 'PharmaciesPage.tsx', 'FacilitiesPage.tsx', 'TrailsPage.tsx', 'SalonsPage.tsx', 'FuneralsPage.tsx', 'PartyPage.tsx', 'FashionPage.tsx', 'FoodPage.tsx'];

pages.forEach(page => {
  const filePath = path.join(pagesDir, page);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // add import if not exists
  if (!content.includes(`import { Navbar }`)) {
    content = content.replace(/(import React.*?\n)/, `$1import { Navbar } from '../components/Navbar';\n`);
  }

  // replace <nav>...</nav>
  content = content.replace(/<nav className="fixed top-0[\s\S]*?<\/nav>/, `<Navbar entranceComplete={true} onNavigate={onNavigate as any} />`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${page}`);
});
