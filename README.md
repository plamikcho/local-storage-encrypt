# A simple wrapper over localStorage/sessionStorage using CryptoSubtle

The code is based on MDN https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto

## How to use

```javascript
import myCrypto from '@plamikcho/pbCrypto';

const encryptedStorage = getEncryptedStorage(localStorage, 'mysupersecret', 'salt');

encryptedStorage.setItem('test', 'Some text to store encrypted')
  .then(() => encryptedStorage.getItem('test'))
  .then(item => console.log(item));
  .catch(error => console.log(error));
```

If you don't need the storage, here is it:

```javascript
const cryptoWrapper = getPbCrypto('secret', 'pepper');
const iv = cryptoWrapper.getIv();
cryptoWrapper.encrypt('ДобАр ден,аз съм вашта леля!', iv)
  .then(encrypted => cryptoWrapper.decrypt(encrypted, iv))
  .then((decrypted) => console.log(decrypted));
```


Supported browsers at the moment: Firefox and Chrome. MDN says that Edge also should work but it doesn't (at least I was not able to find the proper input params). Any help will be appreciated.

## Changelog

### 2.1.5

- Bowser removed, browser detection is changed to feature detection
- isBrowserSupported method is restored as a promise. This method is used internally in encrypted storage

### 2.1.4

- Typings cleaned from unused import

### 2.1.3

- Babel configuration fixed in /dist folder
- Example added for encrypt/decrypt
- Typings fixes

### 2.1.2

- Babel configuration fixed

### 2.1.1

- Example fixed (broken on previous version)

### 2.1.0

- Babel polyfill removed (MS browsers support)

### 2.0.0

- Bowser is removed from the library. Now it is 6k minified.
- The issue with large strings is partially solved, at least for the sizes supported by localStorage (=< 10 MB)
