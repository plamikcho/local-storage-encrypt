import { str2ab, ab2str } from './encoder';

export default (rawKey, currentCrypto) => {
  
  const name = 'AES-CBC';
  const targets = ["encrypt", "decrypt"];
  /*
  Import an AES secret key from an ArrayBuffer containing the raw bytes.
  Takes an ArrayBuffer string containing the bytes, and returns a Promise
  that will resolve to a CryptoKey representing the secret key.
  */
  const importSecretKey = (rawKey) => currentCrypto.subtle.importKey(
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
      .then((cryptoKey) => {
        return encryptMessage(cryptoKey, iv, str2ab(message));
      })
      .then(enc => ab2str(enc)),
    decrypt: (ciphertext, iv) => importSecretKey(rawKey)
      .then((cryptoKey) => {
        return decryptMessage(cryptoKey, iv, str2ab(ciphertext));
      })
      .then(dec => ab2str(dec)),
    getIv: () => currentCrypto.getRandomValues(new Uint8Array(16))
  };
};