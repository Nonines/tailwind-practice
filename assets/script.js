const displayController = (() => {
  const navMenuToggler = document.getElementById("nav-toggler");
  const navMenu = document.getElementById("nav-items");

  navMenuToggler.addEventListener("click", () => {
    if (navMenu.style.maxHeight) {
      navMenu.style.maxHeight = null;
      // delay then toggle display none
      setTimeout(() => {
        navMenu.classList.toggle("hidden");
      }, 400);
    } else {
      navMenu.classList.toggle("hidden");
      navMenu.style.maxHeight = navMenu.scrollHeight + "px";
    }
  });
})();
