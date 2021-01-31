$(function() {
  console.log( "ready!" );

  $('.top-menu--button').click(function(){
    if ($(window).width() < 1145) {
      if ($('.main-header').hasClass('active')) {
        $('.main-header').removeClass('active');
        $('.main-wrapper ').removeClass('active');
      } else {
        $('.main-header').addClass('active');
        $('.main-wrapper ').addClass('active');
      }
    }
  });

  $('.pusher').click(function(){
    console.log('clikc');
    if ($('.main-wrapper').hasClass('active')) {
      $('.main-header').removeClass('active');
      $('.main-wrapper').removeClass('active');
    }
  });
});