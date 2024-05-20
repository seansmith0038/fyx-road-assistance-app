import React from "react";
import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";

const GoBack = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="relative w-full flex items-center justify-between gap-4 text-teal-800">
      <LiaLongArrowAltLeftSolid
        onClick={handleBack}
        className="absolute left-2 cursor-pointer text-3xl text-teal-800"
      />
      <h2 className="mx-auto text-lg font-normal">{title}</h2>
    </div>
  );
};

export default GoBack;
