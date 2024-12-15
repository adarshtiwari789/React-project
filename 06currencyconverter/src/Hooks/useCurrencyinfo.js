import { useEffect,useState} from "react";


function useCurrencyInfo(currency) {
    const[data,setdata] = 
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/{currency}-api@{date}/v1/{endpoint}`).then((res)=>res.json())
            .then((res)=>setdata(res[currency]))

    return data
        } , [])

    
}
export default useCurrencyInfo ;