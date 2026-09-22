const query = window.matchMedia('(max-width: 768px)');

export const homeObserver = () => {
    const main = document.querySelector('.main');
    const mainContainer = document.querySelector('.main-container');
    const sectionOne = document.querySelector('.sect-1');
    if (!main || !mainContainer || !sectionOne) return;

    const sectionOneObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                main.classList.add('active');
                mainContainer.classList.add('active');
            } else {
                main.classList.remove('active');
                mainContainer.classList.remove('active');
            }
        });
    }, { threshold: 0.9 });
    sectionOneObserver.observe(sectionOne);

    const menuButton = document.querySelector('.menu-button');
    const scrollSection = document.querySelector('.scroll-section');
    if (!menuButton || !scrollSection) return;

    const menuObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                !query.matches && menuButton.classList.add('light-active');
            } else {
                !query.matches && menuButton.classList.remove('light-active');
            }
        });
    }, { threshold: 1 });
    menuObserver.observe(scrollSection);
};

export const footerObserver = () => {
    const footerMenu = document.querySelector('.menu-footer');
    const contactSection = document.querySelector('.sect-4');
    if (!footerMenu || !contactSection) return;

    const contactObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footerMenu.classList.add('active');
                footerMenu.classList.remove('active-menu');
            } else {
                footerMenu.classList.remove('active');
                footerMenu.classList.add('active-menu');
            }
        });
    }, { threshold: 0 });
    contactObserver.observe(contactSection);
};

export const topObserver = () => {
    const main = document.querySelector('.main');
    const mainContainer = document.querySelector('.main-container');
    const sectionOne = document.querySelector('#top');
    if (!main || !mainContainer || !sectionOne) return;

    const sectionOneObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                !query.matches && main.classList.add('active');
                mainContainer.classList.add('active');
            } else {
                !query.matches && main.classList.remove('active');
                mainContainer.classList.remove('active');
            }
        });
    }, { threshold: 0.9 });
    sectionOneObserver.observe(sectionOne);
};
