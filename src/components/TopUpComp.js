import React, { useState } from 'react'
import { FaChevronRight } from "react-icons/fa";
import Modal from 'react-modal'
import TopUp from './TopUp'

function TopUpComp() {

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <div className="top-up">
            <button onClick={setModalOpen}>Top up<FaChevronRight /></button>
            <Modal 
                isOpen={modalOpen}  
                onRequestClose={() => setModalOpen(false)}
                className="modal"
            >
                <TopUp />
            </Modal>
        </div>
    )
}

export default TopUpComp
