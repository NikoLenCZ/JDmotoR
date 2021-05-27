"use strict";

// Menu-toggle button
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing"), $("#menu").toggleClass("rotate");
  });
});
$(".menu a").on("click", function () {
  $("nav ul").toggleClass("showing"), $("#menu").toggleClass("rotate");
}); // Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('blue');
  } else {
    $('nav').removeClass('blue');
  }
});