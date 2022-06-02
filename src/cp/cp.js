import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const spawnChildProcess = async (args) => {
    const child = spawn('node', [path.join(__dirname, 'files', 'script.js'), ...args]);
    process.stdin.pipe(child.stdin);
    child.stdout.pipe(process.stdout);
};

await spawnChildProcess(process.argv.slice(2))