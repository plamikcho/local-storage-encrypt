import { getPbCrypto, deriveRawKey } from './crypto'; 
import { getEncryptedStorage, isBrowserSupported } from './encrypted-storage';

export default {
  getPbCrypto,
  deriveRawKey,
  getEncryptedStorage,
  isBrowserSupported,
};