import React, { useState } from 'react'
import "./PlanetNavBar.scss"

const PlanetNavBar = ({ onSelectPlanet, activePlanet}) => {
    const planets = ["Moon", "Mars", "Europa", "Titan"];
    

  

    return (
        <nav className="planetNavBar">
            <ul>
                {planets.map((planet) => (
                    <li key={planet}
                        className={activePlanet === planet ? "active" : ""}
                        onClick={() => onSelectPlanet(planet)}>
                        <span className="text-preset-8">{planet.toUpperCase()}</span>
                        <span className="underline"></span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PlanetNavBar