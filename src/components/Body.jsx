import React from "react";

const Body = () => {
  return (
    <div>
      <div className="w-screen bg-blue-200 h-[20cm] bg-[url('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg')] bg-cover">
        <div className="absolute text-white ml-[10%] mt-[15%] w-fit">
          <h3 className="text-gray-200">Make Your Strategy strong</h3>
          <h1 className="text-6xl font-bold">EXPERT SOLUTIONS</h1>
          <p className="text-left mt-3 pr-4">
            Lorem ipsum dolor sit amet consectetur, iure totam dolorum dolor.
            Soluta magnam <br /> dolore molestiae nesciunt voluptas cum nisi, ad
            quibusdam sint!
          </p>
          <div className="flex flex-row mt-3">
            <button className="bg-blue-600 text-white p-2 rounded-md w-fit mr-3">
              Get Started
            </button>
            <button className="border-2 rounded-md p-2 ">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
