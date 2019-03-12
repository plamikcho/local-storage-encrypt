import { str2ab, ab2str } from './encoder';

const mode = 'AES-CBC';
const targets = ["encrypt", "decrypt"];

const rawKey = new Uint8Array(str2ab('1aa3eef61aa3eef6'));

const currentCrypto = window.crypto;

const subtleCryptoProxy = (cryptoFunc, ...args) => cryptoFunc.apply(this, args);

/*
Import an AES secret key from an ArrayBuffer containing the raw bytes.
Takes an ArrayBuffer string containing the bytes, and returns a Promise
that will resolve to a CryptoKey representing the secret key.
*/
function importSecretKey(rawKey) {
  return currentCrypto.subtle.importKey(
    "raw",
    rawKey,
    mode,
    false,
    targets
  );
}

function encryptMessage(key, iv, message) {
  return currentCrypto.subtle.encrypt(
    {
      name: mode,
      iv,
    },
    key,
    str2ab(message)
  );
}

function decryptMessage(key, iv, ciphertext) {
  return currentCrypto.subtle.decrypt(
    {
      name: mode,
      iv,
    },
    key,
    ciphertext
  );
}

export default ((rawKey) => {
  return {
    encrypt: (message, iv) => subtleCryptoProxy(importSecretKey, rawKey)
      .then((cryptoKey) => {
        return subtleCryptoProxy(encryptMessage, cryptoKey, iv, message);
      })
      .then(enc => ab2str(enc)),
    decrypt: (ciphertext, iv) => subtleCryptoProxy(importSecretKey, rawKey)
      .then((cryptoKey) => {
        return subtleCryptoProxy(decryptMessage, cryptoKey, iv, str2ab(ciphertext));
      })
      .then(dec => ab2str(dec)),
    getIv: () => subtleCryptoProxy(() => currentCrypto.getRandomValues(new Uint8Array(16)))
  };
})(rawKey);