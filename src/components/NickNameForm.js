import React, { useState } from 'react'
import { FaChevronRight, FaInfoCircle } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

function NickNameForm(props) {

    let history = useHistory()

    
    const [nickName, setNickName] = useState('')

    const handleNickNameChange = (event) => {
        setNickName(event.target.value)
    }

    const handleNickNameSubmit = event => {
        event.preventDefault()
        if(nickName){
            history.push('/dashboard')
        }
    }

    return (
        <div className="nickname-form-holder">
            <form onSubmit={handleNickNameSubmit}>
                <FaInfoCircle className="circle-icon" />
            
                <h3 className="detectNumber">We have detected your phone number</h3>
            
                <h2 className="coverNum">
                    <span className="post-number">+234</span>
                    <span className="number">803 323 2334</span>
                </h2>
                
                <div className="nick-name">
                    <label htmlFor="nickName"><h3>Enter your Nickname</h3></label>
                    <input type="text" id="nickName" name="nickName" value={nickName} onChange={handleNickNameChange} placeholder="NoahAdams" className="get-nick" />
                </div>

                <div className="proceed-con">
                    <button className="proceed" type="submit">
                        Proceed
                        <FaChevronRight className="fachevron" />
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NickNameForm
