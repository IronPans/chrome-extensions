chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const port = chrome.tabs.connect(tabs[0].id, {name: 'chat-connect'});
    port.postMessage({message: 'Hi'});
    port.onMessage.addListener(function(msg) {
        console.log(msg);
        if (msg.message === '你好') {
            port.postMessage({message: 'Bye Bye'});
        }
    })
});