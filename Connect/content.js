// 监听长连接
chrome.runtime.onConnect.addListener(function(port) {
    if(port.name === 'chat-connect') {
        port.onMessage.addListener(function(msg) {
            console.log(msg);
           if (msg.message === 'Hi') {
               port.postMessage({message: '你好'});
           } else if (msg.message === '你好') {
               port.postMessage({message: 'Hi'});
            }
        });
    }
});