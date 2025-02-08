import React, { useState } from 'react'
import NavLinks from './NavLinks';
import logoPath from "../../assets/shared/logo.svg";
import { Link } from 'react-router-dom';
import "./NavBar.scss"
import IconHamburger from "../../assets/shared/icon-hamburger.svg";
import IconClose from "../../assets/shared/icon-close.svg";

const logo = (
    <div className="logo">
        <Link to="/">
            <img src={logoPath} alt="logo" />
        </Link>
    </div>
);



const NavBarMobile = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const hideMenu = () => {
        setShowMenu(false);

    }
   
    const hamburgerIcon = <img src={IconHamburger} alt="HamburgerIcon" className='hamburgerIcon' onClick={toggleMenu} />
    const closeIcon = <img src={IconClose} alt="CloseIcon" className='closeIcon' onClick={hideMenu} />

    return (
        <div className='navMob'>
            <div className='navMobTop'>
                {logo}
                {!showMenu && hamburgerIcon}
            </div>

            <div className={showMenu ? "nav show-nav" : "nav hide-nav"}>
                {closeIcon}
                <NavLinks hideMenu={hideMenu} className="" />
            </div>


            <div className={showMenu ? "nav-wrapper" : "show-nav-wrapper"} onClick={hideMenu}></div>
        </div>
    )
}

export default NavBarMobile