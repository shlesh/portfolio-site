import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Section2 } from './AboutHomeSection.styles';

const AboutHomeSection = () => {
    const { pageContent } = useSelector(state => state.data);

    return (
        <>
            {/* <!-- SECCION 2 (ABOUT ME)
      =============================== --> */}
            <Section2 className="sect-2" id="about">
                <div className="container">
                    <h2>{pageContent.homeAbout.titl}</h2>
                    <h2>{pageContent.homeAbout.desc}</h2>
                    <div className="bt">
                        <Link to="/about" className="btn">
                            {pageContent.homeAbout.btn}
                            <img
                                src="https://icongr.am/entypo/chevron-small-right.svg?size=128&color=ffffff"
                                alt="arrow"
                            />
                        </Link>
                    </div>
                </div>
            </Section2>
        </>
    );
};

export default AboutHomeSection;
