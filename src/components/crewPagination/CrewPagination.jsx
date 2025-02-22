import React from 'react';
import "./CrewPagination.scss"

const CrewPagination = ({ currentIndex, setCurrentIndex, crewLength}) => {
    return (
       
        <div className="pagination">
        {Array.from({ length: crewLength }).map((_, index) => (
          <button 
            key={index}
            className={index === currentIndex ? "btn_crewPageniation activeCrewPagination" : "btn_crewPageniation"}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    )
}

export default CrewPagination