/* eslint-disable no-unused-expressions */
export const menuActions = () => {
    function toggleMenu() {
        document.querySelector('.menu')?.classList.toggle('active');
        document.querySelector('.menu-background')?.classList.toggle('active');
        document.querySelector('.menu-button')?.classList.toggle('active');
        document.querySelector('.header-container')?.classList.toggle('active');
        document.querySelector('.header')?.classList.toggle('active');
        document.querySelector('.bottom')?.classList.toggle('active');
        document.querySelector('.right')?.classList.toggle('active');
        document.querySelector('.left')?.classList.toggle('active');
        document.querySelector('.menu-container')?.classList.toggle('active');
        document.querySelector('.menu-footer')?.classList.toggle('active-menu');
        document.querySelector('.logo')?.classList.toggle('active');
        document.querySelector('.name-container')?.classList.toggle('active');
        document.querySelector('.portf-container')?.classList.toggle('active');
    }

    const clickMenu = function (selector) {
        const el = document.querySelector(selector);
        if (!el || el.dataset.menuBound === 'true') return;
        el.dataset.menuBound = 'true';
        el.addEventListener('click', () => {
            toggleMenu();
        });
    };

    clickMenu('.menu-button');
    clickMenu('.menu-home');
    clickMenu('.menu-portfolio');
    clickMenu('.menu-about');
    clickMenu('.menu-contact');
};

export const menuActionsFunc = menuActions;
