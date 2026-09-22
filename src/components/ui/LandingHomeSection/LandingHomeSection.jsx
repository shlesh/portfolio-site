import React from 'react';
import proximoIcon from '../../../images/proximo.svg';
import { useSelector } from 'react-redux';
import { Section1 } from './LandingHomeSection.styles';
import { Link } from 'react-router-dom';
import CosmicMark from '../CosmicMark/CosmicMark';

const LandingHomeSection = () => {
    const { pageContent } = useSelector(state => state.data);

    return (
        <>
            <Section1 className="sect-1">
                <div className="picture">
                    <CosmicMark />
                </div>

                <div className="name-container">
                    <h1 className="name">Shailesh Tiwari</h1>
                    <h2 className="prof">Web Developer</h2>
                </div>
                <div className="portf-container">
                    <Link to="/portfolio">
                        <p className="name">
                            <i>
                                <img src={proximoIcon} alt="arrow" />
                            </i>{' '}
                            {pageContent.pl.toUpperCase()}
                        </p>
                    </Link>
                </div>
            </Section1>
        </>
    );
};

export default LandingHomeSection;
