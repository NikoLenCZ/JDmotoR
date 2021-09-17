    // Menu-toggle button
    $(document).ready(function () {
      $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing"),
        $( "#menu").toggleClass( "rotate");
      });
    });
    $(".menu a").on("click", function () {
      $("nav ul").toggleClass("showing"),
        $( "#menu").toggleClass( "rotate");
    });
    // Scrolling Effect
    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $('nav').addClass('blue');
      } else {
        $('nav').removeClass('blue');
      }
    });

    // $(document).ready(function(){
    //   $('ul li a').click(function(){
    //     $('li a').removeClass("active");
    //     $(this).addClass("active");
    // });
    // });

    //scroll - CSS trics
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });