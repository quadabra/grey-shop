const hamburger = document.querySelector(`.hamburger`);
const menu = document.querySelector(`.main-nav`);
menu.classList.add(`menu-hidden`);

hamburger.addEventListener(`click`, function (evt) {
  evt.preventDefault();
  menu.classList.toggle(`menu-hidden`);
  hamburger.classList.toggle(`hamburger_active`);
});

const menuItems = document.querySelectorAll(`.main-nav__submenu`);
const menuContents = document.querySelectorAll(`.menu-contents`);

function menuHide(target) {
  target.querySelector(`.menu-contents`).style.height = `0`;
}

function menuOpen(target) {
  target.querySelector(`.menu-contents`).style.height = `300px`;
}

function menuAllClose(callback) {
  [].forEach.call(menuContents, (it) => {
    it.style.height = `0`;
  });
  callback();
}

[].forEach.call(menuItems, (it) => {
  it.addEventListener(`mouseenter`, function (evt) {
    menuAllClose(() => menuOpen(evt.target));
  });
  it.addEventListener(`mouseleave`, function (evt) {
    setTimeout(() => menuHide(evt.target), 300);
  });
});

const helpBtn = document.querySelectorAll(`.help-block__q-button`);
const helpWindow = document.querySelectorAll(`.help-block__answer`);
const btnBlock = document.querySelector(`.help-block__questions`);

[].forEach.call(helpWindow, (it) => it.classList.add(`help-block__answer_hidden`));
[].forEach.call(helpBtn, (it, i) => {
  it.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    helpWindow[i].classList.toggle(`help-block__answer_hidden`);
    btnBlock.classList.toggle(`help-block__questions_active`);
  });
});

const helpHide = document.querySelector(`.catalog-help__hide-btn`);
const helpBlock = document.querySelector(`.help-block`);

if (helpHide) {
  helpHide.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    helpBlock.classList.toggle(`help-block_hidden`);
    helpHide.classList.toggle(`catalog-help__hide-btn_closed`);
  });
}

let productShortInfo = document.querySelector(`.product-configuration__info-short`);
let productInfoTitles = productShortInfo.querySelectorAll(`.product-configuration__info-short-title`);
let productInfoText = productShortInfo.querySelectorAll(`.product-configuration__info-short-text`);

[].forEach.call(productInfoTitles, (it, i) => {
  it.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    productInfoText[i].classList.toggle(`product-configuration__info-short-text_visible`);

  });
});

const amount = document.querySelector(`.product-details__amount-input-control`);
const amountIncrease = amount.querySelector(`#plus`);
const amountDecrease = amount.querySelector(`#minus`);
const amountInput = amount.querySelector(`input`);
if (amount) {
  amount.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    if (evt.target === amountIncrease) {
      amountInput.value++;
    }
    if (evt.target === amountDecrease && amountInput.value > 1) {
      amountInput.value--;
    }
  });
}
