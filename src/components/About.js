import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About Us</h1>
            <h3>
                Navigate to the <Link to="/">Home</Link> Page
                </h3>
        </div>
    )
}

export default About
