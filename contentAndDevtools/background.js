const connections = [];
// 创建connect长连接
chrome.runtime.onConnect.addListener(function (port) {
    const extensionListener = function (message, sender, sendResponse) {
        if (message.name === "init") {
            connections[message.tabId] = port;
            console.log('我已经接受到来自Devtools的消息');
        }
    };
    // 监听来自Devtools的消息
    port.onMessage.addListener(extensionListener);
    port.onDisconnect.addListener(function(port) {
        port.onMessage.removeListener(extensionListener);
        const tabs = Object.keys(connections);
        for (let i=0, len=tabs.length; i < len; i++) {
            if (connections[tabs[i]] === port) {
                delete connections[tabs[i]];
                break;
            }
        }
    });
});

// 接收content的消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('收到来自content的消息');
    if (sender.tab) {
        const tabId = sender.tab.id;
        if (tabId in connections) {
            // 向Devtools发送消息
            connections[tabId].postMessage(request);
        } else {
            console.log("Tab not found in connection list.");
        }
    } else {
        console.log("sender.tab not defined.");
    }
});