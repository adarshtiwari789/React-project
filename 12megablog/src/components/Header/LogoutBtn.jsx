import React from 'react'
import { useDispatch } from 'react-redux'
import authservices, { Authservices } from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => { authservices.logout().
    then(() => dispatch(logout())) }  
    return (
    <button className='inline-block px-6 py-2 duration-200
     rounded-full' >Logout</button>
  )
}


export default LogoutBtn