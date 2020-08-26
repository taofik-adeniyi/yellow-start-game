import React from 'react'
import './Footer.css'
import { FaHeadphones, FaExclamationCircle } from 'react-icons/fa'

function Footer() {
    return (
        <div className="footer">
            <button className="how-to-play">
                <FaExclamationCircle className="footer-icon" />
                How To Play
            </button>
            <button className="support">
                <FaHeadphones className="footer-icon" />
                Support
            </button>
        </div>
    )
}

export default Footer
