$(document).ready(function () {
  $("#designing").click(function () {
    $("#design"). fadeToggle()
    $("#paragraph") .fadeToggle();
  });
  $("#developing").click(function () {
    $("#development"). fadeToggle()
    $("#paragraph1") .fadeToggle();
  });
  $("#producing").click(function () {
    $("#product"). fadeToggle()
    $("#paragraph2") .fadeToggle();
  });
  $("#Images") .animate({
    opacity: 1
  });
  $("#work1").hover(function () {
    $(this).stop().animate({
        opacity: .4
    }, 250);
    $("#carrey").slideToggle();

  }, function () {
    $(this) .stop().animate({
      opacity: .4
    },250);
    $("#carrey").fadeOut();
  });
}