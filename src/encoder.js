export const ab2str = (buffer) => {
  const bufView = new Uint16Array(buffer);
  const length = bufView.length;
  let result = '';
  let addition = Math.pow(2, 16) - 1;

  for(let i = 0; i < length;i += addition) {
    if (i + addition > length) {
        addition = length - i;
    }
    result += String.fromCharCode.apply(null, bufView.subarray(i, i + addition));
  }
  return result;
};

export const str2ab = (str) => {
  const ab = new Uint16Array(str.length);
  for (let i = 0; i < str.length; i++) {
      ab[i] = str.charCodeAt(i);
  }
  return ab.buffer;
};

export const ab2str8 = buf => String.fromCharCode.call(null, ...new Uint8Array(buf));

export const str2ab8 = str => Uint8Array.from([...str].map(ch => ch.charCodeAt())).buffer;