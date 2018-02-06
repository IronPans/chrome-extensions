chrome.storage.sync.get('fontColor', (items) => {
    document.getElementById('name').style.color = items.fontColor;
});