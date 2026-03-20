const fs = require('fs');
const path = require('path');

const files = [
  'd:/CPLQG/CPLQG-Eng-Template/src/pages/FeaturedNews/PolicyHighlights.jsx',
  'd:/CPLQG/CPLQG-Eng-Template/src/pages/FeaturedNews/LegalReformNews.jsx',
  'd:/CPLQG/CPLQG-Eng-Template/src/pages/FeaturedNews/InternationalCooperation.jsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log('File not found:', file);
    return;
  }
  let content = fs.readFileSync(file, 'utf8');

  // Fix layout to 7:3 using grid
  content = content.replace(/flex flex-col lg:flex-row gap-8/g, 'grid grid-cols-1 lg:grid-cols-10 gap-8');
  content = content.replace(/w-full lg:w-\[70\%\]/g, 'lg:col-span-7 flex flex-col w-full max-w-full overflow-hidden');
  content = content.replace(/w-full lg:w-\[30\%\]/g, 'lg:col-span-3 w-full flex flex-col gap-6 hide-scrollbar');

  // Fix aspect ratios to 16:9
  // Remove aspect-[4/3]
  content = content.replace(/aspect-\[4\/3\]/g, 'aspect-video');
  // Remove md:aspect-[4/3] if chained
  content = content.replace(/md:aspect-\[4\/3\]/g, 'md:aspect-video');
  // Remove aspect-[16/9] since aspect-video is simpler
  content = content.replace(/aspect-\[16\/9\]/g, 'aspect-video');
  
  // Fix sidebar thumbnails
  content = content.replace(/w-16 h-12/g, 'w-24 aspect-video');

  // Fix list thumbnails
  content = content.replace(/w-full md:w-\[240px\]/g, 'shrink-0 w-full sm:w-[280px]');

  // Fix image URLs
  let seedCounter = 1;
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-[^\s"']+/g, (match) => {
    const seed = path.basename(file, '.jsx').substring(0, 5) + (seedCounter++);
    // Randomly use picsum photos 
    return `https://picsum.photos/seed/${seed}/800/450`;
  });

  fs.writeFileSync(file, content);
  console.log('Fixed:', path.basename(file));
});
