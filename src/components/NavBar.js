import React from 'react'
import './NavBar.css'
import logo from '../images/yellostarlogo.svg'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="NavBar">
            <Link to="/">
                <img src={logo} alt="YelloStarLogo" className="Image"  />
            </Link>
            <div className="List">
                <ul>
                    <li>How to Play</li>
                    <li>Leaderboard</li>
                    <li>Help & Support</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
