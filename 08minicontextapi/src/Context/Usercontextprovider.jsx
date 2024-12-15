import React, { useState } from "react";
import Usercontext from "./Usecontext";

const usercontextprovider = ({children})=> {
 const [user,setuser] = useState(null)
    return(
        <Usercontext.Provider value={{user,setuser}}>
        {children}
        </Usercontext.Provider>
    )

}


export default usercontextprovider