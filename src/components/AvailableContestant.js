import React, { useState } from 'react'
import Modal from 'react-modal'
import SureToSwitch from './SureToSwitch'

function AvailableContestant() {

    const [switchAvailable, setSwitchAvailable] = useState(false)
    return (
        <div>
            <div>
                <h2>AvailableContestant</h2>
                Iyanaya Contestant 13
                <button onClick={() => setSwitchAvailable(true)}>click to switch</button>
            </div>
            <div>
                <Modal 
                isOpen={switchAvailable}
                onRequestClose={() => setSwitchAvailable(false)}
                className="modal"
            >
                <SureToSwitch />
            </Modal>
            </div>
        </div>
    )
}

export default AvailableContestant
