import React from "react";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <BarLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
