import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between lg:px-12 px-4 lg:my-20">
        <div className="lg:w-[50%] bg-white py-16 lg:py-0">
          <p className="text-gray-700 text-l font-semibold tracking-wide">
            Welcome to
          </p>
          <h1 className="text-[#58a337] font-semibold text-4xl md:text-5xl">
            Sai Sattva Engineering and Consultants
          </h1>
          <div className="text-gray-700 text-l font-medium mt-2 md:mt-5">
            <p className="lg:mr-4">
              Founded in 2023, our company has been on a mission to integrate
              the latest technologies, aiming to offer top-notch services to our
              esteemed customers. Committed to excellence, we wholeheartedly
              embrace our responsibilities and continually strive to elevate our
              services, ensuring the utmost satisfaction of our clients. With a
              relentless dedication to quality and innovation, we are driven by
              the desire to create lasting relationships and provide solutions
              that go beyond expectations. Our customer-centric approach is the
              cornerstone of our values, reflecting our unwavering commitment to
              delivering the best in technology and service
            </p>
            <NavLink
              to="/about"
              exact
              className="py-2 px-4 font-medium  transition duration-300 ease-in-out"
              activeClassName="text-green-500"
            >
              <button className="mt-4 hover:bg-green-900 h-14 w-36 bg-[#58a337] text-white rounded-lg">
                Read More
              </button>
            </NavLink>
          </div>
        </div>

        <div className="lg:relative lg:mt-10 mb-12 lg:mr-14 ">
          <div className="relative">
            <div className="hidden lg:block bg-slate-300 rounded-2xl absolute top-0 left-0 w-[550px] h-[380px]"></div>

            <img
              src="images/plant.jpg"
              className=" h-[275px] mx-auto md:w-[550px] md:h-[360px] lg:relative lg:rounded-2xl lg:shadow-2xl rounded-2xl lg:object-cover lg:top-[-60px] lg:right-[-70px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
