import React, { useContext, useState } from 'react'
import Usercontext from '../Context/Usecontext'

 
function Login() {
 const [username, setusername] =  useState('')
 const [password , setpassword] = useState('') 
 
 const {setuser} =  useContext(Usercontext)

 const handlesubmit = (e) =>{
    e.preventDefault()
    setuser({username,password})
 }

 return (
    <div>
        <h2>Login</h2>

        <input type='text'
        value={username}
        onChange={(e)=>{
            setusername(e.target.value)
        }}
        placeholder='username'/>

        <br />

        <input type='text'
        value={password}
        onChange={(e)=>{
          setpassword(e.target.value)
      }}
        placeholder='password'/>  
        <br />

        <button onClick={handlesubmit}>Submit</button>

        <br />
        
    </div>
  )
}

export default Login