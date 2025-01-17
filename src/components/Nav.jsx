/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Logo from "../images/Nethsara logo.png";

function Nav() {
  return (
    <div>
      <nav className="bg-blue-900 w-full sticky">
        {/* left side of navbar with logo */}
        <div className="flex flex-col gap-5 px-5 md:flex-row space-x-10 justify-between">
          <div className="flex flex-col md:flex-row items-center text-white text-4xl font-medium">
            <img src={Logo} alt="logo" srcset="" className="md:h-20" />
            FinBiz
            {/* <h2 className="text-3xl font-bold text-white">FinBiz</h2> */}
          </div>
          {/* Middle of the Navbar with links */}
          <div className="col-span-3 flex flex-col md:flex-row gap-4 font-semibold items-center text-white justify-end">
            <li class="nav-item list-none">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li class="nav-item dropdown list-none">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Web design
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Logo Design
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Mobile App design
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item list-none">
              <a class="nav-link active" aria-current="page" href="#">
                Pages
              </a>
            </li>
            <li class="nav-item list-none">
              <a class="nav-link active" aria-current="page" href="#">
                Contact us
              </a>
            </li>
          </div>
          {/* Right side of Nav bar */}
          <div className="flex justify-center items-center">
            <button className="text-white w-max bg-blue-600 rounded-md p-2 mr-2 font-semibold">
              Book a Meeting
            </button>
          </div>
          <div className=" text-white flex flex-col py-3">
            <div className="flex justify-center">
              <i class="bx bxs-phone-call text-blue-900 text-4xl bg-white rounded"></i>
            </div>
            <div className="grid grid-flow-row justify-center">
              <h3>Call us Anytime</h3>
              <p>+94 558555655</p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
