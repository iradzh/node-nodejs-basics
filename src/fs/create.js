import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fresh.txt');
  const content = 'I am fresh and young';

  try {
    await fs.access(filePath);

    throw new Error('FS operation failed: File already exists');
  } catch (err) {
    if (err.code !== 'ENOENT') {
      console.error(err.message);
      return;
    }

    try {
      await fs.writeFile(filePath, content, 'utf-8');
      console.log('File created successfully:', filePath);
    } catch (writeErr) {
      console.error(writeErr.message);
    }
  }
};

await create();
