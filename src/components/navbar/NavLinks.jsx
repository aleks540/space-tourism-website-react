import React from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";

const activeLink = ({ isActive }) => (isActive ? "active" : "");



const NavLinks = ({hideMenu}) => {
    return (
        <div className="navLinks" >
            <ul  >
                <li onClick={hideMenu}  className={activeLink}>
                    <NavLink to="/" >
                    <span className="textBold text-preset-8">00</span> <span className="text-preset-8">HOME</span>
 
                    </NavLink>
                </li>
                <li onClick={hideMenu} className={activeLink}>
                    <NavLink to="/destination" >
                    <span className="textBold text-preset-8">01</span> <span className="text-preset-8">DESTINATION</span>                
                    </NavLink>
                </li>
                <li onClick={hideMenu} className={activeLink}>
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
        </div>
    )
}

export default NavLinks