import outsideClick from "./outside-click.js";

export default function initMenuMobile(params) {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  function openMenu(event) {
    menuButton.classList.add("active");
    menuList.classList.add("active");
    outsideClick(menuList, eventos, () => {
      menuButton.classList.remove("active");
      menuList.classList.remove("active");
    });
  }

  if (menuButton) {
    //verificação para ver se o menuButton existe, para não travar o js

    eventos.forEach((e) => {
      // menuButton.addEventListener('click', openMenu). add pra cada evento
      menuButton.addEventListener(e, openMenu);
    });
  }
}
