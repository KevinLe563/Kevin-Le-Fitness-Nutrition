$(document).on("click", ".exercise", function () {
  if (this.checked) {
    $(this).next().next().css("visibility", "visible");
  } else {
    $(this).next().next().css("visibility", "hidden");
  }
});
