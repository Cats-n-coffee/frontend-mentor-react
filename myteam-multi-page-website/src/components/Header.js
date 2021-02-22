import React, { useState } from 'react'
import logo from '../images/logo.svg'
import mobileMenu from '../images/icon-hamburger.svg'
import closeMenu from '../images/icon-close.svg'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMobileMenu = () => {
        setIsMenuOpen(true)
    }

    const closeMobileMenu = () => {
        const navBar = document.getElementsByClassName('navbar')[0];
        const blur = document.getElementsByClassName('mobile-nav-blur')[0];
        const container = document.getElementsByTagName('html')[0];
        container.classList.toggle('stop-scroll');
        blur.classList.toggle('show');
        navBar.classList.toggle('show');
    }

    
    return (
        <header>
            <div className="header-wrapper">
                <img className="logo" src={logo} alt="my team logo" width="160" height="40"/>
                <img onClick={closeMobileMenu} className="mobile-menu" src={mobileMenu} alt="mobile menu" data-action="mobile-menu"/>
                <div className="mobile-nav-blur"></div>
                <nav className="navbar">
                    <img onClick={closeMobileMenu} className="close-menu" src={closeMenu} alt="close mobile menu"/>
                    <ul>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#" className="btn btn-primary-light">contact us</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;