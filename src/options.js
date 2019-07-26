$(document).ready(function(){

  chrome.storage.sync.get(['hiddenThings'], function(result){
    var hiddenThings = result.hiddenThings;

    $("#totalPostsHidden").html(hiddenThings['posts'].length);
  });

  $("a.clearHiddenPosts").click(function(e) {
    if(confirm('This action is irreversible. All the posts you hid will now be visible again. Do you want to continue?'))
    {
      chrome.storage.sync.set({'hiddenThings': {'posts': []}}, function(){
        console.log("Spiceworks Posts Hider initialized with default settings. No posts or users will be hidden.");

        $("#totalPostsHidden").html('0');
      });
    }
  });
});
