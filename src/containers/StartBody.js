import React from 'react'
import './StarBody.css'
import { FaChevronRight } from 'react-icons/fa'

function StartBody() {
    return (
        <>
            <div className="StartBody">
                <div>
                    <h1 className="Welcome">
                        Welcome to the YelloStarShow Games
                    </h1>
                    <p className="win">
                        Win amazing prices by participating in the Games
                    </p>
                    <div>
                    <button className="body-btn">
                        Get Started 
                        
                        <FaChevronRight className="fachevron" />
                        
                    </button></div>
                </div>
            </div>
            <div className="low">
            </div>
        </>
    )
}

export default StartBody
