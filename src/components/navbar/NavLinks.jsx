import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./NavBar.scss";


const NavLinks = ({ hideMenu }) => {
    const [activeLink, setActiveLink] = useState("/");
    const links = [
        { id: "00", name: "HOME", path: "/" },
        { id: "01", name: "DESTINATION", path: "/destination" },
        { id: "02", name: "CREW", path: "/crew" },
        { id: "03", name: "TECHNOLOGY", path: "/technology" },
    ];
    return (
        <div className="navLinks">
            <ul>
                {links.map(({ id, name, path }) => (
                    <li
                        key={id}
                        className={activeLink === path ? "active" : ""}
                        onClick={() => {
                            setActiveLink(path);
                            hideMenu();
                        }}
                    >
                        <NavLink to={path}>
                            <span className="textBold text-preset-8">{id}</span>
                            <span className="text-preset-8">{name}</span>
                        </NavLink>
                        <span className="underline"></span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NavLinks