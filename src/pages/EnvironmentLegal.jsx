import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const EnvironmentLegal = () => {
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
        <h1 className="absolute text-[#44832a] top-[40%] left-[3%] lg:top-[40%] lg:left-[25%] font-semibold text-4xl lg:text-6xl text-center">
          Environment Legal Advisory
        </h1>
      </div>

      <div className="relative">
        <div className="h-[1px] bg-white"></div>
        <div className="absolute shadow-lg top-1/2 w-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
          <span className="text-[#44832a] lg:tracking-wide font-medium">
            Home • Environment Legal Advisory
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className="lg:flex lg:my-24">
            <div>
              <h1 className="py-5 mb-10 lg:mt-0 lg:max-w-none max-w-[400px] mx-auto mt-10 text-[#44832a] font-semibold text-4xl text-center">
                Environment Legal Advisory
              </h1>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                We provide legal advisory services related to environmental
                acts, rules, and regulations, including:
              </p>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                • Water (Prevention & Control of Pollution) Act, 1974{" "}
              </p>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                • Air (Prevention & Control of Pollution) Act, 1981
                Environmental (Protection) Act, 1986
              </p>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                This encompasses:
              </p>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                • Environmental Impact Assessment Notification, 2006
              </p>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                • Coastal Regulation Zone (CRZ) Notification, 2011
              </p>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                Additionally, we offer services such as environmental management
                plans and environmental audits.
              </p>
            </div>
            <img
              src="images/world.jpg"
              alt="STP"
              className="w-[70%] object-cover lg:w-[30%] lg:mr-10 h-[350px] mx-auto mt-20 lg:mt-16 mb-12 rounded-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EnvironmentLegal;
