chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 500,
            'height': 300
        },
        'frame': {
            type: 'none'  // 禁用默认标题栏
        }
    }, (win) => {
        console.log(win);
    });
});