<script type="text/javascript">
    // Menu-toggle button

    $(document).ready(function () {
      $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
      });
    });

    // Scrolling Effect

    $(window).on("scroll", function () {
      if ($(window).scrollTop()) {
        $('nav').addClass('blue');
      } else {
        $('nav').removeClass('blue');
      }
    })

  </script>