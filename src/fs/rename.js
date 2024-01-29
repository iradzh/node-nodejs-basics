import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const folderPath = path.join(__dirname, 'files');
  const filePath = path.join(folderPath, 'wrongFilename.txt');
  const renamedFilePath = path.join(folderPath, 'properFilename.md');

  try {
    if (
      await fs
        .access(renamedFilePath)
        .then(() => false)
        .catch(() => true)
    ) {
      throw new Error(
        'FS operation failed: File with this name already exists'
      );
    }

    await fs.rename(filePath, renamedFilePath);

    console.log('File renamed successfully');
  } catch (err) {
    console.error(err.message);
  }
};

await rename();
