import React, { useEffect } from 'react';
import { topObserver } from '../../../utils/intersectionObserver';
import { NotFound } from './404Screen.styles';
// import Cursor from '../components/Cursor';
// import Menu from '../components/Menu';
// import ScrollToTop from '../components/ScrollToTop';

const Page404 = () => {
    window.scrollTo(0, 0);
    useEffect(() => {
        topObserver();
    }, []);

    return (
        <NotFound>
            <h1 id="top">Hmmm, now where might the page be🤔</h1>
        </NotFound>
    );
};

export default Page404;
