const menu = document.querySelector('.header__menu-hamburger');
menu.onclick = function() {
    const menu_src = menu.getAttribute('src');

    if (menu_src === 'images/icon-hamburger.svg') {
        menu.setAttribute('src', 'images/icon-close.svg');
    } else {
        menu.setAttribute('src', 'images/icon-hamburger.svg');
    }
};