chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('window.html', {
        'bounds': {
            'width': 500,
            'height': 300
        },
        'frame': {
            color: '#177bbb',
            activeColor: '#1aae88',
            inactiveColor: '#fbb23e'
        }
    }, (win) => {
        console.log(win);
    });
});