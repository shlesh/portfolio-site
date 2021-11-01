export const cursorEffect = () => {
    /*  CURSOR POINTER
      =============================== */
    let innerCursor = document.querySelector('.inner-cursor');
    innerCursor?.classList.remove('grow');

    document.addEventListener('mousemove', moveCursor);

    function moveCursor(e) {
        let x = e.clientX;
        let y = e.clientY;

        innerCursor.style.left = `${x}px`;
        innerCursor.style.top = `${y}px`;
    }

    const elem = document?.querySelectorAll('.blog-section');
    const elem2 = document?.querySelectorAll('.icon');
    const elem3 = document?.querySelectorAll('.logo');
    const elem4 = document?.querySelectorAll('.portf-container');
    const elem5 = document?.querySelectorAll('.nameSpan');
    const elem6 = document?.querySelectorAll('.icon-footer');
    const elem7 = document?.querySelectorAll('.email');
    const elem8 = document?.querySelectorAll('.menu-email');

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

    mouseHover(elem);
    mouseHover(elem2);
    mouseHover(elem3);
    mouseHover(elem4);
    mouseHover(elem5);
    mouseHover(elem6);
    mouseHover(elem7);
    mouseHover(elem8);
};
