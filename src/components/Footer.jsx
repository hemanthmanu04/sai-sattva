import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="bg-[#4b9c28] lg:mt-0 py-14 h-[80%] lg:flex justify-around text-md text-white lg:px-10 px-10">
        <div className="">
          <div className="flex">
            <img
              className="h-24 w-22 bg-slate-50 rounded-lg "
              src="/images/logoo.png"
            />
            <div className="text-l tracking-lighter ml-5 text-xl py-[12px] block">
              <span className="block text-center font-semibold">
                Sai Sattva
              </span>
              <span className="block font-semibold">
                Engineering & Consultants
              </span>
            </div>
          </div>
          <div className="block text-left mt-5 ml-1">
            <p>Sai Sattva Engineering and Consultants</p>
            <p>stand as pioneers in the realm of professional </p>
            <p> Water and Wastewater Engineering.</p>
          </div>
        </div>

        <div>
          <div className="text-[20px] lg:pt-0 pt-14 font-semibold lg:w-[200px] lg:mb-4">
            Quick Links
          </div>
          <ul className="py-2">
            <li className="mb-2">
              <NavLink
                to="/"
                className="transition-all duration-200 ease-in-out hover:underline hover:font-semibold py-1"
              >
                Home
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/about"
                className="transition-all duration-200 ease-in-out hover:underline hover:font-semibold py-1"
              >
                About Us
              </NavLink>
            </li>
            <li className="mb-2">
              <NavLink
                to="/STP"
                className="transition-all duration-200 ease-in-out hover:underline hover:font-semibold py-1"
              >
                Sewage Treatment Plant
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/SwimmingPool"
                className="transition-all duration-200 ease-in-out hover:underline hover:font-semibold py-1"
              >
                Swimming Pool Services
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[20px] lg:pt-0 pt-14 font-semibold">
            Reach Us
          </div>
          <div className="py-5 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <div className="ml-5">
              <p> H.O: No.16, Samruddhi 3rd floor</p>
              <p>11th cross, Vijaya Bharathi school road</p>
              <p>Bhuvaneshwari nagara, T.Dasarahalli</p>
              <p>Bangalore 560057</p>
            </div>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            <p className="ml-5">+91 81976 96766</p>
          </div>
          <div className="flex mt-5">
            <a href="mailto:saisattvaconsultants@gmail.com" className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <span className="ml-5">saisattvaconsultants@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#4b9c28] h-[80%] justify-around text-md text-white py-5">
        <hr className="border-t border-white my-4 w-[93%] mx-auto" />
        <p className="text-center">
          Copyright &copy; 2023-All rights reserved Sai Sattva Engineering and
          consultants
        </p>
      </div>
    </>
  );
};

export default Footer;
