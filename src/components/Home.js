import React from 'react'
import logo1 from '../images/display-picture.png'
import logo2 from '../images/iyanya.png'
import logo3 from '../images/omawunmi.png'
import logo4 from '../images/praiz.png'
import logo5 from '../images/predictiongames.png'
function Home() {
    return (
        <div>
            <div className="first-container">
                <div className="fbox1">
                    <div className="display-name">Hi, Ayodele</div>
                    <div className="display-time">Tuesday, 12 May 2020</div>
                    <img src={logo1} alt="displayImage" className="logo1" />
                </div>
                <div className="fbox2">
                    <div className="cover-one">
                        <div className="my-points">My Points</div>
                        <div className="doughnut">
                            <div className="non-one">
                                115
                            </div>
                            <div className="pts">Pts</div>
                        </div>
                        <div className="list-holder">
                        </div>
                    </div>
                </div>
                <div className="fbox3">
                    <div className="cover-two"></div>
                </div>
                <div className="fbox4">
                    <div className="cover-two"></div>
                </div>
                <div className="fbox5">
                    <div className="cover-two"></div>
                </div>
            </div>
            <div className="second-container">
                <div className="sbox1">
                    <div className="favorite">My Favorite</div>
                    <div className="view-contestants">View All Contestants</div>
                    <div className="quiz">Play Quiz</div>
                </div>
                <div className="sbox2">
                    <div className="card">
                        <img src={logo2} alt="artiste-name" className="small-img" />
                        <div className="koroko">Iyanya<br/><span className="koroko-two">Contestant 12</span></div>
                    </div>
                </div>
                <div className="sbox3">
                    <div className="card">
                        <img src={logo3} alt="artiste-name" className="small-img" />
                        <div className="koroko">Omawunmi<br/><span className="koroko-two">Contestant 2</span></div>
                    </div>
                </div>
                <div className="sbox4">
                    <div className="card">
                        <img src={logo4} alt="artiste-name" className="small-img" />
                        <div className="koroko">Praiz<br/><span className="koroko-two">Contestant 22</span></div>
                    </div>
                </div>
                <div className="sbox5">
                    <div className="yourdiv">
                        {/* <img src={logo5} alt="bvjbhn" /> */}
                        <div className="lock">Prediction Games</div>
                        <button className="locker">Play Now!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
