import React, { useState } from 'react'
import './Dashboard.css'
import Help from './Help'
import LeaderBoard from './LeaderBoard'
import Home from './Home'
import Games from './Games'
import Profile from './Profile'
import SideBar from './SideBar'



function UserDashboard() {
    
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

    return(
        <div className="container">
            <SideBar 
            gamesControl={handleGames} 
            homeControl={handleHome}
            leaderboardControl={handleLeaderboard}
            helpControl={handleHelp}
            profileControl={handleProfile}
            />
            <div className="main-content">
                {homeComponent}
                {gamesComponent}
                {leaderboardComponent}
                {helpComponent}
                {profileComponent}
            </div>
        </div>
    )
}


export default UserDashboard