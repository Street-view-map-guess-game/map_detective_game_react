import React from "react";

function Header() {
  return (
    <div className="navbar bg-base-100 h-20  top-0 z-10 fixed ">
      <a href="#" className="px-28 sm:px-0 btn btn-ghost normal-case text-xl">
        <div className="w-24 flex">
          <img src={require("../assets/images/pageImage/siteLogo.png")} />
        </div>
        <p>Map Detective</p>
      </a>
    </div>
  );
}

export default Header;
