import React, {useState} from 'react'
import './StartBody.css'
import Modal from 'react-modal'
import NickNameForm from './NickNameForm'
import { FaChevronRight } from 'react-icons/fa'

Modal.setAppElement('#root')
function StartBody() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    
    return (
        <>
            <div className="StartBody">
                <div>
                    <h1 className="Welcome">
                        Welcome to the YelloStarShow Games
                    </h1>
                    <p className="win">
                        Win amazing prices by participating in the Games
                    </p>
                    <div>
                    <button className="body-btn" onClick={ () => setModalIsOpen(true) }>
                        Get Started 
                        
                        <FaChevronRight className="fachevron" />
                        
                    </button></div>
                </div>
                <Modal 
                    isOpen={modalIsOpen} 
                    shouldCloseOnOverlayClick={false} 
                    onRequestClose={() => setModalIsOpen(false)}
                    className="Modal"
                >
                  <NickNameForm />
                </Modal>
            </div>
            <div className="low">
            </div>
        </>
    )
}

export default StartBody
