window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navigation").style.paddingTop = "15px";
    document.getElementById("navigation").style.paddingBottom = "15px";
  } else {
    document.getElementById("navigation").style.paddingTop = "25px";
    document.getElementById("navigation").style.paddingBottom = "25px";
  }
}
