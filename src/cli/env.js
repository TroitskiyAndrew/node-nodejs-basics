export const parseEnv = () => {
    console.log(Object.entries(process.env).filter(entry => entry[0].indexOf('RSS_') == 0).map(entry => `${entry[0]}=${entry[1]}`).join('; '));
};

parseEnv()