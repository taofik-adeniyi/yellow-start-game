import React from 'react'

function EnterNumber () {
    return(
        <div className="EnterNumber">
            <h3>We have detected your phone number</h3>
            <h5>+23480332334</h5>
            <h5>Enter your Nickname</h5>
            <form>
                <input type="text" name="number" value="+23480332334" />
                <button>Proceed</button>
            </form>

        </div>
    )
}


export default EnterNumber