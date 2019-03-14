import { str2ab, ab2str } from './encoder';

export const getPbCrypto = (password, salt, currentCrypto = window.crypto) => {
  const name = 'AES-GCM';
  const targets = ["encrypt", "decrypt"];
  const pbkdfName = 'PBKDF2';
  const hash = { name: 'SHA-256', length: 256 };
  const iterations = 10000;

  const deriveKey = async (password, salt, currentCrypto = window.crypto) => {
    const keyMaterial = await currentCrypto.subtle.importKey(
      "raw",
      str2ab(password),
      { name: pbkdfName },
      false,
      ["deriveBits", "deriveKey"]
    );
    return currentCrypto.subtle.deriveKey(
      {
        name: pbkdfName,
        salt: str2ab(salt),
        iterations,
        hash: hash.name,
      },
      keyMaterial,
      { name, length: hash.length },
      true,
      targets,
    );
  };

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

  const encrypt = (message, iv) => deriveKey(password, salt)
  .then(cryptoKey => encryptMessage(cryptoKey, iv, str2ab(message)))
  .then(enc => ab2str(enc));

  const decrypt = (ciphertext, iv) => deriveKey(password, salt)
  .then(cryptoKey => decryptMessage(cryptoKey, iv, str2ab(ciphertext)))
  .then(dec => ab2str(dec));

  const getIv = () => currentCrypto.getRandomValues(new Uint8Array(16));

  return { encrypt, decrypt, getIv };
};