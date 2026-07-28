const https = require('https');
const fs = require('fs');
const path = require('path');

const files = [
  'pyodide.asm.js',
  'pyodide.asm.wasm',
  'python_stdlib.zip',
  'pyodide-lock.json'
];

const mirrors = [
  'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/',
  'https://fastly.jsdelivr.net/pyodide/v0.26.2/full/',
  'https://gcore.jsdelivr.net/pyodide/v0.26.2/full/',
  'https://raw.githubusercontent.com/pyodide/pyodide/refs/heads/main/src/core/pyodide/full/'
];

const targetDir = path.join(__dirname, '..', 'public', 'pyodide');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest, timeout = 180000) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    let settled = false;

    const cleanup = () => {
      if (!settled) {
        settled = true;
        try { fs.unlink(dest, () => {}); } catch {}
      }
    };

    const req = https.get(url, { timeout }, (response) => {
      if (response.statusCode === 404 || response.statusCode === 403) {
        file.close();
        cleanup();
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        cleanup();
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        settled = true;
        resolve();
      });
    });

    req.on('error', (err) => {
      file.close();
      cleanup();
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      file.close();
      cleanup();
      reject(new Error('timeout'));
    });
  });
}

async function downloadWithMirrors(filename) {
  const dest = path.join(targetDir, filename);
  if (fs.existsSync(dest)) {
    const stat = fs.statSync(dest);
    if (stat.size > 0) {
      console.log(`  ${filename} already exists (${(stat.size/1024/1024).toFixed(2)}MB), skipping`);
      return;
    }
  }

  for (let i = 0; i < mirrors.length; i++) {
    const url = mirrors[i] + filename;
    try {
      console.log(`  Trying mirror ${i + 1}: ${url}`);
      await downloadFile(url, dest);
      console.log(`  ✅ ${filename} downloaded from mirror ${i + 1}`);
      return;
    } catch (err) {
      console.log(`  ❌ Mirror ${i + 1} failed: ${err.message}`);
      if (fs.existsSync(dest)) {
        try { fs.unlinkSync(dest); } catch {}
      }
    }
  }
  throw new Error(`All mirrors failed for ${filename}`);
}

(async () => {
  console.log('Downloading Pyodide core files...');
  console.log('Target:', targetDir);

  for (const file of files) {
    try {
      await downloadWithMirrors(file);
    } catch (err) {
      console.error(`\nFATAL: Failed to download ${file}: ${err.message}`);
      process.exit(1);
    }
  }

  console.log('\n✅ All Pyodide files downloaded successfully!');
})();
