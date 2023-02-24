import React from "react";
import data from "../assets/animations/404error full.json";
import Lottie from "react-lottie";

function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
  };

  return (
    <div className=" absolute h-full w-full bg-slate-100">
      <div
        className="sm:mt-48 mt-28"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}>
        <Lottie
          options={defaultOptions}
          height={"100%"}
          width={"40%"}
          style={{
            overflow: "hidden",
          }}
        />
        <p className="text-slate-500 font-bold text-5xl mt-32 sm:text-3xl">
          We are sorry, Page was not found
        </p>
      </div>
    </div>
  );
}

export default NotFound;
