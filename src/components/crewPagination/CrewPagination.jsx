import React from 'react'

const CrewPagination = ({ currentIndex, setCurrentIndex, crewLength}) => {
    return (
       /*  <div>
            <ul>
                <li>
                    <button></button>
                </li>
                <li><button></button></li>
                <li><button></button></li>
                <li><button></button></li>
            </ul>
        </div> */
        <div className="pagination">
        {Array.from({ length: crewLength }).map((_, index) => (
          <button
            key={index}
            className={index === currentIndex ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    )
}

export default CrewPagination