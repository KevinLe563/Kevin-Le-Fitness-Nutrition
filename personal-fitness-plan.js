$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($("#barbell-shoulder-press").is(":checked")) {
      $("#v-barbell-shoulder-press").css("visibility", "visible");
    } else {
      $("#v-barbell-shoulder-press").css("visibility", "hidden");
    }
  });
});

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($("#bench-press").is(":checked")) {
      $("#v-bench-press").css("visibility", "visible");
    } else {
      $("#v-bench-press").css("visibility", "hidden");
    }
  });
});

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($("#rows").is(":checked")) {
      $("#v-rows").css("visibility", "visible");
    } else {
      $("#v-rows").css("visibility", "hidden");
    }
  });
});

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($("#deadlift").is(":checked")) {
      $("#v-deadlift").css("visibility", "visible");
    } else {
      $("#v-deadlift").css("visibility", "hidden");
    }
  });
});

$(document).ready(function () {
  $('input[type="checkbox"]').click(function () {
    if ($("#barbell-curl").is(":checked")) {
      $("#v-barbell-curl").css("visibility", "visible");
    } else {
      $("#v-barbell-curl").css("visibility", "hidden");
    }
  });
});
