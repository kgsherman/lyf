import base62 from 'base62';
import _ from 'lodash';

/**
 * Compression scheme:
 *  Digit types:
 *    - type: 0 (world), 1 (group)
 *    - inclusion: 0 (subtract), 1 (add)
 *    - separator: ,
 *    - group: [0-9a-zA-Z][0-9a-zA-Z]
 *    - country: [0-9a-zA-Z][0-9a-zA-Z]
 *  World compression:
 *    type inclusion country+
 *  Group compression:
 *    type (separator group inclusion country+)+
 */
const compressor = (stack, groupSize = 20) => {
  const WORLD_COMPRESSION = 0;
  const GROUP_COMPRESSION = 1;

  const leadingZeroes = (n, l = 2) => {
    let N = n.toString();
    while (N.length < l) N = `0${N}`;
    return N;
  };

  const compressNum = n => leadingZeroes(base62.encode(n));

  const decompressNum = n => base62.decode(n);

  const group = n => `${compressNum(n % groupSize)}`;

  const groupCompress = toSave => {
    const counts = _.countBy(toSave, x => x % groupSize);
    const groups = {};
    stack
      .map((e, i) => compressNum(Math.floor(i / groupSize)))
      .forEach((e, i) => {
        if (counts[(i % groupSize).toString()]) {
          const adding = counts[(i % groupSize).toString()] < groupSize / 2;
          const save = adding ? toSave.includes(i) : !toSave.includes(i);
          const thisGroup = group(i);
          groups[thisGroup] = groups.hasOwnProperty(thisGroup) ? groups[thisGroup] : `${+adding}`;
          if (save) groups[thisGroup] = `${groups[thisGroup]}${e}`;
        }
      });
    return [GROUP_COMPRESSION,
      _.map(groups, (v, k) => `${k}${v}`).join()
    ].join();
  };

  const individualCompress = toSave => {
    const adding = toSave.length < stack.length / 2;
    return [WORLD_COMPRESSION,
      +adding,
      stack
        .map((e, i) => compressNum(i))
        .filter((e, i) => (adding ? toSave.includes(i) : !toSave.includes(i)))
        .join('')
    ].join('');
  };

  /**
   * @param {number[]} toSave - array of stack indexes to save
   * @return {string} the string representing the saved flags
   */
  const compress = toSave => {
    const grouped = groupCompress(toSave);
    const individual = individualCompress(toSave);
    return grouped.length < individual.length ? grouped : individual;
  };

  const groupDecompress = chars => (
    _.flattenDeep(chars
      .split(',')
      .slice(1)
      .map(e => {
        const g = decompressNum(e.substring(0, 2));
        const inclusion = e[2];
        let encoded = e
          .substring(3)
          .match(/.{2}/g)
          .map(n => decompressNum(n) * groupSize + g);
        if (+inclusion) {
          return encoded;
        } else {
          encoded = new Set(encoded);
          return _.range(g, stack.length, groupSize)
            .filter(n => !encoded.has(n));
        }
      })
    )
  );

  const individualDecompress = chars => {
    const inclusion = chars[1];
    let encoded = chars
      .substring(2)
      .match(/.{2}/g)
      .map(e => decompressNum(e));
    if (+inclusion) {
      return encoded;
    } else {
      encoded = new Set(encoded);
      return _.range(stack.length).filter(n => !encoded.has(n));
    }
  };

  /**
   * @param {string} chars - string result of compress function
   * @return {number[]} the indexes of the original stack to use
   */
  const decompress = chars => {
    const compressionType = chars[0];
    return +compressionType ? groupDecompress(chars) : individualDecompress(chars);
  };

  return { compress, decompress };
};

export default compressor;