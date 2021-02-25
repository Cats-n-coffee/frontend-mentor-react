import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'
import mobileMenu from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        const navBar = document.getElementsByClassName('navbar')[0];
        const blur = document.getElementsByClassName('mobile-nav-blur')[0];
        const container = document.getElementsByTagName('html')[0];
        container.classList.toggle('stop-scroll');
        blur.classList.toggle('show');
        navBar.classList.toggle('show');

        setIsMenuOpen(!isMenuOpen);
    }

    
    return (
        <header>
            <div className="header-wrapper">
                <img className="logo" src={logo} alt="my team logo" width="160" height="40"/>
                <img onClick={toggleMobileMenu} className="mobile-menu" src={mobileMenu} alt="mobile menu" data-action="mobile-menu"/>
                <div className="mobile-nav-blur"></div>
                <nav className="navbar">
                    <img onClick={toggleMobileMenu} className="close-menu" src={closeMenu} alt="close mobile menu"/>
                    <ul>
                        <li><Link to="/" onClick={ () => { isMenuOpen ? toggleMobileMenu : null } }>home</Link></li>
                        <li><Link to="/about" onClick={ () => { isMenuOpen ? toggleMobileMenu : null } }>about</Link></li>
                        <li><Link to="/contact" className="btn btn-primary-light" onClick={ () => { isMenuOpen ? toggleMobileMenu : null } }>contact us</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;