// Menu-toggle button
let menu = document.querySelector(".menu-icon");
let navList = document.querySelector("nav ul");
let menuIcon = document.querySelector("#menu");
menu.onclick = function () {
  navList.classList.toggle("show");
  menuIcon.classList.toggle("rotate");
};

let navLinks = document.querySelectorAll(".menu a");
navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    navList.classList.toggle("show");
    menuIcon.classList.toggle("rotate");
  });
});


// scroll effect on menu
let nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.scrollY > 0)
  {
    nav.classList.add('blue');
  } else
  {
    nav.classList.remove('blue');
  }
});

// scroll from menu
let links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href');
    let target = document.querySelector(href);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});