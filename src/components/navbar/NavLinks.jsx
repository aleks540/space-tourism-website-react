import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";

const NavLinks = ({hideMenu}) => {
    return (
        <nav className="navLinks" aria-label="Main Navigation">
            <ul  >
                <li onClick={hideMenu}>
                    <NavLink to="/" >
                    <span className="textBold text-preset-8">00</span> <span className="text-preset-8">HOME</span>
 
                    </NavLink>
                </li>
                <li onClick={hideMenu}>
                    <NavLink to="/destination" >
                    <span className="textBold text-preset-8">01</span> <span className="text-preset-8">DESTINATION</span>                
                    </NavLink>
                </li>
                <li onClick={hideMenu}>
                    <NavLink to="/crew" >
                    <span className="textBold text-preset-8">02</span> <span className="text-preset-8">CREW</span>                         
                    </NavLink>
                </li>
                <li onClick={hideMenu}>
                    <NavLink to="/technology" >
                    <span className="textBold text-preset-8">03</span> <span className="text-preset-8">TECHNOLOGY</span>    
               
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks