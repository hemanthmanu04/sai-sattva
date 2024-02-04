import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
const AnnualMaintenence = () => {
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
        <h1 className=" absolute text-[#44832a] top-[38%] left-[2%] lg:top-[40%] lg:left-[16%] font-semibold text-3xl lg:text-6xl text-center">
          Annual Maintenence and Contract
        </h1>
      </div>

      <div className="relative">
        <div className="h-[1px] bg-white"></div>
        <div className="absolute shadow-lg top-1/2 md:w-2/5 w-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
          <span className="text-[#44832a] lg:tracking-wide font-medium">
            Home • Annual Maintenence & Contract
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className="lg:flex lg:my-24">
            <div>
              <h1 className=" py-5 mb-10 mt-12 text-[#44832a] underline font-semibold text-3xl md:text-4xl text-center">
                Annual Maintenence & Contract{" "}
              </h1>
              <p className="md:mx-12 mx-4 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                At Sai Sattva Engineering and Consultants, we prioritize
                delivering top-notch services promptly, offering competitive
                rates for annual maintenance. Our team of highly efficient
                professionals is dedicated to meeting our clients expectations
                within specified timeframes.
                <br />
                <br />
                When it comes to Operation and Maintenance services, Sai Sattva
                Engineering and Consultants stand out. Our experienced
                professionals ensure the optimal functioning of Sewage Treatment
                Plants (STP), providing effective support for industrial,
                commercial, and residential units. We focus on maintaining a
                balanced treatment process, removing contaminants efficiently,
                and ensuring environmentally safe output. Our commitment extends
                to using quality-tested components in scheduled maintenance
                programs, ensuring the plants meet treatment needs effectively.
              </p>
            </div>
            <img
              src="images/main.jpg"
              alt="STP"
              className="w-[75%] lg:w-[30%] lg:mr-10 mb-12 md:h-[350px] h-[280px] mx-auto mt-20 rounded-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AnnualMaintenence;
