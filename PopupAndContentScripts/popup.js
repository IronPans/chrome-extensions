chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {name: 'Popup'}, function(response)
    {
        console.log(response);
    });
});
