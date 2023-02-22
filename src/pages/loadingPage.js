import React from 'react'
import loadingscroll from "../assets/images/pageImage/loadingscroll.png"
import mapdetectivelogo from "../assets/images/pageImage/worldlogo.png"


export default function Loadingpage() {

  return (
    <div class="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-600 via-green-800 to-neutral-900 min-h-screen flex justify-center items-center" style={{
      width: "100%",
      height: "100%"
    }} >
      <img style={{ marginBottom: "40px", marginLeft: "5px" }} src={mapdetectivelogo} alt="logo" width={"230rem"} class='absolute  opacity-60' />
      <img src={loadingscroll} alt="logo" width={"250rem"} class='opacity-90   absolute animate-spin transition duration-500' />
    </div>
  )
}
