import React from "react";
import Header from "../features/home/Header";
import Location from "../features/home/Location";
import Services from "../features/home/Services";

const Home = () => {
  return (
    <div className="flex h-full flex-col gap-4 px-4 py-4">
      <Header />
      <Location />
      <Services />
    </div>
  );
};

export default Home;
