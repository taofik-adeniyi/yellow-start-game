import React, { useState } from 'react'
// import './Leaderboard.css'
import SideBar from './SideBar'
import Help from './Help'
import Home from './Home'
import Games from './Games'
import LeaderBoard from './LeaderBoard'
// import Profile from './Profile'
import logo1 from '../images/display-picture.png'
import { FaAngleDown, FaChevronRight, FaCheck } from "react-icons/fa";
import './Profile.css'
import ProfileForm from './ProfileForm'
import ProfileTopUpHistory from './ProfileTopUpHistory'
import {Link} from 'react-router-dom'
import TopUpComp from './TopUpComp'

function Profile() {

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

        const [basicInfo, setBasicInfo] = useState(true)

        const [topupInfo, setTopUpInfo] = useState(false)

        const handleBasicInfo = () => {
            setBasicInfo(true)
        }
        
        const handleTopUpHistory = () => {
            setBasicInfo(false)
            setTopUpInfo(true)
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
            <div className="lead-container">
                <div className="lead-con-one">
                    <div className="lead-name">
                        <div className="ayodele">Hi Ayodele</div>
                        <h3 className="time">Tuesday, 12 May 2020</h3>
                        <div className="lead-dp-con">
                        <img src={logo1} alt="displayImage" className="lead-dp" />
                        <FaAngleDown />
                        </div>
                    </div>
                    <div className="lead-points extra-marg">
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
                    <div className="lead-coin-bal extra-marg">
                        <div id="to-head">Coins Balance</div>
                        <div id="to-head-to" className="new-to">5000</div>
                        {/* <div>Top Up <FaChevronRight /></div> */}
                        <TopUpComp />
                    </div>
                    <div className="lead-position extra-marg">
                        <div id="to-head">Position</div>
                        <div id="to-head-to">115<span className="little little-color">th</span></div>
                        {/* <div>View Leaderboard <FaChevronRight /></div> */}
                    <Link to="/leaderboard">View Leaderboard <FaChevronRight /></Link>
                    </div>
                    <div className="lead-countdown extra-marg">
                        <div id="to-head">Countdown to show</div>
                        <div id="to-head-to" className="tikin">0:20:00</div>
                        <div>Predict Now! <FaChevronRight /></div>
                    </div>
                </div>
                <div className="profile-con">
                    <div className="profile-con-one">
                        My Profile
                    </div>
                    <div className="profile-con-two">
                        <div>
                            <button className="switch-btn" onClick={()=> handleBasicInfo() }>Basic Info</button>
                            <button className="switch-btn" onClick={ ()=> handleTopUpHistory() }>Top up History</button>
                        </div>
                        <div className="prof-switch-display">
                            {
                                basicInfo ?
                                <ProfileForm />:
                                <ProfileTopUpHistory />
                            }
                        </div>
                    </div>
                    <div className="prof-con-three">
                        Your subscription in the Yellow Start Games platform will expire on 
                        <span className="date-time-span">28/09/2020</span>
                        <button className="renew-btn">Renew at N100/7Days</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
