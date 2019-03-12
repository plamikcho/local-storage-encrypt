import Bowser from "bowser";
import cryptoWrapperFunc, { pbkdf2 } from './crypto-wrapper';
import { str2ab, ab2str } from './encoder';
import { getEncryptedStorage } from './encrypted-storage';

const addEventListenerById = (eventType, elementId, handler) => document.addEventListener(eventType, (event) => {
  const { target } = event;
  if (target.id === elementId) {
    handler.call(event.target, event);
  }
});

const getBrowserVersion = () => {
  const parser = Bowser.getParser(window.navigator.userAgent);
  const { name, version } = parser.getBrowser();
  return `Browser is: ${name} ${version}`;
};

const component = () => {
  const element = document.createElement('div');
  element.innerHTML = getBrowserVersion();
  return element;
};

const setText = () => {
  document.querySelector('input').value = 'hey, welcome to the jungle. Български за проба Ã€∞µΩ.|/\\"`;:<>?';
};

const getText = () => document.querySelector('input').value;

document.body.appendChild(component());
setText();

pbkdf2('agasdadadsgsdgasgdasgf', 'hsdhsdhsdhяверявет')
  .then(rawKey => {
    const cryptoWrapper = cryptoWrapperFunc(rawKey, window.crypto);
    const encryptedStorage = getEncryptedStorage(localStorage, cryptoWrapper);
    
    addEventListenerById('click', 'button1', async (e) => {
      await encryptedStorage.setItem('test', getText());
    });
    
    addEventListenerById('click', 'button2', async (e) => {
      const decrypted = await encryptedStorage.getItem('test');
      const element = document.createElement('div');
      element.innerText = decrypted;
      document.body.appendChild(element);
    });
  });

