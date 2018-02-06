chrome.runtime.onInstalled.addListener(function () {
    console.log('installed');
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        console.log('removed');
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: {
                            urlEquals: 'http://ghmagical.com/'
                        }
                    })
                ],

                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    });
});