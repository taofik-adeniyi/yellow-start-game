import React, { useState } from 'react'
import {FaHome} from 'react-icons/fa'
import mtnLogo from '../images/mtn-logo.svg'
import { Link } from 'react-router-dom'
import './Sidebar.css'

function SideBar(props) {

    // className={SideNavBar ? "my-side-bar" : "shownav"}    
    
    // const [SideNavBar, setSideNavBar] = useState('true')

    return (
        <div>
                <Link to="/">             
                    <img src={mtnLogo} alt="mtn-logo" className="side-bar-logo" />
                </Link>
                <div className="nest-sidebar-hamburger" 
                // onClick={() => {setSideNavBar(true)}}
                >
                    <div className="nest-line"></div>
                    <div className="nest-line"></div>
                    <div className="nest-line"></div>
                    <div className="nest-line"></div>
                </div>
                <ul className="my-side-bar">
                    <li>
                        <Link to="/">
                            <FaHome color="white" size="25" className="my-icons" />
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="">
                            <FaHome color="white" size="25" className="my-icons" />
                            Games
                        </Link>
                        <ul>
                            <li>
                                <Link to="">
                                <FaHome color="white" size="25" />
                                Prediction Game
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                <FaHome color="white" size="25" />
                                Play Quiz
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/leaderboard">
                            <FaHome color="white" size="25" className="my-icons" />
                            Leaderboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/help">
                            <FaHome color="white" size="25" className="my-icons" />
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <FaHome color="white" size="25" className="my-icons" />
                            Profile
                        </Link>
                    </li>
                </ul>
        </div>
    )
}

export default SideBar
