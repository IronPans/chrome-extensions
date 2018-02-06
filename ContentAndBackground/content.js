
chrome.runtime.sendMessage({name: 'content'}, function(response) {
    console.log(response);
});