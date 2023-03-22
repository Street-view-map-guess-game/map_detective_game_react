import React, { useEffect, useState } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/pageImage/siteLogo.png";
import Loadingpage from "./LoadingPage";

export default function ConnectToAccountPage() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/gamemodpage");
    }
    setIsLoading(false);
  }, [user, navigate]);

  return (
    <>
      {isLoading ? (
        <Loadingpage />
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 ">
          <div
            className="group w-76 sm:w-full sm:overflow-hidden bg-white rounded-md z-10 flex flex-col items-center justify-center p-8"
            style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}
          >
            <img
              className="h-72 w-76 object-cover mb-8"
              src={logo}
              alt="Site Logo"
            />
            <div className="flex flex-col items-center">
              <p className="text-xl text-center font-bold mb-2">
                Sign in with your Google Account
              </p>
              <GoogleButton onClick={handleGoogleSignIn} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
