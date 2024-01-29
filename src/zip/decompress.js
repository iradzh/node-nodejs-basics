import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const folderPath = path.join(__dirname, 'files');
  const compressedFilePath = path.join(folderPath, 'archive.gz');
  const decompressedFilePath = path.join(
    folderPath,
    'fileToCompress_decompressed.txt'
  );

  try {
    const gunzip = zlib.createGunzip();
    const input = fs.createReadStream(compressedFilePath);
    const output = fs.createWriteStream(decompressedFilePath);

    input.pipe(gunzip).pipe(output);
  } catch (err) {
    console.error(err.message);
  }
};
await decompress();
