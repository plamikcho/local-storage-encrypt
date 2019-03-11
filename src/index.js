import Bowser from "bowser";
import cryptoWrapper from './crypto-wrapper';
import { ab2str, str2ab } from './encoder';

let temp = '';

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

const test = () => {
  cryptoWrapper.encrypt('hey, welcome to the jungle. Български за проба !@№%!№$€!№$€№!§№!§')
    .then((encrypted) => {
      const element = document.createElement('div');
      element.innerText = encrypted;
      document.body.appendChild(element);
      temp = encrypted;
    })
    .catch(err => console.log(err));
};

document.body.appendChild(component());
addEventListenerById('click', 'button', (e) => {
  cryptoWrapper.decrypt(temp)
    .then(decrypted => {
      const element = document.createElement('div');
      element.innerText = decrypted;
      document.body.appendChild(element);
    });
});
test();
