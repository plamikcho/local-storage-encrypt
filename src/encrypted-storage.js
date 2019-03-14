import Bowser from "bowser";
import { ab2str8, str2ab8 } from './encoder';
import { getPbCrypto } from './crypto';

export const isBrowserSupported = ((userAgent = window.navigator.userAgent) => {
  const supportedBrowsers = ['chrome', 'firefox'];
  const parser = Bowser.getParser(userAgent);
  return supportedBrowsers.filter(browser => parser.is(browser)).length > 0;
})();

export const getEncryptedStorageFromCrypto = (storage, cryptoWrapper) => {
  const unmodifiedFunctions = {
    removeItem(key) {
      storage.removeItem(key);
    },
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

  return isBrowserSupported
    ? {
        async setItem(key, value) {
          try {
            const iv = cryptoWrapper.getIv(); // getting iv per item
            const encrypted = await cryptoWrapper.encrypt(value, iv);
            storage.setItem(key, JSON.stringify([encrypted, ab2str8(iv)]));
          }
          catch (error) {
            console.error(`Cannot set encrypted value for ${key}. Error: ${error}`);
            storage.setItem(key, value);
          }
        },
        async getItem(key) {
          try {
            const [data, iv] = JSON.parse(storage.getItem(key));
            const decrypted = await cryptoWrapper.decrypt(data, str2ab8(iv));
            return decrypted;
          }
          catch (error) {
            console.error(`Cannot get encrypted item for ${key}. Error: ${error}`);
            return storage.getItem(key);
          }
        },
        ...unmodifiedFunctions,
      }
  : {
      // async too for consistent interface
      async setItem(key, value) {
        storage.setItem(key, value);
      },
      async getItem(key) {        
        return storage.getItem(key);
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