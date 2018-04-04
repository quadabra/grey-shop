const sandwich = document.querySelector(`.sandwich`);
const menu = document.querySelector(`.main-nav`);
menu.classList.add(`menu-hidden`);

sandwich.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  menu.classList.toggle(`menu-hidden`);
});

const camoBtn = document.querySelector(`.main-nav__link_camo`);
const camoContent = document.querySelector(`.menu-contents__section_camo`);

camoBtn.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  camoContent.classList.toggle(`section-show`);
  menu.classList.toggle(`menu-hidden`);
});
