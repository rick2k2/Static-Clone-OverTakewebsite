$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
        $('#toTopBtn').style.display="block";
      } else {
        $('#toTopBtn').fadeOut();
        $('#toTopBtn').style.display="none";
      }
    });
  
    $('#toTopBtn').click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
      return false;
    });
  });