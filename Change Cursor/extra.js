function getCurrentRange() {
    if (window.getSelection) {
        const sel = window.getSelection();
        if (sel.rangeCount > 0) {
            return sel.getRangeAt(0);
        }

    } else if (document.selection) {
        const sel = document.selection;
        return sel.createRange();
    }
    return null;
}

document.addEventListener('mouseup', function (event) {
    const currentRange = getCurrentRange();
    if (currentRange && !currentRange.collapsed) {
        const rect = currentRange.getBoundingClientRect();
        const tag = document.createElement('div');
        tag.style.position = 'fixed';
        tag.style.top = (rect.top + rect.height) + 'px';
        tag.style.left = rect.left + 'px';
        tag.style.padding = '5px';
        tag.style.background = '#669900';
        tag.style.color = '#fff';
        tag.innerHTML = '٭٭٭';
        document.body.appendChild(tag);
    }
});