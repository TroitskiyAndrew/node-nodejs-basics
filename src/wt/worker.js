import { parentPort } from 'worker_threads';
let n;
// n should be received from main thread
export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    parentPort.postMessage(nthFibonacci(n));
    process.exit();
};

parentPort.on('message', msg => {
    n = msg;
    sendResult();
})