function addYoutDownload(tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete' && tab.url.indexOf('youtube') > -1) {
	chrome.pageAction.show(tabId);
	}
};
function youtDownload(tab) {
	chrome.tabs.executeScript(null, {code:"var url=window.location.href;var youtUrl=url.replace('www.youtube.com', 'www.yout.com');window.location.href=youtUrl;"});
}

chrome.tabs.onUpdated.addListener(addYoutDownload);
chrome.pageAction.onClicked.addListener(youtDownload);