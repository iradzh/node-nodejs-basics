import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const folderPath = path.join(__dirname, 'files');
  const copyFolderPath = path.join(__dirname, 'files_copy');

  try {
    if (fs.existsSync(copyFolderPath)) {
      throw new Error('FS operation failed: Folder already exists');
    }

    fs.cp(folderPath, copyFolderPath, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    });
    console.log('Directory copied successfully!');
  } catch (err) {
    console.error(err.message);
  }
};

await copy();
