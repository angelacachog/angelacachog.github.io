$(function() {

  $("#do-something").on("click", function(event) {
    event.preventDefault();
    $("#chart").show(10);
  });

})