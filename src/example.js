import Bowser from "bowser";
import myCrypto from './index';

const { getEncryptedStorage, isBrowserSupported } = myCrypto;

const addEventListenerById = (eventType, elementId, handler) => document.addEventListener(eventType, (event) => {
  const { target } = event;
  if (target.id === elementId) {
    handler.call(event.target, event);
  }
});

const getBrowserVersion = () => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  const { name, version } = parser.getBrowser();
  return `Your browser is: ${name} ${version} and is ${isBrowserSupported ? '' : 'not'} supported`;
};

const printBrowserVersion = () => {
  const element = document.createElement('div');
  element.innerHTML = getBrowserVersion();
  document.body.appendChild(element);
};

const setText = () => {
  document.querySelector('textarea').value = 'hey, welcome to the jungle. Български за проба Ã€∞µΩ.|/\\"`;:<>?';
};

const getText = () => document.querySelector('textarea').value;

printBrowserVersion();
setText();

const encryptedStorage = getEncryptedStorage(localStorage, 'mysupersecret', 'salt');

addEventListenerById('click', 'button1', async () => {
  await encryptedStorage.setItem('test', getText());
});

addEventListenerById('click', 'button2', async () => {
  const decrypted = await encryptedStorage.getItem('test');
  const element = document.createElement('div');
  element.innerText = decrypted;
  document.body.appendChild(element);
});