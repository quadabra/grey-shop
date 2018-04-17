const hamburger = document.querySelector(`.hamburger`);
const menu = document.querySelector(`.main-nav`);
menu.classList.add(`menu-hidden`);

hamburger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  menu.classList.toggle(`menu-hidden`);
  hamburger.classList.toggle(`hamburger_active`);
});

const camoBtn = document.querySelector(`.main-nav__link_camo`);
const camoContent = document.querySelector(`.menu-contents__section_camo`);

camoBtn.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  camoContent.classList.toggle(`section-show`);
  menu.classList.toggle(`menu-hidden`);
});

const helpBtn = document.querySelectorAll(`.help-block__q-button`);
const helpWindow = document.querySelectorAll(`.help-block__answer`);

[].forEach.call(helpWindow, (it) => it.classList.add(`help-block__answer_hidden`));
[].forEach.call(helpBtn, (it, i) => {
  it.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    helpWindow[i].classList.toggle(`help-block__answer_hidden`);
  });
});

const helpHide = document.querySelector(`.help-block__hide-btn`);
const helpBlock = document.querySelector(`.help-block`);

helpHide.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  helpBlock.classList.toggle(`help-block_hidden`);
  helpHide.classList.toggle(`help-block__hide-btn_closed`);
});
