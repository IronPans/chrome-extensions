// 创建connect长连接
const port = chrome.runtime.connect({
    name: "panel"
});
// 向background发送消息
port.postMessage({
    name: 'init',
    tabId: chrome.devtools.inspectedWindow.tabId
});