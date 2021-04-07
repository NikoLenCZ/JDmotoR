"use strict";

// Menu-toggle button
$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("nav ul").toggleClass("showing"), $("#menu").toggleClass("rotate");
  });
});
$(".menu a").on("click", function () {
  $("nav ul").toggleClass("showing"), $("#menu").toggleClass("rotate");
}); // hustej efekt rotate menu
//   $( ".menu-icon" ).click(function() {
//     $( this ).toggleClass( "rotate");
// });
//   $( ".menu-icon" ).on("click", function() {
//     $( this ).toggleClass( "rotate");
// });
// $( ".menu-icon" ).on("click", function() {
//   $( "i" ).toggleClass( "rotate");
// });
// Scrolling Effect

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $('nav').addClass('blue');
  } else {
    $('nav').removeClass('blue');
  }
});
/*
* LIGHTBOX
*/
// vytvorime overlay

var gallery = $('.gallery'),
    // najdeme galerii
overlay = $('<div/>', {
  id: 'overlay'
}); // prazdny div id="overlay"
// prilepime ho na spodek stranky, skryjeme

overlay.appendTo('body').hide(); // na galerii pripneme plosticu, event listener
// ktory bude nacuvat, ci sme neklikli na na a element spadajuci do gallery
// listener nepripneme na jednotlive obrazky, pretoze budeme dalsie obrazky nacitavat cez ajax
// a teda potrebujeme aby lightbox fungoval na vsetky a spadajuce do gallery, aj novo vzniknute

gallery.on('click', 'a', function (event) {
  var href = $(this).attr('href'); // ziskame adresu velkeho obrazka

  var alt = $(this).attr('alt'); // ziskame alt obrazku

  image = $('<img>', {
    src: href,
    alt: alt
  }); // vytvorime img z velkej adresy
  // pripneme obrazok na overlay a nechame zobrazit

  overlay.html(image).show();
  event.preventDefault();
}); // skryjeme overlay

overlay.on('click', function () {
  overlay.hide();
}); // aby sa dal zavriet escapom

$(document).on('keyup', function (event) {
  if (event.which === 27) overlay.hide();
});
var KEYCODE_ESC = 27;
var KEYCODE_LEFTARROW = 37;
var KEYCODE_RIGHTARROW = 39;