import React, { useContext } from 'react'
import Usercontext from '../Context/Usecontext'

function Profile() {
  const {user} =  useContext(Usercontext)
 if (!user) {
  return <div> Welcome </div>
 }
 else{
  return <div>  Welcome {user.username}</div>
 }
}

export default Profile