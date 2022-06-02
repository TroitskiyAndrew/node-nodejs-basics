import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs/promises'
import CustomError from '../utils/error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const rename = async () => {
    const targetFile = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newName = path.join(__dirname, 'files', 'properFilename.md');
    let targetExists = true;
    await fs.access(targetFile).catch(() => targetExists = false);
    let newNameExists = true;
    await fs.access(newName).catch(() => newNameExists = false);
    if (!targetExists || newNameExists) {
        throw new CustomError('FS operation failed');
    }
    await fs.rename(targetFile, newName);
};

await rename();