document.addEventListener("DOMContentLoaded", () => {
  let menuIsOpen = 0;
  const menu = document.querySelector("#nav-mobile");
  const menuBtn = document.querySelector("#menu-btn");
  const openMenu = () => {
    menu.classList.add("flex", "flex-columns");
    menu.classList.remove("dn");
    menuBtn.classList.add("fas");
    menuBtn.classList.replace("fa-bars", "fa-times");
    menuIsOpen = 1;
  }
  const closeMenu = () => {
    menu.classList.add("dn");
    menu.classList.remove("flex", "flex-columns");
    menuBtn.classList.replace("fa-times", "fa-bars");
    menuIsOpen = 0;
  }
  const isMobile = () => {
    if (window.innerWidth < 960) {
      menuBtn.classList.add("fas");
    } else {
      menuBtn.classList.remove("fas");
      closeMenu();
    }
  }
  menuBtn.addEventListener("click", (event) => {
    event.preventDefault();
    menuIsOpen === 0 ? openMenu() : closeMenu()
  });
  window.onload = isMobile();
  window.addEventListener("resize", isMobile);
});