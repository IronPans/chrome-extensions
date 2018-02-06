const script = document.createElement('script');
script.src = chrome.extension.getURL('inject.js');
document.head.appendChild(script);

const style = document.createElement('link');
style.setAttribute('rel', 'stylesheet');
style.href = chrome.extension.getURL('inject.css');
document.head.appendChild(style);
