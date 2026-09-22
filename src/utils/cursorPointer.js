export const cursorEffect = () => {
    const inner = document.querySelector('.inner-cursor');
    const outer = document.querySelector('.outer-cursor');
    if (!inner) return () => {};

    if (inner.dataset.bound === 'true') return inner._cursorCleanup || (() => {});
    inner.dataset.bound = 'true';

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const trail = { x: pos.x, y: pos.y };
    let scale = 1;
    let frame = 0;

    const interactive =
        'a, button, .icon, .logo, .portf-container, .scroll-section, .email, .menu-email, .icon-footer, .menu-button, input, textarea';

    const draw = () => {
        inner.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${scale})`;
        trail.x += (pos.x - trail.x) * 0.16;
        trail.y += (pos.y - trail.y) * 0.16;
        if (outer) {
            const ring = 1 + (scale - 1) * 0.22;
            outer.style.transform = `translate3d(${trail.x}px, ${trail.y}px, 0) translate(-50%, -50%) scale(${ring})`;
            outer.style.opacity = scale > 1 ? '0.35' : '0.7';
        }
        frame = requestAnimationFrame(draw);
    };

    const onMove = event => {
        pos.x = event.clientX;
        pos.y = event.clientY;
    };

    const onOver = event => {
        if (event.target.closest(interactive)) scale = 3.6;
    };

    const onOut = event => {
        const leftInteractive = event.target.closest(interactive);
        const stillInside = event.relatedTarget && event.relatedTarget.closest(interactive);
        if (leftInteractive && !stillInside) scale = 1;
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    frame = requestAnimationFrame(draw);

    const cleanup = () => {
        cancelAnimationFrame(frame);
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseover', onOver);
        document.removeEventListener('mouseout', onOut);
        inner.dataset.bound = 'false';
    };

    inner._cursorCleanup = cleanup;
    return cleanup;
};
