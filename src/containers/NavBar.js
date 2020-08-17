import React from 'react'
import './NavBar.css'
import logo from '../images/yellostarlogo.svg'

function NavBar() {
    return (
        <div className="NavBar">
            
            <img src={logo} alt="YelloStarLogo" className="Image"  />
            
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
