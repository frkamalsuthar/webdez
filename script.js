const menuIcon = document.getElementById('menu-icon');
const menuImg = document.getElementById('menu-img');
const navLinks = document.getElementById('nav-links');

// Paths to your images
const menuIconSrc = 'images/menu.svg';
const closeIconSrc = 'images/close.svg';

menuIcon.addEventListener('click', () => {
  navLinks.classList.toggle('open');

  // Toggle the icon image
  if (navLinks.classList.contains('open')) {
    menuImg.src = closeIconSrc;
    menuImg.alt = "close";
  } else {
    menuImg.src = menuIconSrc;
    menuImg.alt = "menu";
  }
});

// Close menu when link is clicked
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuImg.src = menuIconSrc;
    menuImg.alt = "menu";
  });
});

var swiper = new Swiper(".mySwiper", {
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
    });