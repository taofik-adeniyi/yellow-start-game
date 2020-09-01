import React, { useState} from 'react'
import PredictSuccess from './PredictSuccess'
import Modal from 'react-modal'

function PredictMusic() {

    const [predictSuccess, setPredictSuccess] = useState(false)

    return (
        <div>
            <h2>Predict Cennai Music for Tonight Show</h2>
            <select>
                <option>MogbeBy Tiwa ft BOJ</option>
            </select>
            <button onClick={() => setPredictSuccess(true)}>Predict</button>
            <p>This will cost you 50 naira</p>
            <Modal 
                isOpen={predictSuccess}
                onRequestClose={() => setPredictSuccess(false)}
                className="modal"
            >
                <PredictSuccess />
            </Modal>
        </div>
    )
}

export default PredictMusic
