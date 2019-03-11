import Bowser from "bowser";

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

document.body.appendChild(component());