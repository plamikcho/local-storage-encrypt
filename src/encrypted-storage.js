import { ab2str8, str2ab8 } from './encoder';
import { getPbCrypto } from './crypto';

/**
 * Determines whether current browser supports WebCrypto API using feature detection
 */
const isBrowserSupported = async () => {
  const testMessage = 'w?';
  try {
    const cryptoWrapper = getPbCrypto('a', 'b');
    const iv = cryptoWrapper.getIv();
    const encrypted = await cryptoWrapper.encrypt(testMessage, iv);
    const decrypted = await cryptoWrapper.decrypt(encrypted, iv);
    return decrypted === testMessage;
  } catch (error) {
    console.warn('Your browser does not support WebCrypto API', error);
    return false;
  }
};

/**
 * Gets encrypted storage with async getItem and setItem
 * 
 * @param {Storage} storage Browser storage - localStorage, sessionStorage
 * @param {ICrypto} cryptoWrapper Crypto
 */
export const getEncryptedStorageFromCrypto = (storage, cryptoWrapper) => {

  let isSupported;

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

  const setBrowserSupport = async () => {
    if (typeof isSupported === 'undefined') {
      isSupported = await isBrowserSupported();
    }
  };

  return {
    async setItem(key, value) {
      await setBrowserSupport();
      if (isSupported) {
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
      } else {
        storage.setItem(key, value); // legacy mode, no encryption
      }
    },
    async getItem(key) {
      await setBrowserSupport();
      if (isSupported) {
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
      }
      return storage.getItem(key); // legacy mode, no encryption
    },
    removeItem(key) {
      storage.removeItem(key);
      const ivKey = getIvKey(key);
      storage.getItem(ivKey) && storage.removeItem(ivKey);
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