import React, { useState } from 'react'
import { FaChevronRight, FaInfoCircle } from 'react-icons/fa'
// import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'

function NickNameForm(props) {

    let history = useHistory()

    // const Formik = useFormik({})
    
    const [nickName, setNickName] = useState('')

    const handleNickNameChange = (event) => {
        setNickName(event.target.value)
    }

    const handleNickNameSubmit = event => {
        // alert(nickName)
        event.preventDefault()
        if(nickName){
            history.push('/dashboard')
        }
    }

    return (
        <form onSubmit={handleNickNameSubmit}>
            <FaInfoCircle className="circleIcon" />
        
            <h3 className="detectNumber">We have detected your phone number</h3>
        
            <h2 className="coverNum">
                <span className="postNum">+234</span>
                <span className="Number">803 323 34</span>
            </h2>
            
            <label htmlFor="nickName"><h3>Enter your Nickname</h3></label>
            <input type="text" id="nickName" name="nickName" value={nickName} onChange={handleNickNameChange} placeholder="NoahAdams" className="getNick" />
        
            <div>
                <button className="proceed" type="submit">
                    Proceed
                    <FaChevronRight className="fachevron" />
                </button>
            </div>
    </form>
    )
}

export default NickNameForm
