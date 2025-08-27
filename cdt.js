
$(document).ready(function(){
  // Toggle the matching box
  $(".toggle-btn").click(function (e) {
    e.stopPropagation(); // prevent click from bubbling
    let targetId = $(this).data("target");
    $("#" + targetId).toggleClass("hidden");
  });

  // Prevent clicks inside the box from closing it
  $(".box").click(function(e){
    e.stopPropagation();
  });

  // Click anywhere outside closes all
  $(document).click(function(){
    $(".box").addClass("hidden");
  });
});