import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData()
//     const[data,setdata] = useState([0])
//   useEffect(() => {
//     fetch('https://api.github.com/users/adarshtiwari789 ')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//        setdata(data)
//       })
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github follower {data.followers}
      <img src={data.avatar_url} alt="" width={300}/>
    </div>
  );
}

export default Github;

export const githubInfoloader = async() =>{
  const response = await fetch('https://api.github.com/users/adarshtiwari789')
  return response.json
}