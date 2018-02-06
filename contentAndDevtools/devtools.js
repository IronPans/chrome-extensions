chrome.devtools.panels.create('NewPanel', 'icon.png', 'panel.html', function(panel)
{
    console.log('自定义面板创建成功！'); // 注意这个log一般看不到
});
chrome.devtools.panels.elements.createSidebarPane("My Sidebar",
    function(sidebar) {
        sidebar.setObject({ some_data: "Some data to show" });
    });