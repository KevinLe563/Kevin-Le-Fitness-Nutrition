// shows the monday tab when the page is loaded
var slideIndex = 1;
window.onload = function () {
  document.getElementById("defaultOpen").click();
  document.getElementById("defaultOpen1").click();
  showSlides(slideIndex);
};

function openSplit(event, dayOfWeek) {
  // shows and hides each tab depending on which one is clicked
  var tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(dayOfWeek).style.display = "block";
  event.currentTarget.className += " active";
}

function openSplit2(event, dayOfWeek) {
  // shows and hides each tab depending on which one is clicked
  var tabcontent1, tablinks1;

  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (var i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }

  tablinks1 = document.getElementsByClassName("tablinks1");
  for (var i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active1", "");
  }

  document.getElementById(dayOfWeek).style.display = "block";
  event.currentTarget.className += " active1";
}

$(document).ready(function () {
  // scrolls to the workout calender
  $("#redirect").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".mySplit").offset().top,
      },
      "slow"
    );
  });
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " activeSlide";
}
