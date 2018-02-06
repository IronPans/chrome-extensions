// 获取background的window对象
const bg = chrome.extension.getBackgroundPage();
console.log(bg.getAuthor());

function getPopupName() {
    return 'Popup';
}