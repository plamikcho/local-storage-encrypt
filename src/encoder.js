export const ab2str = buf => String.fromCharCode(...new Uint16Array(buf));

export const str2ab = str => Uint16Array.from([...str].map(ch => ch.charCodeAt())).buffer;

export const ab2str8 = buf => String.fromCharCode(...new Uint8Array(buf));

export const str2ab8 = str => Uint8Array.from([...str].map(ch => ch.charCodeAt())).buffer;