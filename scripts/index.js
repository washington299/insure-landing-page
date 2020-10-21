const screenWidth = window.innerWidth;
const menu = document.querySelector('.header__icon-hamburger');

const changeMenuIcon = () => {
    const menu_src = menu.getAttribute('src');
    const menu_mobile = document.querySelector('.header__list');
    const bg_pattern_nav_mob = document.querySelector('.header__bg-pattern-nav-mob');
    
    if (menu_src === 'images/icon-hamburger.svg') {
        menu.setAttribute('src', 'images/icon-close.svg');
        menu_mobile.style.display = 'flex';
        bg_pattern_nav_mob.style.display = 'block';
        document.body.style.overflow = 'hidden';
    } else {
        menu.setAttribute('src', 'images/icon-hamburger.svg');
        menu_mobile.style.display = 'none';
        bg_pattern_nav_mob.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

menu.addEventListener('click', changeMenuIcon);