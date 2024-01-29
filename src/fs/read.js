import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fileToRead.txt');

  try {
    await fs.access(filePath);

    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
};

await read();
