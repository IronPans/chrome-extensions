// 用户修改了在 omnibox中的输入
chrome.omnibox.onInputChanged.addListener((text, suggest) => {
  if (text === 'chrome') {
      suggest([
          {content: text + '-extension', description: 'Chrome 扩展'},
          {content: text + '官网', description: 'Chrome 官网'}
      ]);
  }
});

// 用户接收了omnibox中的数据
chrome.omnibox.onInputEntered.addListener((text) => {
    const href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + text;
    chrome.tabs.create({url: href});
});