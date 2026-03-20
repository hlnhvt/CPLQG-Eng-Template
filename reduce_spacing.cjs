const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx')) results.push(file);
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src/components'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content
    // Padding vertical
    .replace(/\bpy-24\b/g, 'py-12')
    .replace(/\bpy-20\b/g, 'py-12')
    .replace(/\bpy-16\b/g, 'py-10')
    // Margin bottom
    .replace(/\bmb-24\b/g, 'mb-12')
    .replace(/\bmb-20\b/g, 'mb-10')
    .replace(/\bmb-16\b/g, 'mb-10')
    // Margin top
    .replace(/\bmt-24\b/g, 'mt-12')
    .replace(/\bmt-20\b/g, 'mt-10')
    .replace(/\bmt-16\b/g, 'mt-10')
    // Gap
    .replace(/\bgap-16\b/g, 'gap-8')
    .replace(/\bgap-12\b/g, 'gap-8')
    // Padding top
    .replace(/\bpt-24\b/g, 'pt-12')
    .replace(/\bpt-20\b/g, 'pt-12')
    .replace(/\bpt-16\b/g, 'pt-10')
    // Padding bottom
    .replace(/\bpb-28\b/g, 'pb-16')
    .replace(/\bpb-24\b/g, 'pb-12')
    .replace(/\bpb-20\b/g, 'pb-12')
    .replace(/\bpb-16\b/g, 'pb-10')
    // Specific elements like hero banner pt-14 pb-28
    .replace(/\bpt-14\b/g, 'pt-10');
    
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated spacing in:', file);
  }
});
