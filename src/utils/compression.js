import _ from 'lodash';
import pako from 'pako';

const compressor = stack => {
  const compress = countryCodesToInclude => {
    const includeIndexes = stack
      .filter(flag => countryCodesToInclude.includes(flag.code))
      .map(flag => flag.index);
    
    let bitArray = _.fill(Array(stack.length), '0');
    includeIndexes.forEach(index => {
      bitArray[index] = 1;
    });

    return encodeURIComponent(Buffer.from(pako.deflate(bitArray.join(''), { to: 'string' })).toString('base64'));
  }

  const decompress = compressedCode => {
    const bitArray = pako.inflate(Buffer.from(decodeURIComponent(compressedCode), 'base64').toString(), { to: 'string' });

    const countryIndexesToInclude = bitArray
      .split('')
      .map((bit, i) => parseInt(bit) * (i+1)) // use i+1 so that if the 0th bit is 1, we get 1 instead of 0
      .filter(index => index > 0)
      .map(index => index - 1);

    return stack
      .filter(flag => countryIndexesToInclude.includes(flag.index))
      .map(flag => flag.code);
  }
  
  return { compress, decompress };
};

export default compressor;