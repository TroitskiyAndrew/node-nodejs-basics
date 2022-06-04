import os from 'os';
import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const performCalculations = async () => {
    const promises = [];

    for (let i = 0; i < os.cpus().length; i++) {
        promises.push(new Promise((resolve) => {
            const worker = new Worker(path.join(__dirname, 'worker.js'));
            worker.postMessage(i + 10);
            worker.on('message', msg => {
                resolve({ status: 'resolved', data: msg });
            });
            worker.on('error', () => {
                resolve({ status: 'error', data: null });
            })
        }))
    }
    const result = await Promise.all(promises);
    return result;

};

console.log(await performCalculations());