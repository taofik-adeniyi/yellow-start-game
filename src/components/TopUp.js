import React from 'react'
import { FaDatabase, FaCcMastercard, FaCcVisa, FaCcPaypal, FaCcDiscover } from "react-icons/fa";
import { BsCheckCircle, BsX } from "react-icons/bs";
import './TopUp.css'

function TopUp() {
    return (
        <div>
            <BsX className="cancel" />
            <div className="top-up">Top Up</div>
            <div className="space-bottom">
                <div className="data-bundle">
                    <div>
                        <FaDatabase className="database" />
                    </div>
                    <div className="db-text">
                        Data Bundle
                    </div>
                </div>
                <div className="bank-cards">
                    <div className="all-cards">
                        <div>
                            <FaCcMastercard className="cards" />
                            <FaCcVisa className="cards"  />
                        </div>
                        <div>
                            <FaCcPaypal className="cards"  />
                            <FaCcDiscover className="cards"  />
                        </div>
                    </div>
                    <div className="bank-text">
                        Bank/Card
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUp
