import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fileToRead.txt');

  const readStream = fs.createReadStream(filePath, 'utf8');

  readStream.on('data', (data) => {
    process.stdout.write(data);
  });

  readStream.on('error', (err) => {
    console.error(err.message);
  });
};

read();
