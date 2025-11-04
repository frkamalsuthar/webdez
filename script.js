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

// Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '20px',
    duration: 2500,
    delay: 200,
    opacity: 0,
  })
  
  sr.reveal(`.heading,.design,.develop,.wordpress,.lower-box,.choose-head,.categ-two,.work-box img,.standard,.hire,label,input,select,textarea,.send,.footer,.abt,.resources,.company,.more`, {interval:120,})

  sr.reveal(`.home`, {origin: 'top'})
  sr.reveal(`.mission,.categ-one,.basic`, {origin: 'left'})
  sr.reveal(`.vision,.categ-three,.premium`, {origin: 'right'})
