const fs = require('fs');
const https = require('https');
const path = require('path');

// Extract config and functions from app.js
const appCode = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');

const webhookMatch = appCode.match(/const GOOGLE_SHEET_WEBHOOK_URL\s*=\s*["']([^"']+)["']/);
const WEBHOOK_URL = webhookMatch ? webhookMatch[1] : '';
console.log('Webhook URL:', WEBHOOK_URL);

// Load commanders
const matchCmd = appCode.match(/const MCGG_COMMANDERS = (\[[\s\S]*?\n\];)/);
const MCGG_COMMANDERS = eval(matchCmd[1].replace(/;$/, ''));

function getCommanderById(id) {
  if (!id) return null;
  const clean = id.toString().trim().toLowerCase();
  let match = MCGG_COMMANDERS.find(c => 
    (c.id && c.id.toLowerCase() === clean) || 
    (c.hero && c.hero.toLowerCase() === clean) ||
    (c.name && c.name.toLowerCase() === clean)
  );
  if (match) return match;
  match = MCGG_COMMANDERS.find(c => 
    c.aliases && c.aliases.map(a => a.toLowerCase()).includes(clean)
  );
  if (match) return match;
  return MCGG_COMMANDERS.find(c => 
    (c.alterName && c.alterName.toLowerCase() === clean) ||
    (c.displayName && c.displayName.toLowerCase() === clean)
  ) || null;
}

function getCommanderFormattedName(cmd) {
  if (!cmd) return '';
  if (typeof cmd === 'string') {
    const found = getCommanderById(cmd);
    if (found) cmd = found;
    else return cmd;
  }
  const hero = (cmd.hero || cmd.name || '').trim();
  const alter = (cmd.alterName || '').trim();
  if (hero && alter && hero.toLowerCase() !== alter.toLowerCase()) {
    return `${hero} [${alter}]`;
  }
  return hero || alter || cmd.name || '';
}

// Load DEFAULT_MCGG_LOBBIES
const matchDef = appCode.match(/const DEFAULT_MCGG_LOBBIES = (\{[\s\S]*?\n\};)/);
const DEFAULT_MCGG_LOBBIES = eval('(' + matchDef[1].replace(/;$/, '') + ')');

// Ensure formatted names are set
Object.keys(DEFAULT_MCGG_LOBBIES).forEach(k => {
  (DEFAULT_MCGG_LOBBIES[k] || []).forEach(p => {
    if (p.c1 && !p.cmd1) p.cmd1 = getCommanderFormattedName(p.c1);
    if (p.c2 && !p.cmd2) p.cmd2 = getCommanderFormattedName(p.c2);
    if (p.c3 && !p.cmd3) p.cmd3 = getCommanderFormattedName(p.c3);
  });
});

// Load buildDefaultMCGGDrawState
const matchBuildDraw = appCode.match(/function buildDefaultMCGGDrawState\(\) \{[\s\S]*?\n\}/);
const buildDefaultMCGGDrawState = eval('(' + matchBuildDraw[0] + ')');

// Load getCompactMCGGDrawState
const matchCompactDraw = appCode.match(/function getCompactMCGGDrawState\(drawState\) \{[\s\S]*?\n\}/);
const getCompactMCGGDrawState = eval('(' + matchCompactDraw[0] + ')');

const rawDrawState = buildDefaultMCGGDrawState();
const compactDrawState = getCompactMCGGDrawState(rawDrawState);

console.log('32 Besar Lobbies to sync:', ['ROUND_32_A', 'ROUND_32_B', 'ROUND_32_C', 'ROUND_32_D'].map(k => `${k}: ${DEFAULT_MCGG_LOBBIES[k].length} players`));
console.log('Draw State keys to sync:', Object.keys(compactDrawState));

// Helper post with redirect
function sendPost(payload) {
  return new Promise((resolve, reject) => {
    const bodyStr = JSON.stringify(payload);
    
    function doRequest(targetUrl) {
      const u = new URL(targetUrl);
      const options = {
        hostname: u.hostname,
        path: u.pathname + u.search,
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
          'Content-Length': Buffer.byteLength(bodyStr)
        }
      };

      const req = https.request(options, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          // Google Apps Script redirects POST to GET on location
          https.get(res.headers.location, (redirRes) => {
            let resBody = '';
            redirRes.on('data', chunk => resBody += chunk);
            redirRes.on('end', () => {
              try {
                resolve(JSON.parse(resBody));
              } catch (e) {
                resolve({ raw: resBody });
              }
            });
          }).on('error', reject);
          return;
        }

        let resBody = '';
        res.on('data', chunk => resBody += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(resBody));
          } catch (e) {
            resolve({ raw: resBody });
          }
        });
      });

      req.on('error', reject);
      req.write(bodyStr);
      req.end();
    }

    doRequest(WEBHOOK_URL);
  });
}

async function run() {
  console.log('\n--- 1. SENDING SAVE_CONFIG TO GSHEET ---');
  const saveConfigPayload = {
    action: 'SAVE_CONFIG',
    adminPin: 'YOKKE2026_',
    adminPassword: 'YOKKE2026_',
    tournamentFormat: '16_TEAM_GROUP_PLAYOFF',
    isRegistrationClosed: true,
    isPlayoffLocked: true,
    isGroupLocked: true,
    mcggLobbies: DEFAULT_MCGG_LOBBIES,
    mcggDrawState: compactDrawState
  };

  try {
    const res1 = await sendPost(saveConfigPayload);
    console.log('SAVE_CONFIG response:', JSON.stringify(res1, null, 2));
  } catch (err) {
    console.error('SAVE_CONFIG error:', err);
  }

  console.log('\n--- 2. SENDING CREATE_TOURNAMENT_SHEETS TO GSHEET ---');
  const createSheetsPayload = {
    action: 'CREATE_TOURNAMENT_SHEETS',
    adminPin: 'YOKKE2026_',
    adminPassword: 'YOKKE2026_',
    mcggLobbies: DEFAULT_MCGG_LOBBIES
  };

  try {
    const res2 = await sendPost(createSheetsPayload);
    console.log('CREATE_TOURNAMENT_SHEETS response:', JSON.stringify(res2, null, 2));
  } catch (err) {
    console.error('CREATE_TOURNAMENT_SHEETS error:', err);
  }
}

run();
