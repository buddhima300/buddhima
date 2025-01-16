import React from "react";

function Card() {
  return (
    <div className="p-4 max-w-full">
      <div className="shadow-md border-2 rounded-lg p-3 max-w-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="md:col-span-1 flex justify-center md:justify-end">
            <i className="bx bxs-business text-blue-800 text-6xl"></i>
          </div>
          <div className="md:col-span-3 py-3">
            <h3 className="text-2xl font-medium">Business Planning</h3>
            <p className="text-sm mt-2 text-gray-400 text-justify">
              The goal of this project is to replicate the provided web design
              using a modern front-end framework. The design should be
              responsive, maintaining its integrity across various
            </p>
            <div className="flex flex-row mt-2 items-center my-5">
              <i className="bx bx-chevron-right-circle text-2xl"></i>
              <h3 className="ml-3 font-medium text-sm">Read more</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
