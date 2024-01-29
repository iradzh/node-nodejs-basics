import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'fileToRemove.txt');

  try {
    await fs.access(filePath);
    await fs.unlink(filePath);

    console.log('File deleted successfully!');
  } catch (err) {
    console.error(err.message);
  }
};

await remove();
