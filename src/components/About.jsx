import React from "react";

const About = () => {
  return (
    <div>
      {/* just for background in the left side section */}
      <div className="w-full  ">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div className="mt-5">
                <img
                  className="w-md-1/2 h-md-1/2 relative"
                  src="https://img.lovepik.com/photo/20230421/medium/lovepik-concept-of-agile-software-development-photo-image_352163281.jpg"
                  alt="2nd "
                  srcset=""
                />
                <img
                  className="w-md-1/2 h-md-1/2 relative -translate-y-1/2 rounded-lg border-white border-8"
                  src="https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.jpg?s=612x612&w=0&k=20&c=o8Ci6F_YCWFlKE2Yr6A2wbDvrZRwSB3YssLakLkrFBo="
                  alt="3rd"
                  srcset=""
                />
                <img
                  className="w-md-1/2 h-md-1/2 relative -translate-y-[270%] rounded-lg border-white border-4"
                  src="https://png.pngtree.com/thumb_back/fh260/background/20240913/pngtree-enthusiastic-african-engineer-analysing-cad-software-to-design-a-3d-concept-image_16189628.jpg"
                  alt="4th"
                  srcset=""
                />
              </div>
            </div>

            {/* right side section */}
            <div class="col mt-5 items-start ">
              <div className="">
                <h3 className="text-2xl text-gray-300">Why choose us</h3>
                <h1 className="text-5xl font-bold">
                  We Focus to get excellent performance
                </h1>
                <p className="mt-4 text-gray-400">
                  The goal of this project is to replicate the provided web
                  design using a modern front-end framework. The design should
                  be responsive, maintaining its integrity across various
                  devices and screen sizes. The developer is expected to use
                  best practices in HTML, CSS, and JavaScript, and utilize a
                  front-end framework
                </p>
                {/* something like buttons */}
                <div className="mt-5 flex flex-row px-[20%]">
                  <div className="flex flex-row border-2 border-blue-500  p-3 mr-5 rounded-md">
                    <i className="bx bxl-microsoft-teams mr-3 text-blue-500"></i>
                    <h2 className="font-semibold">Commited Teams</h2>
                  </div>
                  <div className="flex flex-row border-2 border-blue-500  p-3 mr-5 rounded-md">
                    <i className="bx bx-globe mr-3 text-blue-500"></i>
                    <h2 className="font-semibold">24/7 Quality service</h2>
                  </div>
                </div>
                <button className="bg-blue-600 rounded-md p-2 text-white ml-2 mt-4 -translate-x-[290%]">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
