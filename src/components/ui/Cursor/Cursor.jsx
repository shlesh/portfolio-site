import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { InnerCursor } from './Cursor.styles';

const INTERACTIVE =
    'a, button, .scroll-section, .icon, .logo, .portf-container, .nameSpan, .icon-footer, .email, .menu-email, .menu-button';

const Cursor = () => {
    const dotRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const dot = dotRef.current;
        if (!dot) return undefined;

        const move = event => {
            dot.style.left = `${event.clientX}px`;
            dot.style.top = `${event.clientY}px`;
        };

        const onOver = event => {
            if (event.target.closest(INTERACTIVE)) dot.classList.add('grow');
        };

        const onOut = event => {
            const left = event.target.closest(INTERACTIVE);
            const still = event.relatedTarget && event.relatedTarget.closest(INTERACTIVE);
            if (left && !still) dot.classList.remove('grow');
        };

        document.addEventListener('mousemove', move, { passive: true });
        document.addEventListener('mouseover', onOver);
        document.addEventListener('mouseout', onOut);

        return () => {
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseout', onOut);
            dot.classList.remove('grow');
        };
    }, [pathname]);

    return <InnerCursor ref={dotRef} className="inner-cursor" />;
};

export default Cursor;
