import React, { useEffect } from 'react';
import { menuActionsFunc } from '../../../utils/actions.js';
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
                                <NavLink end className={({ isActive }) => (isActive ? 'link__active' : undefined)} to="/">
                                    HOME
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'link__active' : undefined)} to="/about">
                                    ABOUT
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'link__active' : undefined)} to="/portfolio">
                                    PORTFOLIO
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className={({ isActive }) => (isActive ? 'link__active' : undefined)} to="/contact">
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
            <MenuStyles className="menu">
                <MenuBackGround className="menu-background"></MenuBackGround>
                <MenuContainer className="menu-container">
                    <div className="contact">
                        <div className="menu-items">
                            <li>
                                <NavLink
                                    end
                                    to="/"
                                    className={({ isActive }) => `menu-home${isActive ? ' link__active' : ''}`}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `menu-about${isActive ? ' link__active' : ''}`}
                                >
                                    About Me
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/portfolio"
                                    className={({ isActive }) => `menu-portfolio${isActive ? ' link__active' : ''}`}
                                >
                                    Portfolio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => `menu-contact${isActive ? ' link__active' : ''}`}
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
