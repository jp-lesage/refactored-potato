'use strict';

chrome.runtime.onInstalled.addListener(function() {
  // On the very first run, initialize with an empty array.
  chrome.storage.sync.get(['hiddenThings'], function(result){
    if(result.hiddenThings == null || result.hiddenThings == undefined)
    {
      chrome.storage.sync.set({'hiddenThings': {'posts': []}}, function(){
        console.log("Spiceworks Posts Hider initialized with default settings. No posts or users will be hidden.");
      });
    }
  });
});
