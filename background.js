// Listen for tab update
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // Send a message to the content script to replace text
    chrome.tabs.sendMessage(tabId, { action: "replaceText" });
  });