/* eslint-disable no-unused-expressions */
export const cursorEffect = () => {
    let innerCursor = document.querySelector('.inner-cursor');
    if (!innerCursor) return;
    innerCursor.classList.remove('grow');

    const moveCursor = e => {
        innerCursor.style.left = `${e.clientX}px`;
        innerCursor.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    const groups = [
        document.querySelectorAll('.scroll-section'),
        document.querySelectorAll('.icon'),
        document.querySelectorAll('.logo'),
        document.querySelectorAll('.portf-container'),
        document.querySelectorAll('.nameSpan'),
        document.querySelectorAll('.icon-footer'),
        document.querySelectorAll('.email'),
        document.querySelectorAll('.menu-email'),
        document.querySelectorAll('a'),
        document.querySelectorAll('button'),
    ];

    const mouseHover = function (el) {
        el.forEach(item => {
            item.addEventListener('mouseover', () => {
                innerCursor?.classList.add('grow');
            });
            item.addEventListener('mouseleave', () => {
                innerCursor?.classList.remove('grow');
            });
        });
    };

    groups.forEach(mouseHover);
};
