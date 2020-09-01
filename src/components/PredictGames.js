import React, { useState } from 'react'
import './Dashboard.css'
import Help from './Help'
import LeaderBoard from './LeaderBoard'
import Home from './Home'
import Games from './Games'
import Profile from './Profile'
import SideBar from './SideBar'
import './PredictGames.css'
import { FaAngleDown, FaChevronRight } from "react-icons/fa";
import logo1 from '../images/display-picture.png'
import Modal from 'react-modal'
import PredictMusic from './PredictMusic'
import TopUpComp from './TopUpComp'
import {Link} from 'react-router-dom'

function PredictGames() {

    const [home, setHome] = useState('true')

    const [help, setHelp] = useState('false')

    const [leaderboard, setLeaderBoard] = useState('false')

    const [games, setGames] = useState('false')

    const [profile, setProfile] = useState('false')

    // const [predict, setPredict] = useState('false')

    const [PopUpGames, setPopUpGames] = useState(false)
    

    const handleHome = () => {
        setLeaderBoard('false')
        setHelp('false')
        setProfile('false')
        setGames('false')
        setHome('true')
    }

    const handleGames = () => {
        setHome('false')
        setLeaderBoard('false')
        setHelp('false')
        setProfile('false')
        setGames('true')
    }

    const handleLeaderboard = () => {
        setHome('false')
        setHelp('false')
        setProfile('false')
        setGames('false')
        setLeaderBoard('true')
    }

    const handleHelp = () => {
        setHome('false')
        setLeaderBoard('false')
        setProfile('false')
        setGames('false')
        setHelp('true')
    }

    const handleProfile = () => {
        setHome('false')
        setLeaderBoard('false')
        setHelp('false')
        setGames('false')
        setProfile('true')
    }

    // const handlePredict = () => {
    //     setHome('false')
    //     setLeaderBoard('false')
    //     setHelp('false')
    //     setGames('false')
    //     setProfile('false')
    //     setPredict('true')
    // }

    let homeComponent
        if (home === 'true'){
            homeComponent = <Home /> 
        }
    let gamesComponent
        if(games === 'true'){
            gamesComponent = <Games />
        }
    let leaderboardComponent
        if(leaderboard === 'true'){
            leaderboardComponent = <LeaderBoard />
        }
    let helpComponent
        if(help === 'true'){
            helpComponent =  <Help />
        }
    let profileComponent
        if(profile === 'true'){
            profileComponent = <Profile />
        }
    // let predictComponent
    // if(predict === 'true'){
    //     profileComponent = <Profile />
    // }

    return (
        <div class="nest-wrapper">
            <div className="nest-sidebar">
                <SideBar 
                    gamesControl={handleGames} 
                    homeControl={handleHome}
                    leaderboardControl={handleLeaderboard}
                    helpControl={handleHelp}
                    profileControl={handleProfile}
                />
            </div>
            <div className="pg-container">
                <div className="pg-con-one">
                    <div className="pg-name">
                        <div className="ayodele">Hi Ayodele</div>
                        <h3 className="time">Tuesday, 12 May 2020</h3>
                        <div className="pg-dp-con">
                        <img src={logo1} alt="displayImage" className="pg-dp" />
                        <FaAngleDown />
                        </div>
                    </div>
                    <div className="pg-points extra-marg">
                        <div id="to-head">My Points</div>
                        <div id="to-head-to">115<span className="little">Pts</span></div>
                        <div>
                            <ul className="points-ul">
                                <li>Avatar</li>
                                <li>Trivia</li>
                                <li>Prediction</li>
                            </ul>
                        </div>
                    </div>
                    <div className="pg-coin-bal extra-marg">
                        <div id="to-head">Coins Balance</div>
                        <div id="to-head-to" className="new-to">5000</div>
                        <TopUpComp />
                    </div>
                    <div className="pg-position extra-marg">
                        <div id="to-head">Position</div>
                        <div id="to-head-to">115<span className="little little-color">th</span></div>
                        <Link to="/leaderboard">View Leaderboard<FaChevronRight /></Link>
                    </div>
                    <div className="pg-countdown extra-marg">
                        <div id="to-head">Countdown to show</div>
                        <div id="to-head-to" className="tikin">0:20:00</div>
                        <div>Predict Now! <FaChevronRight /></div>
                    </div>
                </div>
                <div className="pg-con-two">
                    <div className="pg-btn-con">
                        <button>Nomination <FaChevronRight /></button>
                        <button>Eviction <FaChevronRight /></button>
                        <button>Music Choice <FaChevronRight /></button>
                    </div>
                    <div className="pg-sel-con">Select Contestant</div>
                    <div className="pg-con-list">
                        <div className="holder">
                            <div className="img-holder"></div>
                            <div className="name-holder">Asuquo</div>
                            <div className="name-cont-holder">Contestant 13</div>
                        </div>
                        <div className="holder">
                            <div className="img-holder"></div>
                            <div className="name-holder">Asuquo</div>
                            <div className="name-cont-holder">Contestant 13</div>
                        </div>
                        <div className="holder">
                            <div className="img-holder"></div>
                            <div className="name-holder">Asuquo</div>
                            <div className="name-cont-holder">Contestant 13</div>
                        </div>
                        <div className="holder">
                            <div className="img-holder"></div>
                            <div className="name-holder">Asuquo</div>
                            <div className="name-cont-holder">Contestant 13</div>
                        </div>
                        <div className="holder">
                            <div className="img-holder"></div>
                            <div className="name-holder">Asuquo</div>
                            <div className="name-cont-holder">Contestant 13</div>
                        </div>
                        <div className="holder">
                            <div className="img-holder"></div>
                            <div className="name-holder">Asuquo</div>
                            <div className="name-cont-holder">Contestant 13</div>
                        </div>
                        <div className="holder colored" 
                        onClick={() => setPopUpGames(true)}
                        >
                            <div className="img-holder"></div>
                            <div className="name-holder">Cennai</div>
                            <div className="name-cont-holder">Contestant 13</div>
                            
                        </div>
                        <Modal 
                                isOpen={PopUpGames}  
                                onRequestClose={() => setPopUpGames(false)}
                                className="modal"
                            >
                            <PredictMusic />
                            </Modal>
                        <div className="holder">
                            <div className="img-holder"></div>
                            <div className="name-holder">Asuquo</div>
                            <div className="name-cont-holder">Contestant 13</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PredictGames
