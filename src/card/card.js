import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, imageUrl, imageAlt, description, countryName, gameMod }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative ">
      <img
        className="object-cover h-96 w-96 hover:scale-110 transition duration-500"
        src={imageUrl}
        alt={imageAlt}
      />
      <div className="px-6 py-4 absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white">
        <div className="font-bold text-xl mb-2 text-center">
          {title}
          <p className="text-gray-200 text-base">{description}</p>
          <div className="mt-4">
            <Link
              to={{
                pathname: `/${gameMod}/${countryName}`,
              }}>
              <button className="bg-transparent hover:bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-500 via-sky-800 to-red-900 text-white font-bold py-2 px-4 rounded border border-white">
                Start Game
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
