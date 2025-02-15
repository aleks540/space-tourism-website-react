import React from 'react';
import "./Crew.scss";
import crewHurley from "../../assets/crew/image-douglas-hurley.png";


const Crew = () => {
    return (
        <main className="crew-page">
            <section className="crew-container">
                <div className="pageTitleCrew text-preset-5"><span className='textBold'>02 </span>MEET YOUR CREW</div>


                <div className="contentCrew">
                    <div className="left-crew">
                        <div className="explanation">
                            <div className="explanationText">
                                <div className="rankCrew text-preset-4">Commander </div>
                                <div className="nameCrew text-preset-3">Douglas Hurley</div>
                                <div className="descriptionCrew text-preset-9">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</div>
                            </div>

                            <div className="pagination">
                                <ul>
                                   <li></li>
                                   <li></li>
                                   <li></li>
                                   <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="right-crew">
                        <div className="image-crwe">
                            <img
                                className='crew_CrewImgPlaceholder'
                                src={crewHurley}
                                alt="Douglas Hurley"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Crew