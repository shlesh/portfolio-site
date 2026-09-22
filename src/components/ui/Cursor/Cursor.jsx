import React, { useEffect, useRef } from 'react';
import { InnerCursor, OuterCursor } from './Cursor.styles';

const INTERACTIVE =
    'a, button, .icon, .logo, .portf-container, .scroll-section, .email, .menu-email, .icon-footer, .menu-button, input, textarea';

const Cursor = () => {
    const innerRef = useRef(null);
    const outerRef = useRef(null);

    useEffect(() => {
        const inner = innerRef.current;
        const outer = outerRef.current;
        if (!inner || !outer) return undefined;

        const mouse = { x: -100, y: -100 };
        const innerPos = { x: -100, y: -100 };
        const outerPos = { x: -100, y: -100 };
        let targetScale = 1;
        let scale = 1;
        let frame = 0;
        let running = true;

        const draw = () => {
            if (!running) return;

            innerPos.x += (mouse.x - innerPos.x) * 0.55;
            innerPos.y += (mouse.y - innerPos.y) * 0.55;
            outerPos.x += (mouse.x - outerPos.x) * 0.18;
            outerPos.y += (mouse.y - outerPos.y) * 0.18;
            scale += (targetScale - scale) * 0.22;

            inner.style.left = `${innerPos.x}px`;
            inner.style.top = `${innerPos.y}px`;
            inner.style.transform = `translate(-50%, -50%) scale(${scale})`;

            outer.style.left = `${outerPos.x}px`;
            outer.style.top = `${outerPos.y}px`;
            outer.style.transform = `translate(-50%, -50%) scale(${1 + (scale - 1) * 0.2})`;
            outer.style.opacity = scale > 1.2 ? '0.35' : '0.8';

            frame = requestAnimationFrame(draw);
        };

        const onMove = event => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
            document.body.classList.add('cursor-on');
        };

        const onOver = event => {
            if (event.target.closest(INTERACTIVE)) targetScale = 3.4;
        };

        const onOut = event => {
            const left = event.target.closest(INTERACTIVE);
            const still = event.relatedTarget && event.relatedTarget.closest(INTERACTIVE);
            if (left && !still) targetScale = 1;
        };

        document.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);
        frame = requestAnimationFrame(draw);

        return () => {
            running = false;
            cancelAnimationFrame(frame);
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
            document.body.classList.remove('cursor-on');
        };
    }, []);

    return (
        <>
            <InnerCursor ref={innerRef} className="inner-cursor" />
            <OuterCursor ref={outerRef} className="outer-cursor" />
        </>
    );
};

export default Cursor;
