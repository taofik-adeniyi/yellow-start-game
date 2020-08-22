import React from 'react'
import './NavBar.css'
import logo from '../images/yellostarlogo.svg'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/">
                <img src={logo} alt="YelloStarLogo" className="image"  />
            </Link>
        </div>
    )
}

export default NavBar
