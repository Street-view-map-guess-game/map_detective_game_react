import React from 'react'

import loadingscroll from "../assets/images/loadingscroll.png"
import mapdetectivelogo from "../assets/images/mapdetectivegamelogo.png" 



export default function Loadingpage() {
  
  
  
    return (
       
    <div class="bg-gradient-to-r 	 from-indigo-500 via-purple-500  to-rose-900 min-h-screen flex justify-center items-center " style={{width:"100%",
    height:"100%"}} >

<img style={{marginBottom:"40px"  ,marginLeft :"5px" }} src={mapdetectivelogo} alt="logo"  width={"260rem"} class='absolute  opacity-60'  />  
        <img src={loadingscroll} alt="logo"  width={"250rem"} class='opacity-90   absolute animate-spin transition duration-500'  /> 
        
      
    
    </div>
  )
}
