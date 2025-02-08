import React from 'react';
import "./Header.module.scss";

import NavBarDesktop from '../components/navbar/NavBarDesktop';
import NavBarMobile from '../components/navbar/NavBarMobile';


const Header = () => {

    return (
        <header >            
            <NavBarDesktop />
            <NavBarMobile/>
        </header>
    )
}

export default Header