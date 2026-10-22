const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, '../assets/commanders');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const commanders = {
  'Abe': 'https://static.wikia.nocookie.net/mobile-legends/images/3/38/Abe.png',
  'Eva': 'https://static.wikia.nocookie.net/mobile-legends/images/1/1d/Eva.png',
  'Yuki': 'https://static.wikia.nocookie.net/mobile-legends/images/d/d3/Yuki.png',
  'Mavis': 'https://static.wikia.nocookie.net/mobile-legends/images/7/7c/Mavis.png',
  'Kaboom': 'https://static.wikia.nocookie.net/mobile-legends/images/7/79/Kaboom.png',
  'Dubi': 'https://static.wikia.nocookie.net/mobile-legends/images/d/da/Dubi.png',
  'Buss': 'https://static.wikia.nocookie.net/mobile-legends/images/b/b3/Buss.png',
  'Pao': 'https://static.wikia.nocookie.net/mobile-legends/images/4/45/Pao.png',
  'Harper': 'https://static.wikia.nocookie.net/mobile-legends/images/f/f9/Harper.png',
  'Ragnar': 'https://static.wikia.nocookie.net/mobile-legends/images/7/7c/Ragnar.png',
  'Remy': 'https://static.wikia.nocookie.net/mobile-legends/images/7/70/Remy.png',
  'Benny': 'https://static.wikia.nocookie.net/mobile-legends/images/2/22/Benny.png',
  'Eggie': 'https://static.wikia.nocookie.net/mobile-legends/images/a/a9/Eggie.png',
  'Connie': 'https://static.wikia.nocookie.net/mobile-legends/images/0/0d/Connie.png',
  'Tharz': 'https://static.wikia.nocookie.net/mobile-legends/images/b/ba/Tharz.png',
  'Rya': 'https://static.wikia.nocookie.net/mobile-legends/images/6/63/Rya.png',
  'Brown': 'https://static.wikia.nocookie.net/mobile-legends/images/0/06/Brown.png',
  'Austus': 'https://static.wikia.nocookie.net/mobile-legends/images/1/19/Austus.png',
  'Chou': 'https://static.wikia.nocookie.net/mobile-legends/images/0/0f/Chou.png',
  'Layla': 'https://static.wikia.nocookie.net/mobile-legends/images/c/c8/Layla.png',
  'Ling': 'https://static.wikia.nocookie.net/mobile-legends/images/6/6d/Ling.png',
  'Fanny': 'https://static.wikia.nocookie.net/mobile-legends/images/5/54/Fanny.png',
  'Vale': 'https://static.wikia.nocookie.net/mobile-legends/images/6/63/Vale.png',
  'Gord': 'https://static.wikia.nocookie.net/mobile-legends/images/3/34/Gord.png',
  'Wanwan': 'https://static.wikia.nocookie.net/mobile-legends/images/5/5c/Wanwan.png'
};

async function downloadAll() {
  console.log('Downloading 25 Little Commanders images...');
  for (const [name, url] of Object.entries(commanders)) {
    const filePath = path.join(targetDir, name.toLowerCase() + '.png');
    try {
      const res = await fetch(url);
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(filePath, Buffer.from(buffer));
        console.log('Saved: ' + name + ' (' + buffer.byteLength + ' bytes)');
      } else {
        console.error('Failed ' + name + ': ' + res.status);
      }
    } catch(e) {
      console.error('Error ' + name + ': ' + e.message);
    }
  }
  console.log('All 25 Commander images successfully saved into assets/commanders/ !');
}

downloadAll();

