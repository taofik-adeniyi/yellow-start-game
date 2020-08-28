import React from 'react'
import { FaAngleDown, FaChevronRight, FaCheck } from "react-icons/fa";


function ProfileTopUpHistory() {
    return (
        <div>
            <div className="top-up-history">
                <div className="point"><FaCheck />Success<br/>April 19, 2020</div>
                <div className="point-other">N50,000<br/>Paystack</div>
            </div>
            <div className="top-up-history">
                <div className="point"><FaCheck />Success<br/>April 19, 2020</div>
                <div className="point-other">N50,000<br/>GTPay</div>
            </div>
            <div className="top-up-history">
                <div></div>
                <div className="point"><FaCheck />Failed<br/>April 19, 2020</div>
                <div className="point-other">N50,000<br/>Quickteller</div>
            </div>
        </div>
    )
}

export default ProfileTopUpHistory
