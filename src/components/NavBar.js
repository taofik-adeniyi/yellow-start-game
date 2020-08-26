import React, { useState } from 'react'
import './NavBar.css'
import logo from '../images/yellostarlogo.svg'
import { Link } from 'react-router-dom'

function NavBar() {

    // const [display, setDisplay] = useState(false)
    
    // const [hamburger, setHamburger] = useState(true)
    
    // display ? "nav-links" : "shownav"
    
    // {display ? "nav-links" : "shownav"}

    return (
        <div className="nav">
            <Link to="/">
                <img src={logo} alt="YelloStarLogo" className="image"  />
            </Link>
            <div className="hamburger" 
            // onClick={() => {
            //     if (display){setDisplay(false)}else {
            //         setDisplay(true)
            //     }
            //     }}
                >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className="nav-links">
                <li><Link to="">How to Play</Link></li>
                <li><Link to="">Leaderboard</Link></li>
                <li><Link to="">Help & Support</Link></li>
            </ul>
        </div>
    )
}

export default NavBar
