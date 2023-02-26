
import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/pageImage/siteLogo.png"

export default function ConnectToAccountPage() {

    const { googleSignIn, user } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
          await googleSignIn();
        } catch (error) {
          console.log(error);
        }
      };


    useEffect(() => {
        if (user != null) {
          navigate('/countryselection');
        }
      }, [user]);
  return (
    <div  className="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 min-h-screen flex justify-center items-center">
    <img className="  w-80" src={logo}   alt="logo"></img>
      <div className='grid justify-items-center'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  )
}
