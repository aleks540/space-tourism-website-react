import React from 'react'
import NavLinks from './NavLinks';
import logoPath from "../../assets/shared/logo.svg";
import { Link } from 'react-router-dom';
import "./NavBar.scss"

const logo = (
    <div className="logo">
        <Link to="/">
            <img src={logoPath} alt="logo" />
        </Link>
    </div>
);

const NavBarDesktop = () => {
    const hideMenu = () => {};
    return (
        <nav className='navDesk'>
            {logo}
            <div class="horizontalLine"></div>
            <NavLinks hideMenu={hideMenu}/>
        </nav>
    )
}

export default NavBarDesktop