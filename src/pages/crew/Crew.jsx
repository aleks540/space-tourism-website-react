import React, { useState } from 'react';
import "./Crew.scss";

//images
import crewHurley from "../../assets/crew/image-douglas-hurley.png";
import crewAnsari from "../../assets/crew/image-anousheh-ansari.png";
import crewShuttleworth from "../../assets/crew/image-mark-shuttleworth.png";
import crewGlover from "../../assets/crew/image-victor-glover.png";

//components
import CrewPagination from '../../components/crewPagination/CrewPagination';

//data
import crewData from "../../data/data.json"

const Crew = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const currentCrewMember = crewData.crew[currentIndex];

    const imageMap = {
        "Douglas Hurley": crewHurley,
        "Anousheh Ansari": crewAnsari,
        "Mark Shuttleworth": crewShuttleworth,
        "Victor Glover": crewGlover
    };

    return (
        <main className="crew-page">
            <section className="crew-container">
                <div className="pageTitleCrew text-preset-5"><span className='textBold'>02 </span>MEET YOUR CREW</div>


                <div className="contentCrew">
                    <div className="left-crew">
                       
                            <div className="explanationText">
                                <div className="rankCrew text-preset-4">{currentCrewMember.role} </div>
                                <div className="nameCrew text-preset-3">{currentCrewMember.name}</div>
                                <div className="descriptionCrew text-preset-9">{currentCrewMember.bio}</div>
                            </div>
                      
                        <div className="pagination">

                            <CrewPagination
                                currentIndex={currentIndex}
                                setCurrentIndex={setCurrentIndex}
                                crewLength={crewData.crew.length}
                            />

                        </div>
                    </div>
                    <div className="right-crew">
                        <div className="image-crwe">
                            <img
                                className={currentCrewMember.images.png}
                                src={imageMap[currentCrewMember.name]}
                                alt={currentCrewMember.name}
                            />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Crew