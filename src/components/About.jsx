const AboutUs = () => {
  return (
    <>
      <div className="lg:flex lg:px-20 px-10">
        <div className="lg:w-[50%] bg-white py-16 lg:mt-28 lg:py-0">
          <p className="text-gray-700 text-l font-semibold mb-2 tracking-wide">
            Welcome To
          </p>
          <h1 className="text-[#58a337] font-semibold text-5xl tracking-wide">
            Sai Sattva Engineering
          </h1>
          <h1 className="text-[#58a337] font-semibold text-5xl tracking-wide">
            and Consultants
          </h1>
          <div className="text-gray-700 text-l font-medium mt-5 ">
            <p className="lg:mr-2">
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
            <button className="mt-10 hover:bg-green-900 h-14 w-36 lg:mt-10 bg-[#58a337] text-white rounded-lg">
              Read More
            </button>
          </div>
        </div>

        <div className="lg:relative lg:mt-36 lg:mb-16">
          <div className="relative">
            <div className="hidden lg:block bg-slate-300 rounded-2xl absolute top-0 left-0 w-[550px] h-[380px]"></div>

            <img
              src="images/plant.jpg"
              className="w-[550px] mb-12 lg:mb-0 lg:h-[380px] h-[300px] lg:relative lg:rounded-2xl lg:shadow-2xl rounded-2xl lg:object-cover lg:top-[-70px] lg:right-[-70px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
