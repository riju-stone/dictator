import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import LoadingAnim from "../assets/animations/loading.json";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center align-middle">
      <Player className="h-[300px]" loop autoplay src={LoadingAnim}></Player>
    </div>
  );
};

export default Loader;
