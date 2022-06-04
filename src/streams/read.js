import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const readableStream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
    let data = '';
    readableStream.on('data', chunk => data += chunk);
    readableStream.on('end', () => process.stdout.write(data.toString()));

};

read();