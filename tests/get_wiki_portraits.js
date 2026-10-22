const https = require('https');
const fs = require('fs');
const path = require('path');

const missing = [
  'Alice', 'Alucard', 'Kalea', 'Brody', 'Franco', 
  'Diggie', 'Floryn', 'Harley', 'Minotaur', 'Ruby', 'Vexana', 'Luo Yi'
];

async function getHeroPortraitUrl(heroName) {
  return new Promise(resolve => {
    const wikiUrl = `https://mobile-legends.fandom.com/wiki/${encodeURIComponent(heroName)}`;
    https.get(wikiUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      let html = '';
      res.on('data', c => html += c);
      res.on('end', () => {
        // Find HeroXXX-portrait.png or similar in html
        const m = html.match(/https:\/\/static\.wikia\.nocookie\.net\/mobile-legends\/images\/[^\s"'<>]*(?:portrait|icon)[^\s"'<>]*/i);
        if (m) {
          resolve(m[0]);
        } else {
          // fallback any image with hero name
          const m2 = html.match(new RegExp(`https://static\\.wikia\\.nocookie\\.net/mobile-legends/images/[^\\s"'<>]*${heroName}[^\\s"'<>]*`, 'i'));
          resolve(m2 ? m2[0] : null);
        }
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
  const results = {};
  for (const h of missing) {
    const url = await getHeroPortraitUrl(h);
    console.log(h, '->', url);
    if (url) {
      results[h] = url;
      const slug = h.toLowerCase().replace(/[^a-z0-9]/g, '');
      const dest = path.join(__dirname, '../assets/commanders', slug + '.png');
      const ok = await download(url, dest);
      console.log(`Saved ${h} locally: ${ok}`);
    }
  }
  fs.writeFileSync(path.join(__dirname, 'missing_hero_urls.json'), JSON.stringify(results, null, 2));
  console.log('\nAll missing URLs saved to missing_hero_urls.json');
})();

