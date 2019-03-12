export const ab2str = (buf) => {
  return String.fromCharCode(...new Uint16Array(buf));
};

export const str2ab = (str) => {
  return Uint16Array.from([...str].map(ch => ch.charCodeAt())).buffer;
};