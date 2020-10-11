const menu = document.querySelector('.header__icon-hamburger');
menu.onclick = function() {
    const menu_src = menu.getAttribute('src');
    const menu_mobile = document.querySelector('.header__list-mob');

    if (menu_src === 'images/icon-hamburger.svg') {
        menu.setAttribute('src', 'images/icon-close.svg');
        menu_mobile.style.display = 'flex';
    } else {
        menu.setAttribute('src', 'images/icon-hamburger.svg');
        menu_mobile.style.display = 'none';
    }
};