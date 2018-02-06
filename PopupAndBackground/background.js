function getAuthor() {
    return 'TG';
}

const views = chrome.extension.getViews({type:'popup'});
if (views.length > 0) {
    console.log(views[0].getPopupName());
}