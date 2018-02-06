
// 向background后台页面发送消息
chrome.runtime.sendMessage({name: 'content'}, function(response) {
    console.log(response);
});