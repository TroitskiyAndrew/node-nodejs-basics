import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs/promises'
import CustomError from '../utils/error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    const targetFolder = path.join(__dirname, 'files');
    let targetExists = true;
    await fs.access(targetFolder).catch(() => targetExists = false);
    if (!targetExists) {
        throw new CustomError('FS operation failed');
    }
    const files = await fs.readdir(targetFolder);
    console.log(files.map(file => file.split('.')[0]).join(', '));
};

await list();