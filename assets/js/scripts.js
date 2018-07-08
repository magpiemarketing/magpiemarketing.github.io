$(document).ready(function() {
  var header = $('.navbar-up');
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      header.removeClass('navbar-up').addClass('navbar-down');
    } else {
      header.removeClass('navbar-down').addClass('navbar-up');
    }
  });
  var url = $("#authvideo").attr('src');
  $("#modal-video").on('hide.bs.modal', function() {
    $("#authvideo").attr('src', '');
  });
  $("#modal-video").on('show.bs.modal', function() {
    $("#authvideo").attr('src', url);
  });
});


// scroll smoother
$('a.nav-link').click(function() {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top - 80
  }, 1000);
  return false;
});
