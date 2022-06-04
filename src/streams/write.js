import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs'
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const writableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToWrite.txt'));
    await pipeline(process.stdin, writableStream);
};

await write();