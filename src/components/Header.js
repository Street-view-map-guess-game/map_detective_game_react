import React from "react";
import { Link } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


function Header() {

  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="navbar bg-base-100 h-20  top-0 z-10 fixed ">
      <a href="#" className="px-28 sm:px-0 btn btn-ghost normal-case text-xl">
        <div className="w-24 flex">
          <img src={require("../assets/images/pageImage/siteLogo.png")} />
        </div>
        <p>Map Detective</p>

      </a>
      <div className="right-10 absolute">
        <button className="bg-transparent hover:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 text-white font-bold py-2 px-4 rounded border border-white" onClick={handleSignOut}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
