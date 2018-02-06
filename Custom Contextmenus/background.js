chrome.contextMenus.create({
    title: 'Google翻译：%s',
    contexts: ['selection'],
    onclick: function(info, tab) {
        chrome.tabs.create({url: 'https://translate.google.cn/#en/zh-CN/' + encodeURI(info.selectionText)});
    }
}, function() {
    console.log(chrome.extension.lastError);
})