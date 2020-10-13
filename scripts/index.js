const screenWidth = window.innerWidth;
const headerButton = document.getElementById('header-button');

if (screenWidth < 641) {
    headerButton.classList.remove('button--white');
    headerButton.classList.add('button--black');
} else {
    headerButton.classList.remove('button--black');
    headerButton.classList.add('button--white');
}

const menu = document.querySelector('.header__icon-hamburger');
menu.onclick = function() {
    const menu_src = menu.getAttribute('src');
    const menu_mobile = document.querySelector('.header__list-mob');

    if (menu_src === 'images/icon-hamburger.svg') {
        menu.setAttribute('src', 'images/icon-close.svg');
        menu_mobile.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    } else {
        menu.setAttribute('src', 'images/icon-hamburger.svg');
        menu_mobile.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};