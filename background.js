chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status !== 'complete')
    {
        return;
    }
    var putInCalendar = false;
    var t2 = 'https://t-square.gatech.edu/portal/site';
    var cal = 'https://calendar.google.com/calendar/';
	var url = tab.url
    if (url.substring(0, t2.length) === t2) chrome.tabs.executeScript(tabId, { file: 't2.js' });
    if (url.substring(0, cal.length) === cal && url.substring(url.length - 4, url.length) === 'auto') chrome.tabs.executeScript(tabId, { file: 'cal.js' });
});

