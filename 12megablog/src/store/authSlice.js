import {createSlice} from '@reduxjs/toolkit'

const initialState = {
 status : false, 
  userData : null , 
}

const authslice  = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state , action) => {
            state.status = true;
            state.userData = action.payload.userdata;
        } , 
        logout : (state , action) =>{
                state.status = false;
                state.userData = null  
        }

    }

})

export default authslice.reducer
export const {login,logout } = authslice.actions
