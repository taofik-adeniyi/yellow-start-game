import React, {useState} from 'react'
import './StartBody.css'
import Modal from 'react-modal'
import NickNameForm from './NickNameForm'
import { FaChevronRight } from 'react-icons/fa'
import logobg from '../images/homebackground.png'


Modal.setAppElement('#root')
function StartBody() {
    
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    
    return (
            <div className="start-body">
                {/* <img src={logobg} alt="logobg" className="logo-bg" /> */}
                <div className="welcome">
                    Welcome to the YelloStarShow Games
                </div>
                <div className="motto">
                    Win amazing prices by participating in the Games
                </div>
                {/* <button>Name Here</button> */}
                <button className="get-started-btn" onClick={ () => setModalIsOpen(true) }>
                    Get Started 
                    <FaChevronRight className="fachevron" />
                </button>
                <Modal 
                    isOpen={modalIsOpen}  
                    onRequestClose={() => setModalIsOpen(false)}
                    className="modal-class"
                >
                  <NickNameForm />
                </Modal>
            </div>
    )
}

export default StartBody
