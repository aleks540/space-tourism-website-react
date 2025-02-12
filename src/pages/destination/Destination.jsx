import React, { useEffect, useState } from 'react';
import "./Destination.scss";

//images
import Moon from "../../assets/destination/image-moon.png";
import Mars from "../../assets/destination/image-mars.png";
import Europa from "../../assets/destination/image-europa.png";
import Titan from "../../assets/destination/image-titan.png";



//components
import PlanetNavBar from '../../components/planetNavBar/PlanetNavBar';
//data
import destinationData from "../../data/data.json";


const Destination = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(destinationData.destinations[0]);
    const [isVisible, setIsVisible] = useState(false);
    const [activePlanet, setActivePlanet] = useState("Moon");

    const handleSelectPlanet = (planetName) => {
        setIsVisible(false);
        setTimeout(() => {
            const newPlanet = destinationData.destinations.find(dest => dest.name === planetName);
            if (newPlanet) {
                setSelectedPlanet(newPlanet);
                setIsVisible(true);
                setActivePlanet(planetName);
            }
        }, 300);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);


    const imageMap = {
        "Moon": Moon,
        "Mars": Mars,
        "Europa": Europa,
        "Titan": Titan
    };

    return (
        <main className="destination-page">
            <div className="paddingTop">

                <div className="pageTitle text-preset-5"><span className='textBold'>01 </span>PICK YOUR DESTINATION</div>
                <section className="destination-container">


                    <div className="image-destination">
                        <img
                            className='destination_planetImgPlaceholder'
                            src={imageMap[selectedPlanet.name]}
                            alt={selectedPlanet.name}
                        />
                    </div>

                    <div className="explanation-destination">

                        <PlanetNavBar onSelectPlanet={handleSelectPlanet} activePlanet={activePlanet} />

                        <div className={`destination_text ${isVisible ? "show" : ""}`}>
                            <div className="planet text-preset-2">{selectedPlanet.name.toUpperCase()}
                            </div>
                            <p className="description text-preset-9"> {selectedPlanet.description}</p>

                        </div>
                        <div className={`destination_statistik ${isVisible ? "show" : ""}`}>
                            <div className="distance_Cont">
                                <div className="distanceTitle text-preset-7">AVG. DISTANCE</div>
                                <div className="distance text-preset-6">{selectedPlanet.distance}</div>
                            </div>
                            <div className="travelTime_Cont">
                                <div className="travelTimeTitle text-preset-7">EST. TRAVEL TIME</div>
                                <div className="travelTime text-preset-6">{selectedPlanet.travel}</div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </main>
    )
}

export default Destination