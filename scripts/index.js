const screenWidth = window.innerWidth;
const menu = document.querySelector('.header__icon-hamburger');

const changeMenuIcon = () => {
    const menu_src = menu.getAttribute('src');
    const menu_mobile = document.querySelector('.header__list');
    
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

menu.addEventListener('click', changeMenuIcon);