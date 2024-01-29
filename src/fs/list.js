import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderPath = path.join(__dirname, 'files');

  try {
    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);

    console.log(`Here is a list of files in ${folderPath}!`);

    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const stats = await fs.stat(filePath);

      if (stats.isFile()) {
        console.log(file);
      }
    }
  } catch (err) {
    console.error(err.message);
  }
};

await list();
