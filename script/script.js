// Generated by CoffeeScript 1.3.3
(function(){
  $(document).ready(function(){
      $('nav a[href^="#"]').on('click', function(event) {
        $('.navbar-toggle').click();
        var target = $($(this).attr('href'));
        if( target.length ) {
          event.preventDefault();
          $('html, body').animate({
              scrollTop: target.offset().top
          }, 1000);
        }
      });
  });
}).call(this);
