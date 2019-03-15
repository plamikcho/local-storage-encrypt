import { str2ab8 } from "./src/encoder";

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
   * Returns if browser is supported. Currently supported browsers are Chrome and Firefox
   * @param userAgent Navigator userAgent
   */
  type isBrowserSupported = boolean;

  /**
   * Encodes buffer into string using Uint8Array
   * @param buf buffer to encode
   */
  function ab2str8(buf: ArrayBuffer): string;

  /**
   * Decodes previously encoded ArrayBuffer using Uint8Array
   * @param str encoded string
   */
  function str2ab8(str: string): ArrayBuffer;

  interface ICrypto {
    /**
     * Encrypts unicode text
     * @param message Text to encrypt
     * @param iv Initialization vector
     */
    encrypt(message: string, iv: ArrayBuffer): string,

    /**
     * Decrypts encrypted string
     * @param ciphertext Encrypted string
     * @param iv Initialization vector
     */
    decrypt(ciphertext: string, iv: ArrayBuffer): string,

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