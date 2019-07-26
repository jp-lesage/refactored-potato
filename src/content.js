$(document).ready(function(){
  // Adding the "hide this post" button. That may need to change if Spiceworks changes the layout.
  $(".post.their-post > .post-content-wrapper > .post-content.post_content > .post-header-wrapper").prepend('<div><a class="hideMe" href="javascript:void(0)">Hide this post!</a></div>');

  chrome.storage.sync.get(['hiddenThings'], function(result){
    var hiddenThings = result.hiddenThings;

    // Removing the elements where the data-id matches the post to hide.
    $.each(hiddenThings['posts'], function(index, value){
      $("[data-id*='" + value + "']").remove();
    });
  });

  // Main "hide this post" link handler.
  $("a.hideMe").click(function(e) {
    chrome.storage.sync.get(['hiddenThings'], function(result){
      hiddenThings = result.hiddenThings;

      // Getting the correct parent to extract the data-id attribute. It's then added to the array and persisted.
      // The associated element is also nuked from orbit.
      var elementToHide = $(e.target).parents().eq(4);
      var dataIdToHide = elementToHide.attr('data-id');
      hiddenThings['posts'].push(dataIdToHide);

      chrome.storage.sync.set({'hiddenThings': hiddenThings}, function(){
        console.log("Spiceworks Posts Hider: post with data-id '" + dataIdToHide + "' is now hidden.");
      });

      $(elementToHide).remove();
    });
  });
});
