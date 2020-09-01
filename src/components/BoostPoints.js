import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaCoins, FaChevronRight } from "react-icons/fa";
import BoostPointComp from './BoostPointComp'

function BoostPoints() {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="boost">
            <button onClick={() => setModalOpen(true)}>Boost Points<FaChevronRight /></button>
            <Modal 
                isOpen={modalOpen}  
                onRequestClose={() => setModalOpen(false)}
                className="modal"
            >
                <BoostPointComp />
            </Modal>
        </div>
    )
}

export default BoostPoints
