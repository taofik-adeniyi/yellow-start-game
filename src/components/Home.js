import React from 'react'
import logo1 from '../images/display-picture.png'

function Home() {
    return (
        <div className="home-container">
            <div className="first-row">
                <div className="display-name">Hi, Ayodele</div>
                <div className="display-time">Tuesday, 12 May 2020</div>
                <img src={logo1} alt="YelloStarLogo" className="display-dp"  />
            </div>
            <div className="second-row">
                <div className="wide-card-heading">My Points</div>
            </div>
            <div className="third-row">
                <h2>My Favorites</h2>
            </div>
            <div className="fourth-row">
                <div className="artiste"></div>
            </div>
        </div>
    )
}

export default Home
