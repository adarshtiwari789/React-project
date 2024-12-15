import {createContext, useContext } from "react"

export const Themecontext = createContext({
    themeMode : "light" ,
    darktheme : () => {},
    lightheme : () => {},
}) 

export const Themeprovider = Themecontext.Provider
 
export default function usetheme(){
    return useContext(Themecontext) 
}