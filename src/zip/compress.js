import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fileToCompress.txt');

  try {
    const gzip = zlib.createGzip();
    const input = fs.createReadStream(filePath);
    const output = fs.createWriteStream(path.join(folderPath, 'archive.gz'));
    input.pipe(gzip).pipe(output);
  } catch (err) {
    console.error(err.message);
  }
};

await compress();
