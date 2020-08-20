import React from 'react'

function User({match}) {
    return (
        <div>
            <h3>Welcome User - {match.params.username}</h3>
        </div>
    )
}

export default User
