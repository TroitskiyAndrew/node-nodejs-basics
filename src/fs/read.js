import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs/promises'
import CustomError from '../utils/error.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const targetFile = path.join(__dirname, 'files', 'fileToRead.txt');
    let targetExists = true;
    await fs.access(targetFile).catch(() => targetExists = false);
    if (!targetExists) {
        throw new CustomError('FS operation failed');
    }

    const value = await fs.readFile(targetFile);
    console.log(value.toString());
};

await read();