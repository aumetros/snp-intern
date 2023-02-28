const navBar = document.querySelector(".header__navbar");

function blurNavBar() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 50) {
    navBar.classList.add("header__navbar_scrolled");
  } else {
    navBar.classList.remove("header__navbar_scrolled");
  }
}

window.addEventListener("scroll", blurNavBar);
