$(document).ready(function () {

  //burger

  $('.menu-mobile').on('click', function () {
    $('.menu').addClass('d-block');
    $('.close-menu').addClass('d-block');
  });

  $('.close-menu').on('click', function () {
    $('.menu').removeClass('d-block');
    $('.close-menu').removeClass('d-block');
  });

});

