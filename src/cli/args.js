export const parseArgs = () => {
    const args = [];
    for (let i = 2; i < process.argv.length; i++) {
        if (process.argv[i].indexOf('--') == 0) {
            args.push(i);
        }
    }
    console.log(args.map(index => `${process.argv[index].slice(2)} is ${process.argv[index + 1]}`).join(', '));
};

parseArgs();