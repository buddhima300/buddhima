/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import Logo from "../images/Nethsara logo.png";

function Nav() {
  return (
    <div>
      <nav className="bg-blue-900 w-full sticky">
        {/* left side of navbar with logo */}
        <div className="grid grid-cols-5 gap-5">
          <div className="flex flex-row items-center">
            <img src={Logo} alt="logo" srcset="" className="h-20" />
            <h2 className="text-3xl font-bold text-white">FinBiz</h2>
          </div>
          {/* Middle of the Navbar with links */}
          <div className=" col-span-3 ml-10 md:flex flex-row gap-4 font-semibold items-center text-white justify-end">
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
          <div className="hidden lg:flex flex-row items-center">
            <button className="text-white bg-blue-600 rounded-md p-2 mr-2 font-semibold">
              Book a Meeting
            </button>
            <i class="bx bxs-phone-call text-blue-900 text-4xl bg-white rounded-md"></i>
            <div className="flex flex-col text-white ml-2">
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
