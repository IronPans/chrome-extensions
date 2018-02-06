
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    console.log('收到来自' + request.name + '的消息');
    sendResponse('content scripts已经收到消息');
});
