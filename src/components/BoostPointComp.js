import React from 'react'
import { BsX } from "react-icons/bs";
import { FaChevronRight, FaRocket } from "react-icons/fa";
import './BonusPointComp.css'

function BoostPointComp() {
    return (
        <div>
            <div><BsX className="bonus-cancel-icon"/></div>
            <div className="oya-text">Boost Iyanaya Points</div>
            <div>
                <div className="double-boost">
                    <FaRocket  className="black-icon"/>
                    <FaRocket  className="black-icon"/>
                    <div className="booster">Double Boost</div>
                    <div className="cost">Cost: <span className="price">N50</span></div>
                </div>
                <div className="triple-boost">
                    <FaRocket  className="yellow-icon"/>
                    <FaRocket  className="yellow-icon"/>
                    <FaRocket  className="yellow-icon"/>
                    <div className="booster">Triple Boost</div>
                    <div className="cost">Cost: <span className="price">N50</span></div>
                </div>
            </div>
            <div className="boost-cont">
                <button className="boostin-btn">Boost<FaChevronRight /></button>
            </div>
        </div>
    )
}

export default BoostPointComp
