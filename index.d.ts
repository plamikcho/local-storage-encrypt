// Type definitions for PbCrypto v1
// Project: https://github.com/plamikcho/local-storage-encrypt

export = PbCrypto;
export as namespace pbCrypto;

declare namespace PbCrypto {
  /**
   * Gets the crypto interface
   * @param password User password
   * @param salt Some salt
   * @param currentCrypto SubtleCrypto instance. e.g. window.crypto
   */
  function getPbCrypto(password: string, salt: string, currentCrypto: SubtleCrypto): ICrypto;

  /**
   * Wraps browser storage with encrypt/decrypt functionality
   * 
   * @param storage Browser storage or compatible (localStorage, sessionStorage)
   * @param password Password supplied from input
   * @param salt Some salt - generated or supplied
   */
  function getEncryptedStorage(storage: Storage, password: string, salt: string): IAsyncStorage;

  /**
   * Wraps browser storage with encrypt/decrypt functionality
   * 
   * @param storage Browser storage or compatible (localStorage, sessionStorage)
   * @param crypto 
   */
  function getEncryptedStorage(storage: Storage, crypto: ICrypto): IAsyncStorage;

  interface ICrypto {
    /**
     * Encrypts unicode text
     * @param message Text to encrypt
     * @param iv Initialization vector
     */
    encrypt(message: string, iv: ArrayBuffer): Promise<string>,

    /**
     * Decrypts encrypted string
     * @param ciphertext Encrypted string
     * @param iv Initialization vector
     */
    decrypt(ciphertext: string, iv: ArrayBuffer): Promise<string>,

    /**
     * Gets iv
     */
    getIv(): ArrayBuffer,
  };

  interface IAsyncStorage extends Storage {
    /**
     * value = storage[key]
     */
    getItem(key: string): Promise<any>;
    
    /**
     * storage[key] = value
     */
    setItem(key: string, value: string): Promise<any>;
  }
}