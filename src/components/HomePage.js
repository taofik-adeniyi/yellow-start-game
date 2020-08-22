import React from 'react'
// import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import StartBody from './StartBody'
import Footer from './Footer'

function Homepage() {
    return (
        <div className="homepage-wrapper">
            <NavBar />
            <StartBody />
            <Footer />
        </div>
    )
}

export default Homepage
