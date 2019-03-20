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
Supported browsers at the moment: Firefox and Chrome. MDN says that Edge also should work but it doesn't (at least I was not able to find the proper input params). Any help will be appreciated.

## Changelog

### 2.0.0

- Bowser is removed from the library. Now it is 6k minified.
- The issue with large strings is partially solved, at least for the sizes supported by localStorage (=< 10 MB)
