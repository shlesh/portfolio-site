import React, { useEffect, useState } from 'react';
import Menu from './ui/Menu/Menu';
import ScrollToTop from './ui/ScrollToTop/ScrollToTop';
import Cursor from './ui/Cursor/Cursor';
import CosmicBackdrop from './ui/CosmicBackdrop/CosmicBackdrop';

const GlobalActions = () => {
    const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 768px)').matches);

    useEffect(() => {
        const media = window.matchMedia('(max-width: 768px)');
        const onChange = event => setIsMobile(event.matches);
        media.addEventListener('change', onChange);
        return () => media.removeEventListener('change', onChange);
    }, []);

    return (
        <>
            <CosmicBackdrop />
            <Menu />
            {!isMobile && <Cursor />}
            <ScrollToTop />
        </>
    );
};

export default GlobalActions;
