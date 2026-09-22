import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import ContactFooter from './components/ui/Footer/ContactFooter';
import GlobalActions from './components/GlobalActions';
import About from './components/pages/AboutScreen/AboutScreen';
import Home from './components/pages/HomeScreen/Home';
import Page404 from './components/pages/404Screen/Page404';
import { footerObserver } from './utils/intersectionObserver';
import PortfolioScreen from './components/pages/Portfolioscreen/PortfolioScreen';
import ContactScreen from './components/pages/ContactScreen/ContactScreen';
import { Main } from './App.styles';

const App = () => {
    const location = useLocation();

    useEffect(() => {
        footerObserver();
    }, []);

    return (
        <Main className="main" key={location.pathname}>
            <GlobalActions />
            <Routes>
                <Route path="/portfolio-site" element={<Navigate to="/" replace />} />
                <Route path="/portfolio-site/*" element={<Navigate to="/" replace />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<PortfolioScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/" element={<Home />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
            <ContactFooter />
        </Main>
    );
};

export default App;
