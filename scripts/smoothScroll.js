define(['jquery'], function(){
  var element = $('[data-scroll="smooth"]');
  var margin = 52;
  var offsetTop = $('nav.navbar').height() + margin;
  var easingTime = 1500;

  if($(element).length){
    $(element).on('click', function(e){
      var targetEl = $(this).data('target');

      $('html, body').stop().animate({
        scrollTop: $(targetEl).offset().top - offsetTop
      }, easingTime);

      e.preventDefault();
    });
  }
})