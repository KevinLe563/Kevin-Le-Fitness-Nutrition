function openSplit(event, dayOfWeek) {
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

document.getElementById("defaultOpen").click();
