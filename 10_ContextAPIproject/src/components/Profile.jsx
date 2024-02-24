import React, {useContext} from 'react'
import UserContext from '../context/UserContext'


function Profile() {
    const {user} = useContext(UserContext)

    //Now, we do conditional return
    if(!user) return (<div>Please Do Login...</div>)
    
    return <div> Welcome Dear {user.username}...</div>
}

export default Profile;