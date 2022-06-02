import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs/promises'
import CustomError from '../utils/error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const copy = async () => {
    const folderPath = path.join(__dirname, 'files');
    const newFolderPath = path.join(__dirname, 'files_copy');
    let folderExists = true;
    await fs.access(folderPath).catch(() => folderExists = false);
    let copeExists = true;
    await fs.access(newFolderPath).catch(() => copeExists = false);
    if (copeExists || !folderExists) {
        throw new CustomError('FS operation failed');
    }
    await fs.mkdir(newFolderPath);
    const files = await fs.readdir(folderPath);
    for (const oneFile of files) {
        await fs.copyFile(path.join(folderPath, oneFile), path.join(newFolderPath, oneFile))
    }

};

await copy();