import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import "./PlanetNavBar.scss"

const PlanetNavBar = () => {
    const [activePlanet, setActivePlanet] = useState("MOON");
    const planets = ["MOON", "MARS", "EUROPA", "TITAN"];

    return ( 

        <nav className="planetNavBar">
            <ul>
                {planets.map((planet) => (
                    <li
                        key={planet}
                        className={activePlanet === planet ? "activePlanetNav" : ""}
                        onClick={() => setActivePlanet(planet)}
                    >
                        <span className="text-preset-8">{planet}</span>
                        <span className="underline"></span> 
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default PlanetNavBar