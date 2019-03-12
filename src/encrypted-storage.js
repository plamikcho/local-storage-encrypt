import cryptoWrapperFunc from './crypto-wrapper'; 

export const getEncryptedStorage = (storage, cryptoWrapper) => {
  

  return {
    async setItem(key, value) {
      const iv = cryptoWrapper.getIv();
      try {
        const encrypted = await cryptoWrapper.encrypt(value, iv);
        storage.setItem(key, JSON.stringify([encrypted, iv]));
      }
      catch (error) {
        console.log(error);
        storage.setItem(key, value);
      }
    },
    async getItem(key) {
      try {
        const [data, v] = JSON.parse(storage.getItem(key));
        const restoredIv = Object.keys(v).map(k => v[k]);
        const decrypted = await cryptoWrapper.decrypt(data, new Uint8Array(restoredIv));
        return decrypted;
      }
      catch (error) {
        console.log(error);
        return storage.getItem(key);
      }
    },
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
};