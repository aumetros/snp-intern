const header = document.querySelector('.header');
const navBar = header.querySelector('.header__navbar');

function blurNavBar() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 450) {
    header.classList.add('header_scrolled');
    navBar.classList.add('header__navbar_scrolled');
  } else {
    header.classList.remove('header_scrolled');
    navBar.classList.remove('header__navbar_scrolled');
  }
}

window.addEventListener("scroll", blurNavBar);
