import myCrypto from './index';
import { isBrowserSupported } from './crypto';

const { getEncryptedStorage, getPbCrypto } = myCrypto;

const addEventListenerById = (eventType, elementId, handler) => document.addEventListener(eventType, (event) => {
  const { target } = event;
  if (target.id === elementId) {
    handler.call(event.target, event);
  }
});

const setText = () => {
  document.querySelector('textarea').value = 'hey, welcome to the jungle. Български за проба Ã€∞µΩ.|/\\"`;:<>?';
};

const getText = () => document.querySelector('textarea').value;

setText();

const encryptedStorage = getEncryptedStorage(localStorage, 'mysupersecret', 'salt');

addEventListenerById('click', 'button1', async () => {
  const isSupported = await isBrowserSupported();
  await encryptedStorage.setItem('test', getText());
  const element = document.createElement('div');
  element.setAttribute('style', `color: ${isSupported ? 'green' : 'red'}`);
  element.innerText = `Text stored ${isSupported ? 'encrypted' : 'plain (WebCrypto API not supported by this browser)'}!`;
  document.body.appendChild(element);
});

addEventListenerById('click', 'button2', async () => {
  const decrypted = await encryptedStorage.getItem('test');
  const element = document.createElement('div');
  element.innerText = decrypted;
  document.body.appendChild(element);
});

// const cryptoWrapper = getPbCrypto('secret', 'pepper');
// const iv = cryptoWrapper.getIv();
// cryptoWrapper.encrypt('ДобАр ден,аз съм вашта леля!', iv)
//   .then(encrypted => cryptoWrapper.decrypt(encrypted, iv))
//   .then((decrypted) => console.log(decrypted));