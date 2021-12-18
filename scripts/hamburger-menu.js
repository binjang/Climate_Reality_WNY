
$("#hamburger_button").click(function() {
  if ($("#hamburger_element").hasClass("active")) {
    $("#hamburger_element").removeClass("active");
    $("#hamburger_element").addClass("hidden");
    $("#content").removeClass("hidden");
  } else {
    $("#hamburger_element").addClass("active");
    $("#hamburger_element").removeClass("hidden");
    $("#content").addClass("hidden");
  }
});
