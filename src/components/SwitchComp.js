import React, { useState } from 'react'
import Modal from 'react-modal'
import './SwitchComp.css'
import AvailableContestant from './AvailableContestant'

function SwicthComp (props) {

    const [showSwitch, setShowSwitch] = useState('Switch')

    const [modalOpen, setModalOpen] = useState(false)

    const handleSwitchButton = () => {
        setModalOpen(true)
        setShowSwitch('Sell')
    }
    
    return (
        <div className="switch">
            <button onClick={handleSwitchButton }>{showSwitch}</button>
            <Modal 
                isOpen={modalOpen}  
                onRequestClose={() => setModalOpen(false)}
                className="switch-modal"
            >
                <AvailableContestant toCloseModal={modalOpen} />
            </Modal>
        </div>
    )
}

export default SwicthComp