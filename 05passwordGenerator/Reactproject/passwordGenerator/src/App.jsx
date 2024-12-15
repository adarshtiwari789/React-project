import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, Setlength] = useState(8)
  const [numberAllowed , setnumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed ] = useState("")
  const [Password,Setpassword] = useState("")
  
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str+="0123456789"
    if (charAllowed) str+="!@#$%^&*()-_=+\|[]{};:/?.>"
    
    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
  Setpassword(pass)
  },[length,numberAllowed,charAllowed,Setpassword])

  const copytoclipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(()=>{PasswordGenerator()},[length,numberAllowed,charAllowed,PasswordGenerator])
  return (
    <>
<div className='w-full max-w-md mx-auto shadow-md
 rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
  <h1 className='text-white text-center'>
password generator
  </h1>
  <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
    <input type="text"
    value={Password}
    className='outline-none w-full py-1 px-3'
    placeholder='password'
    readOnly
    ref={passwordRef}
    />
    <button
    onClick={copytoclipboard}
     className=' bg-blue-500 text-white px-3 py-1 '>Copy</button>

  </div>
  <div className='flex text-sm gap-x-2'>
   <div className='flex items-center gap-x-1'>
    <input 
    type="range" 
    min={6} 
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{Setlength(e.target.value)}}/>
    <label >length :{length}</label>
   </div>
   <div className='flex items-center gap-x-1' >
    <input 
    type="checkbox"
     defaultChecked={numberAllowed}
     id='numberInput'
     onChange={()=>{
      setnumberAllowed((prev) =>!prev)
     }} />
     <label htmlFor='numberInput'>numbers</label>
   </div>
   <div className='flex items-center gap-x-1' >
    <input 
    type="checkbox"
     defaultChecked={charAllowed}
     id='characterInput'
     onChange={()=>{
      setCharAllowed((prev) =>!prev)
     }} />
     <label htmlFor='characterInput'>character</label>
   </div>
  </div>
  </div>      
</>
  )
}

export default App
