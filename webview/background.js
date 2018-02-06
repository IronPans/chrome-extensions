chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('webview.html', {
        'bounds': {
            'width': 1000,
            'height': 500
        }
    }, (win) => {
        console.log(win);
    });
});