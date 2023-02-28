const header = document.querySelector(".header");
const navBar = header.querySelector(".header__navbar");
const logo = header.querySelector(".header__logo");
const menuItemList = header.querySelectorAll(".header__menu-item");
const phoneNumber = header.querySelector(".header__phone-number");

function blurNavBar() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 450) {
    header.classList.add("header_scrolled");
    navBar.classList.add("header__navbar_scrolled");
    logo.classList.add("header__logo_scrolled");
    phoneNumber.classList.add("header__phone-number_scrolled");
    menuItemList.forEach((item) => {
      item.classList.add("header__menu-item_scrolled");
    });
  } else {
    header.classList.remove("header_scrolled");
    navBar.classList.remove("header__navbar_scrolled");
    logo.classList.remove("header__logo_scrolled");
    phoneNumber.classList.remove("header__phone-number_scrolled");
    menuItemList.forEach((item) => {
      item.classList.remove("header__menu-item_scrolled");
    });
  }
}

window.addEventListener("scroll", blurNavBar);
