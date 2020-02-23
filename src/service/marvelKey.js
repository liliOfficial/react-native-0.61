import { MD5 } from 'react-native-crypto-js';

const privateKey = 'cd13026ac992f6f456d3ad8571ce03ce529dfb02';
const publickKey = 'eff7d303b1ab3e1f6c5a51c3fbc9009a';

const generateHash = (privateKey, publickKey, timestamp) => MD5(`${timestamp}${privateKey}${publickKey}`);

export default MarvelParams = () => {
    const timestamp = +new Date();
    const hash = generateHash(privateKey, publickKey, timestamp);

    const params = `apikey=${publickKey}&ts=${timestamp}&hash=${hash}`;
    // console.log('params', params);
    return params;
}