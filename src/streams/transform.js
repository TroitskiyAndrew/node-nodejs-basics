import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

class TranformStream extends Transform {
    constructor(options = {}) {
        super(options)
    }

    _transform(chunk, _, cb) {
        this.push(chunk.toString().split('').reverse().join('') + '\n');
        cb();
    }

}

export const transform = async () => {
    await pipeline(process.stdin, new TranformStream(), process.stdout);
};

await transform();