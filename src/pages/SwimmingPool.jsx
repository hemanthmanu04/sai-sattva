import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const SwimmingPool = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div
          className="h-[300px] bg-cover bg-center object-cover duration-500"
          style={{ backgroundImage: `url("images/bg.jpg")` }}
        ></div>
        <h1 className="absolute text-[#44832a] top-[42%] left-[10%] lg:top-[40%] lg:left-[26%] font-semibold lg:text-6xl text-4xl text-center">
          Swimming Pool Services
        </h1>
      </div>

      <div className="relative">
        <div className="h-[1px] bg-white"></div>
        <div className="absolute shadow-lg top-1/2 w-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
          <span className="text-[#44832a] lg:tracking-wide font-medium">
            Home • Swimming Pool Services
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className="lg:flex lg:my-24">
            <div>
              <h1 className="py-5 lg:mt-0 my-10 text-[#44832a] font-semibold text-4xl text-center">
                Swimming Pool Services
              </h1>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                At Sai Sattva Engineering and Consultants, we excel in providing
                comprehensive services for swimming pools. Our expertise covers
                the supply, meticulous installation, and efficient commissioning
                of swimming pools. We ensure that every aspect, from the
                selection of materials to the final setup, is handled with
                precision and attention to detail. With a commitment to quality
                and client satisfaction, we bring forth a seamless process that
                transforms your vision of a swimming pool into a reality. Trust
                us for the supply, fixing, and commissioning of swimming pools,
                where excellence meets your expectations.
                <br />
                <br />
                We ensure comprehensive pool maintenance, conducting water tests
                and applying necessary chemicals to optimize water conditions.
                We prioritize the chemistry of your pool, keeping it clean and
                creating a safe and pleasant swimming environment. Our skilled
                technicians clean skimmer and pump baskets, perform backwashing,
                and maintain the automatic pool cleaner. Using top-quality
                equipment, we guarantee effective maintenance and hygiene for
                your pool.
              </p>
            </div>
            <img
              src="images/swim3.jpeg"
              alt="STP"
              className="w-[60%] lg:w-[30%] lg:mr-10 h-[400px] mb-20 lg:h-[500px] mx-auto mt-20 rounded-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SwimmingPool;
