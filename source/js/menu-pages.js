var navMain = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');
var ulMenu = document.querySelector('.main-navigation__list-none');
var divPage = document.querySelector('.page-header__container');
var divWra = document.querySelector('.page-main__wrapper');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('toggle-open')) {
    navMain.classList.remove('toggle-open');
    navMain.classList.add('toggle-close');
    ulMenu.classList.remove('main-navigation__list-none');
    divPage.classList.add('page-header__container-color');
    divWra.classList.add('page-main__wrapper--height');

    } else {
      navMain.classList.add('toggle-open');
      navMain.classList.remove('toggle-close');
      ulMenu.classList.add('main-navigation__list-none');
      divPage.classList.remove('page-header__container-color');
      divWra.classList.remove('page-main__wrapper--height');
    }
});
