// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "replaceText") {
      replaceTextOnPage("python", "phython");
    }
  });
  
  // Function to replace text on the page
  function replaceTextOnPage(searchText, replaceText) {
    const regex = new RegExp(searchText, "gi");
    document.body.innerHTML = document.body.innerHTML.replace(regex, replaceText);
  }


  