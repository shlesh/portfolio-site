import React, { useEffect } from 'react';
import PortfolioSection from '../../ui/PortfolioHomeSection/PortfolioSection';
import ScrollHomeSection from '../../ui/PlaceholderHomeSection/PlaceholderHomeSection';
import AboutHomeSection from '../../ui/AboutHomeSection/AboutHomeSection';
import LandingHomeSection from '../../ui/LandingHomeSection/LandingHomeSection';
import { homeObserver } from '../../../utils/intersectionObserver';

const Home = () => {
    window.scrollTo(0, 0);

    useEffect(() => {
        homeObserver();
        document.title = 'Shailesh Tiwari | Web Developer';
    }, []);

    return (
        <main className="main">
            <LandingHomeSection />
            <AboutHomeSection />
            <ScrollHomeSection />
            {/* This is where i was supposed to keep links to blog but have none :) */}
            <PortfolioSection />
        </main>
    );
};

export default Home;
