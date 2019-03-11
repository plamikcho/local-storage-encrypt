import { str2ab, ab2str } from './encoder';

const mode = 'AES-GCM';
const targets = ["encrypt", "decrypt"];

const rawKey = new Uint8Array(str2ab('1aa3eef61aa3eef6'));
const iv = new Uint8Array(str2ab('ba0fde66'));

/*
Import an AES secret key from an ArrayBuffer containing the raw bytes.
Takes an ArrayBuffer string containing the bytes, and returns a Promise
that will resolve to a CryptoKey representing the secret key.
*/
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey(
    "raw",
    rawKey,
    mode,
    true,
    targets
  );
}

function encryptMessage(key, iv, message) {
  return window.crypto.subtle.encrypt(
    {
      name: mode,
      iv: iv
    },
    key,
    str2ab(message)
  );
}

function decryptMessage(key, iv, ciphertext) {
  return window.crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv
    },
    key,
    ciphertext
  );
}

export default ((rawKey, iv) => {
  return {
    encrypt: message => importSecretKey(rawKey)
      .then((cryptoKey) => {      
        return encryptMessage(cryptoKey, iv, message);
      })
      .then(dec => ab2str(dec)),
    decrypt: ciphertext => importSecretKey(rawKey)
      .then((cryptoKey) => {
        const cipher = str2ab(ciphertext);
        return decryptMessage(cryptoKey, iv, cipher);
      })
      .then(dec => ab2str(dec)),
  };
})(rawKey, iv);