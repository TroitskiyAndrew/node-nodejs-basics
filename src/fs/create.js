import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs/promises'
import CustomError from '../utils/error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {
    const newFilePath = path.join(__dirname, 'files', 'fresh.txt');
    let exists = true;
    await fs.access(newFilePath).catch(() => exists = false);
    if (exists) {
        throw new CustomError('FS operation failed');
    }
    await fs.writeFile(newFilePath, 'I am fresh and young');
};

await create();