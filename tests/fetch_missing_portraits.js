const https = require('https');
const fs = require('fs');
const path = require('path');

const missing = [
  'Alice', 'Alucard', 'Kalea', 'Brody', 'Franco', 
  'Diggie', 'Floryn', 'Harley', 'Minotaur', 'Ruby', 'Vexana', 'Luo Yi'
];

async function getPageImages(hero) {
  return new Promise(resolve => {
    const url = `https://mobile-legends.fandom.com/api.php?action=parse&page=${encodeURIComponent(hero)}&prop=images&format=json`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(d);
          if (j.parse && j.parse.images) {
            const portraits = j.parse.images.filter(i => i.toLowerCase().includes('portrait') || i.toLowerCase().includes('icon'));
            const p = portraits.find(i => i.toLowerCase().includes('portrait')) || portraits[0];
            return resolve(p || null);
          }
        } catch(e) {}
        resolve(null);
      });
    }).on('error', () => resolve(null));
  });
}

async function getFileUrl(filename) {
  return new Promise(resolve => {
    const url = `https://mobile-legends.fandom.com/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try {
          const j = JSON.parse(d);
          if (j.query && j.query.pages) {
            const p = Object.values(j.query.pages)[0];
            if (p && p.imageinfo && p.imageinfo[0]) {
              return resolve(p.imageinfo[0].url);
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
  const result = {};
  for (const h of missing) {
    const imgFile = await getPageImages(h);
    if (imgFile) {
      const url = await getFileUrl(imgFile);
      if (url) {
        result[h] = url;
        const slug = h.toLowerCase().replace(/[^a-z0-9]/g, '');
        const dest = path.join(__dirname, '../assets/commanders', slug + '.png');
        const ok = await download(url, dest);
        console.log(`[${ok ? 'OK' : 'FAIL'}] ${h} -> ${url}`);
      } else {
        console.log(`[NO_URL] ${h} (file: ${imgFile})`);
      }
    } else {
      console.log(`[NO_IMG] ${h}`);
    }
  }
  fs.writeFileSync(path.join(__dirname, 'missing_hero_urls.json'), JSON.stringify(result, null, 2));
  console.log('\nSaved all to missing_hero_urls.json');
})();

