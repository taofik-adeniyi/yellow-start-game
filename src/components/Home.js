import React from 'react'
import logo1 from '../images/display-picture.png'
import logo2 from '../images/iyanya.png'
import logo3 from '../images/omawunmi.png'
import logo4 from '../images/praiz.png'
import logo5 from '../images/predictiongames.png'
import './Home.css'
import { FaCoins, FaChevronRight } from "react-icons/fa";

function Home() {
    return (
        <div>
            <div class="main-container-one">
                
                <div class="nametimedp">
                    <div className="ayodele">Hi, Ayodele</div>
                    <h3 className="time">Tuesday, 12 May 2020</h3>
                    <img src={logo1} alt="displayImage" className="home-dp" />
                </div>
                
                <div class="points">
                    <div className="box-points">
                        <div className="my-points">My Points</div>
                        <div className="circlular">
                            115<br/>
                            <span className="pts">Pts</span>
                        </div>
                        <ul className="norm-ul">
                            <li>Avatar 20pts</li>
                            <li>Trivia 20pts</li>
                            <li>Prediction 20pts</li>
                        </ul>
                    </div>
                </div>

                <div class="cont-one">
                    <div className="box-coins">
                        <FaCoins size="40" color="yellow" className="coin-fav" />
                        <div className="coins-balance">Coins balance</div>
                        <div className="coins-balance-no">5000</div>
                        <div className="top-up">Top up<FaChevronRight /></div>
                    </div>
                </div>
                
                <div class="cont-two">
                    <div className="box-position">
                    <div className="post">Position</div>
                    <div className="post-no">115th</div>
                    <div className="overall">Overall</div>
                    <div className="view-lead">View Leaderboard</div>
                    </div>
                </div>
                
                <div class="cont-three">
                    <div className="box-countdown">
                        <div className="countdown-heading">
                            Count down to show
                        </div>
                        <div className="time-counter">
                            0:20:00
                        </div>
                        <div className="predict-now">
                            Predict now <FaChevronRight />
                        </div>
                    </div>
                </div>
        </div>
        
        <div class="main-container-two">
            <div class="favorite-section">
                <div className="fav-sec-head">
                    My Favorites
                    <span className="view-contestant-head">
                    View All Contestants <FaChevronRight />
                    </span>
                </div>
                <div class="sub-box-one">
                    <div className="fav-artone">
                        <img src={logo2} alt="artiste-name" className="slider-img" />
                    </div>
                    <div className="slider-name">
                        Iyanya<br />
                        <span className="slider-cont-no">
                            Contestant 12
                        </span>
                    </div>
                    <ul className="art-ul">
                        <li><a href="">Vocal (15pts)</a></li>
                        <li><a href="">Simulations (0pts)</a></li>
                        <li><a href="">Master Classes (0pts)</a></li>
                        <li><a href="">Entrepreneurship (27pts)</a></li>
                        <li><a href="">Performance (17pts)</a></li>
                    </ul>
                    <div className="no-of-po">115 <span className="b-pts">Pts</span></div>
                    <div className="boost">Boost Points<FaChevronRight /></div>
                    <div className="switch">Switch</div>
                </div>
                <div class="sub-box-two">
                    <div className="fav-artone">
                        <img src={logo3} alt="artiste-name" className="slider-img" />
                    </div>
                    <div className="slider-name">
                        Omawunmi<br />
                        <span className="slider-cont-no">
                            Contestant 2
                        </span>
                    </div>
                    <ul className="art-ul">
                        <li><a href="">Vocal (15pts)</a></li>
                        <li><a href="">Simulations (0pts)</a></li>
                        <li><a href="">Master Classes (0pts)</a></li>
                        <li><a href="">Entrepreneurship (27pts)</a></li>
                        <li><a href="">Performance (17pts)</a></li>
                    </ul>
                    <div className="no-of-po">115 <span className="b-pts">Pts</span></div>
                    <div className="boost">Boost Points<FaChevronRight /></div>
                    <div className="switch">Switch</div>
                </div>
                <div class="sub-box-three">
                    <div className="fav-artone">
                        <img src={logo4} alt="artiste-name" className="slider-img" />
                    </div>
                    <div className="slider-name">
                        Praiz<br /><span className="slider-cont-no">Contestant 22</span>
                    </div>
                    <ul className="art-ul">
                        <li><a href="">Vocal (15pts)</a></li>
                        <li><a href="">Simulations (0pts)</a></li>
                        <li><a href="">Master Classes (0pts)</a></li>
                        <li><a href="">Entrepreneurship (27pts)</a></li>
                        <li><a href="">Performance (17pts)</a></li>
                    </ul>
                    <div className="no-of-po">115 <span className="b-pts">Pts</span></div>
                    <div className="boost">Boost Points<FaChevronRight /></div>
                    <div className="switch">Switch</div>
                </div>
            </div>
            <div className="quiz-section">
                <div className="quiz-sec-one">
                    Play Quiz <FaChevronRight />
                </div>
                <div className="quiz-sec-two">
                    <div className="highlight">Prediction <br />Games</div>
                    <button className="btn-highlight">Play Now!</button>
                </div>
            </div>
        </div>                
    </div>
    )
}

export default Home