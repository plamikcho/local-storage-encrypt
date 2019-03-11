export const ab2str = (buf) => {
  // return String.fromCharCode.apply(null, new Uint16Array(buf));
  const encoder = new TextDecoder('utf-8');
  return encoder.decode(buf);
};

export const str2ab = (str) => {
  const encoder = new TextEncoder('utf-8');
  return encoder.encode(str);
};