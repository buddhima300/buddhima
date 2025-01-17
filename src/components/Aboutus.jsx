import React from "react";

function Aboutus() {
  return (
    <section>
      <div className="grid md:grid-cols-2 h-[50%] items-start">
        {/* start of image section */}
        <div className="md:grid grid-cols-2 gap-2 md:p-5">
          <img
            className="w-full aspect-video md:rounded-2xl"
            src="https://img.lovepik.com/photo/20230421/medium/lovepik-concept-of-agile-software-development-photo-image_352163281.jpg"
            alt="2nd "
            srcset=""
          />
          <img
            className="w-full aspect-video md:rounded-2xl"
            src="https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.jpg?s=612x612&w=0&k=20&c=o8Ci6F_YCWFlKE2Yr6A2wbDvrZRwSB3YssLakLkrFBo="
            alt="3rd"
            srcset=""
          />
          <img
            className="w-full aspect-video md:rounded-2xl"
            src="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-enthusiastic-african-engineer-analysing-cad-software-to-design-a-3d-concept-image_16189628.jpg"
            alt="4th"
            srcset=""
          />
          <img
            className="w-full aspect-video md:rounded-2xl"
            src="https://media.istockphoto.com/id/1530256492/vector/software-development-concept-laptop-with-open-screen-hanging-over-desk-coding-or-programming.jpg?s=612x612&w=0&k=20&c=LLywtLnfu5FETIvkaFjy_xcHnaIGmaKZYxcPKAoyPcA="
            alt="4th"
            srcset=""
          />
          <img
            className="w-full aspect-video md:-mt-[80%] md:ml-[45%] md:border-4 md:border-white md:shadow-md md:rounded-tr-[40%] md:h-96 md:rounded-bl-[40%]"
            src="https://png.pngtree.com/thumb_back/fh260/background/20230706/pngtree-creating-3d-renderings-for-mobile-apps-software-and-web-development-image_3826852.jpg"
            alt="4th"
            srcset=""
          />
        </div>
        {/* end of image section */}
        {/* section for details */}
        <div className="grid px-4 py-2 md:w-full mt-[10%]">
          <div className="">
            <h3 className="text-2xl text-gray-600">Why choose us</h3>
            <h1 className="text-6xl font-bold text-blue-900 w-fit">
              We Focus to get excellent performance
            </h1>
            <p className="mt-4 text-gray-400 text-justify md:w-2/3">
              The goal of this project is to replicate the provided web design
              using a modern front-end framework. The design should be
              responsive, maintaining its integrity across various devices and
              screen sizes. The developer is expected to use best practices in
              HTML, CSS, and JavaScript, and utilize a front-end framework
            </p>
          </div>
          <div className="flex flex-row md:h-fit w-full mt-10">
            <div className="flex flex-row border-2 border-gray-100 p-2 rounded-md w-fit">
              <i className="bx bxl-microsoft-teams mr-3 text-blue-500"></i>
              <h2 className="font-semibold">Commited Teams</h2>
            </div>
            <div className="flex flex-row border-2 ml-3 border-gray-100 p-2 rounded-md w-fit">
              <i className="bx bx-globe mr-3 text-blue-500"></i>
              <h2 className="font-semibold">24/7 Quality Service</h2>
            </div>
          </div>
          <div className="md:mt-5 w-full">
            <button className="bg-blue-600 rounded-md p-2 text-white mt-2 w-96 md:bg-orange-500 md:w-full">
              Get Started
            </button>
          </div>
        </div>
        {/* end of detail section */}
      </div>
    </section>
  );
}

export default Aboutus;
