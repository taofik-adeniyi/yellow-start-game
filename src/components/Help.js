import React, { useState } from 'react'
import './Leaderboard.css'
import SideBar from './SideBar'
import './Help.css'
import Home from './Home'
import Games from './Games'
import Profile from './Profile'
import LeaderBoard from './LeaderBoard'
import logo1 from '../images/display-picture.png'
import { FaAngleDown, FaChevronRight } from "react-icons/fa";
import {Link} from 'react-router-dom'
import TopUpComp from './TopUpComp'

function Help() {

    const [home, setHome] = useState('true')

    const [help, setHelp] = useState('false')

    const [leaderboard, setLeaderBoard] = useState('false')

    const [games, setGames] = useState('false')

    const [profile, setProfile] = useState('false')

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

    return (
        <div className="nest-wrapper">
            <div className="nest-sidebar">
                <SideBar 
                    gamesControl={handleGames} 
                    homeControl={handleHome}
                    leaderboardControl={handleLeaderboard}
                    helpControl={handleHelp}
                    profileControl={handleProfile}
                />
            </div>
        <div className="help-container">
            <div className="help-con-one">
                <div className="help-name">
                    <div className="ayodele">Hi Ayodele</div>
                    <h3 className="time">Tuesday, 12 May 2020</h3>
                    <div className="help-dp-con">
                    <img src={logo1} alt="displayImage" className="help-dp" />
                    <FaAngleDown />
                    </div>
                </div>
                <div className="help-points extra-marg">
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
                <div className="help-coin-bal extra-marg">
                    <div id="to-head">Coins Balance</div>
                    <div id="to-head-to" className="new-to">5000</div>
                    {/* <div>Top Up <FaChevronRight /></div> */}
                    <TopUpComp />
                </div>
                <div className="help-position extra-marg">
                    <div id="to-head">Position</div>
                    <div id="to-head-to">115<span className="little little-color">th</span></div>
                    {/* <div>View Leaderboard <FaChevronRight /></div> */}
                    <Link to="/leaderboard">View Leaderboard <FaChevronRight /></Link>
                </div>
                <div className="help-countdown extra-marg">
                    <div id="to-head">Countdown to show</div>
                    <div id="to-head-to" className="tikin">0:20:00</div>
                    <div>Predict Now! <FaChevronRight /></div>
                </div>
            </div>
            <div className="help-con-two">
                <div className="help-con-two-one">
                    <div className="to-play">How to Play</div>
                    <div className="btn-mover">
                        <button>How to Play</button>
                        <button>Help</button>
                        <button>T&C's</button>
                    </div>
                </div>
                <div className="help-con-two-two">
                    <ul className="help-list">
                        <li>How can i reserve a space<span className="help-list-plus">+</span></li>
                        <li>Are there rules that comes with spaces<span className="help-list-plus">+</span></li>
                        <li>What are the top spaces you will recommend<span className="help-list-plus">+</span></li>
                        <li>Booking multiple spaces at once<span className="help-list-plus">+</span></li>
                        <li>What are the top spaces you will recommend<span className="help-list-plus">+</span></li>
                        <li>Booking multiple spaces at once<span className="help-list-plus">+</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Help
