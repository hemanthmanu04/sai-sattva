import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <>
      <div
        className="bg-[#4b9c28] md:flex md:h-12 md:w-full md:py-4 text-white
       md:items-center md:justify-between"
      >
        <div className="flex flex-row items-center py-2 justify-center md:ml-8">
          <a className="flex" href="tel:+918197696766">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 256 256"
              className="md:h-6 md:w-6 h-4 w-4 "
            >
              <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
            </svg>
            <span className="md:ml-2 ml-1 text-white md:text-base text-[13px] tracking-wide">
              +91 8197696766
            </span>
          </a>

          <a
            className="ml-4 flex "
            href="mailto:saisattvaconsultants@gmail.com"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="md:h-6 md:w-6 h-4 w-4"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>

            <span className="ml-2 text-white md:text-base text-sm">
              saisattvaconsultants@gmail.com
            </span>
          </a>
        </div>

        <div className="flex gap-4 mr-8 items-center md:py-2 py-1 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 256 256"
          >
            <path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 256 256"
          >
            <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            className="h-6 w-8"
            viewBox="0 0 256 256"
          >
            <path d="M234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-72.11,61.81-48,32A4,4,0,0,1,108,160V96a4,4,0,0,1,6.22-3.33l48,32a4,4,0,0,1,0,6.66Z"></path>
          </svg>
        </div>
      </div>

      <div className="sticky z-50 top-0 opacity-[95%] flex justify-between md:px-5 h-[80px] w-full items-center bg-white shadow-xl">
        <div className="flex items-center py-5 text-green-900">
          <img className="md:h-20 md:w-26 h-12 w-12" src="/images/logoo.png" />
          <div className="text-l tracking-lighter ml-2">
            <NavLink
              to="/"
              exact
              className="py-2 px-4 font-medium  transition duration-300 ease-in-out"
              activeClassName="text-green-500"
            >
              <span className="block text-center md:text-base text-sm font-semibold">
                Sai Sattva
              </span>
              <span className="block font-semibold md:text-base text-sm">
                Engineering & Consultants
              </span>
            </NavLink>
          </div>
        </div>

        <div className="hidden md:flex items-center border-r">
          <NavLink
            to="/"
            exact
            className="py-2 px-4 font-medium hover:text-green-500 transition duration-300 ease-in-out"
            activeClassName="text-green-500"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 px-4 font-medium hover:text-green-500 transition duration-300 ease-in-out"
            activeClassName="text-green-500"
          >
            About Us
          </NavLink>
          <div className="relative group">
            <h2 className="  py-2 px-4 font-medium hover:text-green-500 transition duration-300 ease-in-out cursor-pointer">
              Services
            </h2>
            <div
              className="hidden py-2 z-50 bg-white text-gray-800 absolute left-0  w-[250px] group-hover:block"
              //style={{ backgroundImage: `url("images/white.jpg")` }}
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-t border-solid border-transparent border-white"></div>
              <div className=" flex flex-col">
                <NavLink
                  to="/STP"
                  className="py-2 px-4 w-auto font-medium hover:text-green-500 transition duration-300 ease-in-out hover:scale-105"
                >
                  Sewage Treatment Plant
                </NavLink>

                <NavLink
                  to="/WTP"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-green-500 transition duration-300 ease-in-out"
                >
                  Water Treatment
                </NavLink>

                <NavLink
                  to="/ETP"
                  className="py-2 px-4  w-auto font-medium hover:scale-105  hover:text-green-500 transition duration-300 ease-in-out"
                >
                  Effluent Treatment Plant
                </NavLink>

                <NavLink
                  to="/SwimmingPool"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-green-500 transition duration-300 ease-in-out"
                >
                  Swimming Pool Services
                </NavLink>

                <NavLink
                  to="/AMC"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-green-500 transition duration-300 ease-in-out"
                >
                  Annual Maintenance & Contract
                </NavLink>

                <NavLink
                  to="/ELA"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-green-500 transition duration-300 ease-in-out"
                >
                  Environment Legal Advisory
                </NavLink>

                <NavLink
                  to="/ChemicalSupply"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-green-500 transition duration-300 ease-in-out"
                >
                  Chemical Supply
                </NavLink>
              </div>
            </div>
          </div>

          <NavLink
            to="/contact"
            className="py-2 px-4 font-medium hover:text-green-500 transition duration-300 ease-in-out"
          >
            Contact Us
          </NavLink>
        </div>

        <div className="relative md:hidden">
          <ul
            className={`fixed w-64 inset-y-0 bg-[#5a962c] right-0 flex flex-col gap-4 font-medium text-green-900 transition-transform transform ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            style={{
              transitionDuration: "500ms",
              transitionTimingFunction: "ease-in-out",
            }}
          >
            <NavLink
              to="/"
              exact
              className="mt-20 py-1 px-4 hover:bg-slate-50 hover:text-green-600 transition duration-300 ease-in-out"
              activeClassName="bg-green-500 text-white"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className=" py-1 px-4 hover:bg-slate-50 hover:text-green-600 transition duration-300 ease-in-out"
            >
              About Us
            </NavLink>

            <div className="flex">
              <h1
                className="cursor-pointer w-[80%] py-1 px-4 hover:bg-slate-50 hover:text-green-600 transition duration-300 ease-in-out"
                onClick={toggleServices}
              >
                Services
              </h1>

              {servicesOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-6 h-6 cursor-pointer m-auto"
                  onClick={toggleServices}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="white"
                  className="w-6 h-6 cursor-pointer m-auto"
                  onClick={toggleServices}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              )}
            </div>
            {servicesOpen && (
              <div className="flex flex-col ">
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>

                <NavLink
                  to="/STP"
                  className="py-2 px-4 w-auto font-medium hover:text-white transition duration-300 ease-in-out hover:scale-105"
                >
                  Sewage Treatment Plant
                </NavLink>
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>
                <NavLink
                  to="/WTP"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-white transition duration-300 ease-in-out"
                >
                  Water Treatment
                </NavLink>
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>

                <NavLink
                  to="/ETP"
                  className="py-2 px-4  w-auto font-medium hover:scale-105  hover:text-white transition duration-300 ease-in-out"
                >
                  Effluent Treatment Plant
                </NavLink>
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>

                <NavLink
                  to="/SwimmingPool"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-white transition duration-300 ease-in-out"
                >
                  Swimming Pool Services
                </NavLink>
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>

                <NavLink
                  to="/AMC"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-white transition duration-300 ease-in-out"
                >
                  Annual Maintenance & Contract
                </NavLink>
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>

                <NavLink
                  to="/ELA"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-white transition duration-300 ease-in-out"
                >
                  Environment Legal Advisory
                </NavLink>
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>

                <NavLink
                  to="/ChemicalSupply"
                  className="py-2 px-4  w-auto font-medium hover:scale-105 hover:text-white transition duration-300 ease-in-out"
                >
                  Chemical Supply
                </NavLink>
                <div className="h-[1px] bg-[#80ee2b] w-full"></div>
              </div>
            )}

            <NavLink
              to="/contact"
              className=" py-1 px-4 hover:bg-slate-50 hover:text-green-600 transition duration-300 ease-in-out"
            >
              Contact Us
            </NavLink>
          </ul>

          <button
            onClick={toggleMenu}
            className={`p-2 focus:outline-none ml-auto ${
              menuOpen ? "fixed top-0 right-0 m-4" : "relative z-50 top-0"
            }`}
            style={{ zIndex: 50 }}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
