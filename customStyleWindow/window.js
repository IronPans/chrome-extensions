const close = document.getElementById('close');
const mini = document.getElementById('mini');
const maxi = document.getElementById('maxi');
// 获取当前窗口
const currentWindow = chrome.app.window.current();

mini.addEventListener('click', () => {
    currentWindow.minimize();
});

maxi.addEventListener('click', () => {
    currentWindow.isMaximized() ? currentWindow.restore() : currentWindow.maximize();
});

close.addEventListener('click', () => {
    currentWindow.close();
});