import React, { useEffect } from 'react';
import { menuActionsFunc } from '../../../utils/actions';
import twitterIcon from '../../../images/icons/twitter.svg';
import linkedinIcon from '../../../images/icons/linkedin.svg';
import githubIcon from '../../../images/icons/github.svg';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MainContainer, MenuBackGround, MenuButton, MenuContainer, MenuStyles } from './Menu.styles';

const Menu = () => {
    const { footer } = useSelector(state => state.data.pageContent.menu);
    useEffect(() => {
        menuActionsFunc();
    }, []);

    return (
        <>
            <MainContainer className="main-container">
                <header className="header">
                    <div className="header-container">
                        <div className="logo">
                            <Link to="/" id="home-link">
                                S<span>HAILESH</span>T<span>IWARI</span>
                            </Link>
                        </div>
                    </div>
                </header>
                <div className="bottom">
                    <div className="menu-footer">
                        <p>{footer}</p>
                        <ul>
                            <li>
                                <NavLink activeClassName="link__active" exact to="/">
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="link__active" to="/about">
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="link__active" to="/portfolio">
                                    PORTFOLIO
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="link__active" to="/contact">
                                    CONTACT
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="social-container">
                        <div className="icon">
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/sha_tiw">
                                <img src={twitterIcon} alt="Twitter" />
                            </a>
                        </div>
                        <div className="icon">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/shailesh-t/"
                            >
                                <img src={linkedinIcon} alt="Linkedin" />
                            </a>
                        </div>
                        <div className="icon">
                            <a target="_blank" rel="noreferrer" href="https://github.com/shlesh">
                                <img src={githubIcon} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="left"></div>
                <MenuButton className="menu-button">
                    <div className="button"></div>
                    <p>MENU</p>
                </MenuButton>
            </MainContainer>
            {/* <!-- MENU
      =============================== --> */}
            <MenuStyles className="menu">
                <MenuBackGround className="menu-background"></MenuBackGround>
                <MenuContainer className="menu-container">
                    <div className="contact">
                        <div className="menu-items">
                            <li>
                                <NavLink activeClassName="link__active" exact to="/" className="menu-home">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink activeClassName="link__active" to="/about" className="menu-about">
                                    About Me
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="link__active"
                                    to="/portfolio"
                                    className="menu-portfolio"
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    activeClassName="link__active"
                                    to="/contact"
                                    className="menu-contact"
                                >
                                    Contact
                                </NavLink>
                            </li>
                        </div>
                    </div>
                </MenuContainer>
            </MenuStyles>
        </>
    );
};

export default Menu;
