import {configureStore} from '@reduxjs/toolkit'
import authslice from './authSlice'

const store = configureStore({
    reducer : {
        auth : authslice
    }
})

export default  store 

// Compare this snippet from 12megablog/src/appwrite/configure.js: