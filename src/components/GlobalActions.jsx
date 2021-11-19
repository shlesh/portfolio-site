import React from 'react';
import Menu from './ui/Menu/Menu';
import ScrollToTop from './ui/ScrollToTop/ScrollToTop';
import Cursor from './ui/Cursor/Cursor';

const GlobalActions = () => {
    const query = window.matchMedia('(max-width: 768px)');

    return (
        <>
            <Menu />
            {!query.matches && <Cursor />}
            <ScrollToTop />
        </>
    );
};

export default GlobalActions;
