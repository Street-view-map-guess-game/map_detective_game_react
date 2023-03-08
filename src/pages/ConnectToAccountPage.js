import React, { useEffect,useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/pageImage/siteLogo.png";
import Loadingpage from "./LoadingPage";

export default function ConnectToAccountPage() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [time,settime] = useState(false)

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      settime(true)
      if (user) {
        navigate("/gamemodpage");
      }
    }, 1000);
    
   
  }, [user]);
  return ( time ? (<div className="absolute z-1 h-screen w-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 ">
  <div
    style={{
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    }}
    className=" group absolute sm:w-full sm:overflow-hidden h-72 w-76 bg-white rounded-md  z-10 top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 flex items-center justify-center">
    <div>
      <img
        className="object-fit opacity-100 group-hover:opacity-0 py-8 px-12  h-72 w-76 hover:scale-150 transition duration-500"
        src={logo}></img>
    </div>
    <div className=" absolute translate-y-8  opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100 duration-500">
      <p className="text-2xl font-bold	 text-black"></p>
      <GoogleButton onClick={handleGoogleSignIn} />
    </div>
  </div>
</div>):(<Loadingpage></Loadingpage>)
    
  );
}