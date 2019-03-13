import { str2ab, ab2str } from './encoder';
import { PBKDF2 } from './lib/pbkdf2';

export const deriveRawKey = (password, salt) => new Promise((resolve, reject) => {
  const mypbkdf2 = new PBKDF2(password, salt, 1000, 8);
  const transformKey = key => {
    const rawKey = new Uint8Array(str2ab(key));
    resolve(rawKey);
  };
  mypbkdf2.deriveKey(() => {}, transformKey);
});

export const getCryptoFunction = (rawKey, currentCrypto = window.crypto) => {
  
  const name = 'AES-CBC';
  const targets = ["encrypt", "decrypt"];

  /*
  Import an AES secret key from an ArrayBuffer containing the raw bytes.
  Takes an ArrayBuffer string containing the bytes, and returns a Promise
  that will resolve to a CryptoKey representing the secret key.
  */
  const importSecretKey = rawKey => currentCrypto.subtle.importKey(
    "raw",
    rawKey,
    name,
    false,
    targets
  );

  const encryptMessage = (key, iv, encodedText) => currentCrypto.subtle.encrypt(
    { name, iv },
    key,
    encodedText
  );

  const decryptMessage = (key, iv, ciphertext) => currentCrypto.subtle.decrypt(
    { name, iv },
    key,
    ciphertext
  );

  return {
    encrypt: (message, iv) => importSecretKey(rawKey)
      .then((cryptoKey) => encryptMessage(cryptoKey, iv, str2ab(message)))
      .then(enc => ab2str(enc)),
    decrypt: (ciphertext, iv) => importSecretKey(rawKey)
      .then((cryptoKey) => decryptMessage(cryptoKey, iv, str2ab(ciphertext)))
      .then(dec => ab2str(dec)),
    getIv: () => currentCrypto.getRandomValues(new Uint8Array(16)),
  };
};

export const getPbCrypto = (password, salt) => deriveRawKey(password, salt).then(rawKey => getCryptoFunction(rawKey));