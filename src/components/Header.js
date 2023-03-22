import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import whiteLogo from "../assets/images/pageImage/mapdetectiveyazilogo-beyaz.png";

import DropdownMenu from "./UI/DropdownShowcase";

function Header() {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-black h-20 top-0 z-10 fixed ">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost hidden sm:inline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-40">
          <li>
            <DropdownMenu display={"inline"} />
          </li>
        </ul>
      </div>
      <Link to={"/gamemodpage"}>
        <div className="w-24 flex sm:navbar-center ">
          <img
            className="absolute top-5 left-5 sm:left-12 sm:top-6 opacity-80"
            width="150"
            src={whiteLogo}
            alt="logo"
          />
        </div>
      </Link>
      <div className="flex flex-grow justify-center">
        <DropdownMenu display={"hidden"} />
      </div>
      <div className="flex">
        <button
          className="bg-transparent hover:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 text-white font-bold py-2 px-4 rounded border border-white"
          onClick={handleSignOut}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
