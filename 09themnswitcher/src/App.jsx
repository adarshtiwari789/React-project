import { useEffect, useState } from 'react'
import './App.css'
import Theme from './Components/Theme'
import Card from './Components/Card'
import { Themeprovider } from './context/theme'
function App() {
    const [themeMode, setThememode] =useState("light")

    const lightheme = ()=>{
      setThememode("light")
    }
    const darktheme = ()=>{ 
      setThememode("dark")
    }

    useEffect(()=>{
      document.querySelector("html").classList.remove("light","dark")
      document.querySelector("html").classList.add(themeMode)
    },[themeMode])
    

  return (
    <Themeprovider value={{themeMode,lightheme,darktheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                <Theme/>   
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                     <Card />  
                    </div>
                </div>
            </div>
      </Themeprovider>
  )
}

export default App
