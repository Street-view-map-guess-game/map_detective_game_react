import React from 'react'

import loadingscroll from "../assets/images/pageImage/loadingscroll.png"
import mapdetectivelogo from "../assets/images/pageImage/worldlogo.png"


export default function Loadingpage() {

  return (
    <div className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex justify-center items-center"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 9999
      }}
    >
      <img style={{ marginBottom: "40px", marginLeft: "5px" }} src={mapdetectivelogo} alt="logo" width={"230rem"} className='absolute  opacity-60' />
      <img src={loadingscroll} alt="logo" width={"250rem"} className='opacity-90   absolute animate-spin transition duration-500' />
    </div>
  )
}
