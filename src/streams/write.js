import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fileToWrite.txt');

  const writeStream = fs.createWriteStream(filePath, { encoding: 'utf8' });

  process.stdin.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log('Data has been written to fileToWrite.txt');
  });

  writeStream.on('error', (err) => {
    console.error(err.message);
  });
};

write();
