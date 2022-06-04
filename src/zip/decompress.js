import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import zlib from 'zlib';
import { pipeline } from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const decompress = async () => {
    const target = path.join(__dirname, 'files', 'archive.gz');
    const readableStream = fs.createReadStream(target);
    const writableStream = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));
    await pipeline(readableStream, zlib.createUnzip(), writableStream);
    fs.unlink(target, (err) => {
        if (err) {
            throw err;
        }
    })
};

await decompress();