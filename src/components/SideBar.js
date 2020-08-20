import React from 'react'
import {FaHome} from 'react-icons/fa'
import mtnLogo from '../images/mtn-logo.svg'
import { Link } from 'react-router-dom'

function SideBar(props) {
    return (
        <div className="sidebar">
            <div className="nav-items">
                <Link to="/">             
                    <img src={mtnLogo} alt="mtn-logo" className="mtn-logo" />
                </Link>
                <div onClick={props.homeControl} className="items cor">
                    <div><FaHome color="white" size="25" /></div>
                    <div>Home</div>
                </div>
                
                <div onClick={props.gamesControl} className="items">
                    <div><FaHome color="white" size="25" /></div>
                    <div>Games</div>
                </div>
                
                <div onClick={props.leaderboardControl} className="items">
                    <div><FaHome color="white" size="25" /></div>
                    <div>Leaderboard</div>
                </div>
                
                <div onClick={props.helpControl} className="items">
                    <div><FaHome color="white" size="25" /></div>
                    <div>Help</div>
                </div>
                
                <div onClick={props.profileControl} className="items">
                    <div><FaHome color="white" size="25" /></div>
                    <div>Profile</div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
