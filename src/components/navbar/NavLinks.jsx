import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";

const activeLink = ({ isActive }) => (isActive ? "active" : "");



const NavLinks = ({hideMenu}) => {
    return (
        <nav className="navLinks" aria-label="Main Navigation">
            <ul  >
                <li onClick={hideMenu}>
                    <NavLink to="/" className="activeLink linkHover">
                    <span className="textBold text-preset-8">00</span> <span className="text-preset-8">HOME</span>
 
                    </NavLink>
                </li>
                <li onClick={hideMenu} className="activeLink linkHover">
                    <NavLink to="/destination" >
                    <span className="textBold text-preset-8">01</span> <span className="text-preset-8">DESTINATION</span>                
                    </NavLink>
                </li>
                <li onClick={hideMenu} className="activeLink linkHover">
                    <NavLink to="/crew" >
                    <span className="textBold text-preset-8">02</span> <span className="text-preset-8">CREW</span>                         
                    </NavLink>
                </li>
                <li onClick={hideMenu} className={activeLink}>
                    <NavLink to="/technology" >
                    <span className="textBold text-preset-8">03</span> <span className="text-preset-8">TECHNOLOGY</span>    
               
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavLinks