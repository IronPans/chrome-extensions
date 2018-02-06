const saveBtn = document.getElementById('save');
const colorSelect = document.getElementById('color');
const tip = document.getElementById('tip');

saveBtn.addEventListener('click', function() {
    const color = colorSelect.value;
    chrome.storage.sync.set({'fontColor': color}, () => {
        tip.innerHTML = '保存成功';
        setTimeout(() => {
            tip.innerHTML = ''
        }, 1500);
    });
});