import React from 'react';
import "./Destination.scss";

//images
import Moon from "../../assets/destination/image-moon.png"
import PlanetNavBar from '../../components/planetNavBar/PlanetNavBar';

const Destination = () => {
    return (
        <main className="destination-page">
            <div className="paddingTop">
                
                <div className="pageTitle text-preset-5"><span className='textBold'>01 </span>PICK YOUR DESTINATION</div>
                <section className="destination-container">


                    <div className="image-destination">
                        <img className='destination_planetImgPlaceholder' src={Moon} alt="" />

                    </div>
                    <div className="explanation-destination">
                       <PlanetNavBar/>
                        <div className='destination_text'>
                            <div className="planet text-preset-2">MOON
                            </div>
                            <p className="description text-preset-9">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

                        </div>
                        <div className="destination_statistik">
                            <div className="distance_Cont">
                                <div className="distanceTitle text-preset-7">AVG. DISTANCE</div>
                                <div className="distance text-preset-6">384,400 KM</div>
                            </div>
                            <div className="travelTime_Cont">
                                <div className="travelTimeTitle text-preset-7">EST. TRAVEL TIME</div>
                                <div className="travelTime text-preset-6">3 DAYS</div>
                            </div>
                        </div>

                    </div>

                </section>
            </div>
        </main>
    )
}

export default Destination