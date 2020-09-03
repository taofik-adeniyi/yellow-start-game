import React, { useState } from 'react'
import Modal from 'react-modal'
import SureToSwitch from './SureToSwitch'
import { BsX, BsArrowRight, BsArrowLeft } from "react-icons/bs";


function AvailableContestant(props) {

    const [switchAvailable, setSwitchAvailable] = useState(false)

    // console.log(props.toCloseModal)
    if (props.toCloseModal === false){
        return (
            <div>
                <div>
                    <BsX className="cancel-btn"/>
                </div>
                <div className="available-cont">
                    Available Contestants
                </div>
                <div className="big-container">
                    <div className="holder-cont universal">
                        <div className="indicator"></div>
                        <div className="img-cont-holder"></div>
                        <div className="img-text">title</div>
                        <div className="contestantin">Contestants</div>
                    </div>
                    <div className="holder-cont2 universal highlited-cont">
                        <div className="indicator"></div>
                        <div className="img-cont-holder"></div>
                        <div className="img-text">title</div>
                        <div className="contestantin">Contestants</div>
                    </div>
                    <div className="holder-cont3 universal">
                        <div className="indicator"></div>
                        <div className="img-cont-holder"></div>
                        <div className="img-text">title</div>
                        <div className="contestantin">Contestants</div>
                    </div>
                    <div className="holder-cont4 universal">
                        <div className="indicator"></div>
                        <div className="img-cont-holder"></div>
                        <div className="img-text">title</div>
                        <div className="contestantin">Contestants</div>
                    </div>
                    <div className="holder-cont5 universal">
                        <div className="indicator"></div>
                        <div className="img-cont-holder"></div>
                        <div className="img-text">title</div>
                        <div className="contestantin">Contestants</div>
                    </div>
                    <div className="holder-cont6 universal">
                        <div className="indicator"></div>
                        <div className="img-cont-holder"></div>
                        <div className="img-text">title</div>
                        <div className="contestantin">Contestants</div>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div>
                <div className="sure-to-switch">
                    Are you sure you want to switch
                </div>
                <div className="helder">
                    <div className="switch-img-1"></div>
                    <div className="lots">Iyanya</div>
                    <div className="lots1">(Contestant 6)</div>
                </div>  
                <div className="switch-double-icon">
                    {/* <div> */}
                        {/* <BsArrowLeft className="left-icon" /> */}
                    {/* </div> */}
                    {/* <br /> */}
                    {/* <div> */}
                        <BsArrowRight className="right-icon" />
                    {/* </div> */}
                </div>
                <div className="helder1">
                    <div className="switch-img-2"></div>
                    <div className="lots">Onyeka Onwenu</div>
                    <div className="lots1">(Contestant 19)</div>
                </div>
                <div className="switch-btn-cont">
                    <button className="switch-butt">Confirm Switch</button>
                </div>
                <div className="switch-cancel">
                    Cancel
                </div>
                <div className="switch-cost">
                    This will cost you <span className="naira-color">N100</span>
                </div>
            </div>
        )
    }
    
}

export default AvailableContestant
