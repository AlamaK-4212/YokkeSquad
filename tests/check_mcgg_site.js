const https = require('https');

https.get('https://magicchessgogo.com/assets/index-c6c06d80.js', res => {
  let js = '';
  res.on('data', c => js += c);
  res.on('end', () => {
    console.log('Index JS Length:', js.length);
    const cdnImages = js.match(/https:\/\/[^\s"'<>]+\.(?:png|jpg|jpeg|webp)/g) || [];
    console.log('Found CDN images:', cdnImages.length);
    console.log('Sample images:', cdnImages.slice(0, 15));
    
    const heroes = ['Chou', 'Fanny', 'Kagura', 'Lukas', 'Vale', 'Alice', 'Alucard', 'Angela', 'Dyrroth', 'Gusion', 'Kalea', 'Lancelot', 'Layla', 'Moskov', 'Nana', 'Valir', 'Mavis', 'Harper', 'Saki', 'Gujun', 'Dubi', 'Remy'];
    heroes.forEach(h => {
      const regex = new RegExp(`["']?[^"']*${h}[^"']*["']?`, 'gi');
      const m = js.match(regex);
      if (m && m.length > 0) {
        console.log(`Matched for ${h}:`, m.slice(0, 3));
      }
    });
  });
});
