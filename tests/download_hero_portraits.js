const https = require('https');
const fs = require('fs');
const path = require('path');

const targetHeroes = [
  'Alucard', 'Angela', 'Dyrroth', 'Gusion', 'Kalea', 
  'Lancelot', 'Moskov', 'Nana', 'Valir', 'Kagura', 'Lukas',
  'Aamon', 'Franco', 'Guinevere', 'Lunox', 'Luo Yi', 'Lylia', 'Zilong', 'Brody'
];

async function getImageUrl(name) {
  return new Promise(resolve => {
    // Search Wikia for File:<Name>-portrait.png or File:<Name>_icon.png or HeroXXX-portrait.png
    const searchUrl = `https://mobile-legends.fandom.com/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(name + ' portrait')}&gsrnamespace=6&prop=imageinfo&iiprop=url&format=json`;
    
    https.get(searchUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          if (json.query && json.query.pages) {
            const pages = Object.values(json.query.pages);
            // find page with title containing name and portrait
            const match = pages.find(p => p.title.toLowerCase().includes(name.toLowerCase()) && p.title.toLowerCase().includes('portrait'))
                       || pages.find(p => p.title.toLowerCase().includes('portrait'))
                       || pages[0];
            if (match && match.imageinfo && match.imageinfo[0]) {
              return resolve(match.imageinfo[0].url);
            }
          }
        } catch(e) {}
        resolve(null);
      });
    }).on('error', () => resolve(null));
  });
}

function download(url, dest) {
  return new Promise(resolve => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 200) {
        res.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve(true);
        });
      } else {
        file.close();
        if (fs.existsSync(dest)) fs.unlinkSync(dest);
        resolve(false);
      }
    }).on('error', () => {
      if (fs.existsSync(dest)) fs.unlinkSync(dest);
      resolve(false);
    });
  });
}

(async () => {
  for (const h of targetHeroes) {
    const filename = h.toLowerCase().replace(/[^a-z0-9]/g, '') + '.png';
    const dest = path.join(__dirname, '../assets/commanders', filename);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${filename} (${fs.statSync(dest).size} bytes)`);
      continue;
    }
    const url = await getImageUrl(h);
    if (url) {
      console.log(`Downloading ${h} from ${url}`);
      const ok = await download(url, dest);
      console.log(`${h} download ${ok ? 'SUCCESS' : 'FAILED'}`);
    } else {
      console.log(`No URL found for ${h}`);
    }
  }
})();
