  $(document).ready(function() {
    $(".toggle-btn").click(function(e) {
      e.stopPropagation();
      let targetId = $(this).data("hidden"); // <-- use custom attribute

      $(".box").not("#" + targetId).addClass("hidden");
      $("#" + targetId).toggleClass("hidden");
    });

    $(".box").click(function(e) {
      e.stopPropagation();
    });

    $(document).click(function() {
      $(".box").addClass("hidden");
    });
  });
