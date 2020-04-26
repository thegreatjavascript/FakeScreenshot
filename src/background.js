global.browser = require('webextension-polyfill');

function sendMessageToContentScript(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message);
  });
}

const textHandler = () => {
  sendMessageToContentScript({ type: 1 });
};

const textHandler2 = () => {
  sendMessageToContentScript({ type: 2 });
};

const imageHandler = () => {
  sendMessageToContentScript({ type: 3 });
};

const routeToHome = () => {
  window.open('https://github.com/thegreatjavascript/FakeScreenshot');
};

const routeToOptions = isHelp => {
  const options = chrome.runtime.getURL(`options/options.html${isHelp ? '?help=1' : ''}`);

  window.open(options);
};

const options = {
  type: 'normal',
  id: '1',
  title: '修改文字（就地）',
  visible: true,
  contexts: ['all'],
  onclick: textHandler,
};
chrome.contextMenus.create(options);
const options2 = {
  type: 'normal',
  id: '2',
  title: '修改文字（弹框）',
  visible: true,
  contexts: ['all'],
  onclick: textHandler2,
};
chrome.contextMenus.create(options2);

const options3 = {
  type: 'normal',
  id: '3',
  title: '修改图片',
  visible: true,
  contexts: ['all'],
  onclick: imageHandler,
};
chrome.contextMenus.create(options3);

const options4 = {
  type: 'separator',
  id: '4',
};
chrome.contextMenus.create(options4);

const options7 = {
  type: 'normal',
  id: '7',
  title: '截图检测页',
  visible: true,
  contexts: ['all'],
  onclick: routeToOptions,
};
chrome.contextMenus.create(options7);

const options6 = {
  type: 'separator',
  id: '6',
};
chrome.contextMenus.create(options6);

const options5 = {
  type: 'normal',
  id: '5',
  title: '项目主页',
  visible: true,
  contexts: ['all'],
  onclick: routeToHome,
};
chrome.contextMenus.create(options5);

const getItem = key => window.localStorage.getItem(key);
const setItem = (key, value) => window.localStorage.setItem(key, value);

// 检查是否初始化过。
const inited = getItem('inited');
// 如果是第一次初始化。（重新打开浏览器会触发）
if (inited !== '1') {
  // 打开帮助页面
  routeToOptions(1);
  setItem('inited', '1');
}
