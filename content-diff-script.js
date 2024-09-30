const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const contentDir = './pages';
const componentsDir = './components';
const cacheFile = '.content-cache.json';

function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(file));
    } else {
      if (file.endsWith('.md') || file.endsWith('.vue')) {
        results.push(file);
      }
    }
  });
  return results;
}

function findPagesUsingComponent(componentName) {
  const contentFiles = getAllFiles(contentDir);
//  console.log(`Searching for pages using component: ${componentName}`);
  const pagesUsingComponent = contentFiles.filter(file => {
    const content = fs.readFileSync(file, 'utf8');
    const usesComponent = content.includes(`<${componentName}`) || content.includes(`<${componentName}/>`);
//    console.log(`File ${file} uses component ${componentName}: ${usesComponent}`);
    return usesComponent;
  });
//  console.log(`Found ${pagesUsingComponent.length} pages using ${componentName}`);
  return pagesUsingComponent;
}

function getUrlFromFilePath(filePath) {
  let url = '/' + path.relative(contentDir, filePath).replace(/\.(md|vue)$/, '');
  if (url.endsWith('/index')) {
    url = url.replace('/index', '');
  }
  return url === '' ? '/' : url;
}

function getModifiedUrls() {
  const contentFiles = getAllFiles(contentDir);
  const componentFiles = getAllFiles(componentsDir);
  const allFiles = [...contentFiles, ...componentFiles];

  // console.log(`Total files: ${allFiles.length}`);
  // console.log(`Content files: ${contentFiles.length}`);
  // console.log(`Component files: ${componentFiles.length}`);

  const currentHashes = {};
  let previousHashes = {};

  if (fs.existsSync(cacheFile)) {
    previousHashes = JSON.parse(fs.readFileSync(cacheFile, 'utf8'));
  }

  const modifiedUrls = new Set();
  const modifiedComponents = new Set();

  allFiles.forEach((file) => {
    const hash = getFileHash(file);
    currentHashes[file] = hash;

    if (!previousHashes[file] || previousHashes[file] !== hash) {
//      console.log(`Modified file: ${file}`);
      if (file.startsWith('components')) {
        const componentName = path.basename(file, '.vue');
        modifiedComponents.add(componentName);
//        console.log(`Added modified component: ${componentName}`);
      } else {
        const url = getUrlFromFilePath(file);
        modifiedUrls.add(url);
//        console.log(`Added modified content URL: ${url}`);
      }
    }
  });

//  console.log(`Modified components: ${Array.from(modifiedComponents).join(', ')}`);


  modifiedComponents.forEach(componentName => {
    const affectedPages = findPagesUsingComponent(componentName);

    affectedPages.forEach(page => {
      const url = getUrlFromFilePath(page);
      modifiedUrls.add(url);
//      console.log(`Added URL for page using modified component: ${url}`);
    });
  });


  fs.writeFileSync(cacheFile, JSON.stringify(currentHashes));

  return Array.from(modifiedUrls);
}


const modifiedUrls = getModifiedUrls();
// console.log('Final modified URLs:');
// console.log(JSON.stringify(modifiedUrls, null, 2));
