
chrome.contextMenus.create({
    title: '打开Notification',
    contexts: ['all'],
    onclick: function(info, tab) {
        chrome.notifications.create(null, {
            type: 'basic',
            iconUrl: 'icon.png',
            title: 'Hello World!',
            message: '欢迎来到Chrome Extension扩展开发实战！'
        });
    }
}, function() {
    console.log(chrome.extension.lastError);
});

chrome.notifications.onClicked.addListener(function (notificationId) {
    alert('Hello!');
});