import { ab2str8, str2ab8 } from './encoder';
import { getPbCrypto } from './crypto';

/**
 * Gets encrypted storage with async getItem and setItem
 * 
 * @param {Storage} storage Browser storage - localStorage, sessionStorage
 * @param {ICrypto} cryptoWrapper Crypto
 */
export const getEncryptedStorageFromCrypto = (storage, cryptoWrapper) => {

  const getIvKey = key => `${key}_iv`;

  const unmodifiedFunctions = {
    clear() {
      storage.clear();
    },
    get length() {
      return storage.length;
    },
    key(i) {      
      return storage.key(i);
    },
  };

  return {
    async setItem(key, value) {
      try {
        const iv = cryptoWrapper.getIv(); // getting iv per item
        const encrypted = await cryptoWrapper.encrypt(value, iv);
        storage.setItem(key, String(encrypted));
        storage.setItem(getIvKey(key), ab2str8(iv));
      }
      catch (error) {
        console.error(`Cannot set encrypted value for ${key}. Error: ${error}`);
        throw error;
      }
    },
    async getItem(key) {
      try {
        const data = storage.getItem(key);
        const iv = storage.getItem(getIvKey(key));
        const decrypted = await cryptoWrapper.decrypt(data, str2ab8(iv));
        return decrypted;
      }
      catch (error) {
        console.error(`Cannot get encrypted item for ${key}. Error: ${error}`);
        return null;
      }
    },
    removeItem(key) {
      storage.removeItem(key);
      storage.removeItem(getIvKey(key));
    },
    ...unmodifiedFunctions,
  };
};

const getEncryptedStorageFromPassword = (storage, password, salt) => getEncryptedStorageFromCrypto(storage, getPbCrypto(password, salt));

export const getEncryptedStorage = (storage, ...args) => {
  const [arg1, arg2] = args;
  if (typeof arg1 === 'object') { // it is crypto object
    return getEncryptedStorageFromCrypto(storage, arg1);
  }
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return getEncryptedStorageFromPassword(storage, arg1, arg2);
  }
};