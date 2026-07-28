const https = require('https');
const fs = require('fs');
const path = require('path');

// 核心文件列表，总共约 20MB
const files = [
  'pyodide.asm.js',
  'pyodide.asm.wasm',
  'python_stdlib.zip',
  'pyodide-lock.json'
];

// 多镜像源，按顺序尝试
const mirrors = [
  'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/',
  'https://fastly.jsdelivr.net/pyodide/v0.26.2/full/',
  'https://gcore.jsdelivr.net/pyodide/v0.26.2/full/'
];

const targetDir = path.join(__dirname, '..', 'public', 'pyodide');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFromMirror(filename, mirrorIndex = 0) {
  return new Promise((resolve, reject) => {
    if (mirrorIndex >= mirrors.length) {
      reject(new Error(`All mirrors failed for ${filename}`));
      return;
    }

    const baseURL = mirrors[mirrorIndex];
    const url = baseURL + filename;
    const dest = path.join(targetDir, filename);

    if (fs.existsSync(dest)) {
      console.log(`${filename} already exists, skipping`);
      resolve();
      return;
    }

    const file = fs.createWriteStream(dest);
    console.log(`Downloading ${filename} from mirror ${mirrorIndex + 1}...`);

    const request = https.get(url, { timeout: 120000 }, (response) => {
      if (response.statusCode === 404) {
        file.close();
        fs.unlink(dest, () => {});
        console.log(`File not found on mirror ${mirrorIndex + 1}, trying next...`);
        downloadFromMirror(filename, mirrorIndex + 1).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      let downloaded = 0;
      const total = parseInt(response.headers['content-length'] || '0');

      response.on('data', (chunk) => {
        downloaded += chunk.length;
        if (total > 0) {
          const percent = ((downloaded / total) * 100).toFixed(1);
          process.stdout.write(`\r${filename}: ${percent}% (${(downloaded / 1024 / 1024).toFixed(2)} MB)`);
        }
      });

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`\n${filename} downloaded successfully`);
        resolve();
      });
    });

    request.on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      console.log(`Mirror ${mirrorIndex + 1} failed: ${err.message}, trying next...`);
      downloadFromMirror(filename, mirrorIndex + 1).then(resolve).catch(reject);
    });

    request.on('timeout', () => {
      request.destroy();
      file.close();
      fs.unlink(dest, () => {});
      console.log(`Mirror ${mirrorIndex + 1} timeout, trying next...`);
      downloadFromMirror(filename, mirrorIndex + 1).then(resolve).catch(reject);
    });
  });
}

(async () => {
  console.log('Downloading Pyodide core files...');
  console.log('Target directory:', targetDir);

  for (const file of files) {
    try {
      await downloadFromMirror(file);
    } catch (err) {
      console.error(`\nFailed to download ${file}:`, err.message);
      process.exit(1);
    }
  }

  console.log('\nAll Pyodide files downloaded successfully!');
})();
