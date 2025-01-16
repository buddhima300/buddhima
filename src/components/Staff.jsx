import React from "react";
import Card from "./Card";

const Staff = () => {
  return (
    <div className="w-full h-auto bg-gray-100 px-[20%] py-[5%]">
      {/* header section */}
      <div className="justify-center items-center flex flex-col">
        <h3 className="text-gray-400 text-2xl self-center mt-5">
          Our services
        </h3>
        <h1 className="text-5xl font-bold mb-10">IT & Staffing section</h1>
      </div>
      {/* cards sections */}
      <div className="grid grid-flow-row grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Staff;
