import crypto from 'crypto';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs/promises'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const calculateHash = async () => {
    const value = await fs.readFile(path.join(__dirname, 'files', 'fileToCalculateHashFor.txt'))
    console.log(crypto.createHash('SHA256').update(value).digest('hex'))
};

await calculateHash();