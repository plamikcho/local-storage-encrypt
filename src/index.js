import Bowser from "bowser";
import cryptoWrapperFunc from './crypto-wrapper';
import { str2ab, ab2str } from './encoder';

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

const rawKey = new Uint8Array(str2ab('1aa3eef61aa3eef6'));
const cryptoWrapper = cryptoWrapperFunc(rawKey, window.crypto);


addEventListenerById('click', 'button1', (e) => {
  const iv = cryptoWrapper.getIv();
  cryptoWrapper.encrypt(getText(), iv)
    .then((encrypted) => {
      const element = document.createElement('div');
      element.innerText = encrypted;
      document.body.appendChild(element);
      localStorage.setItem('test', JSON.stringify([encrypted, iv]));
    })
    .catch(err => console.log(err));
});

addEventListenerById('click', 'button2', (e) => {
  const [data, v] = JSON.parse(localStorage.getItem('test'));
  const restoredIv = Object.keys(v).map(k => v[k]);
  cryptoWrapper.decrypt(data, new Uint8Array(restoredIv))
    .then(decrypted => {
      const element = document.createElement('div');
      element.innerText = decrypted;
      document.body.appendChild(element);
    });
});
