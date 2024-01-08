import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const SewageTreatment = () => {
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
        <h1 className="absolute text-[#44832a] top-[40%] left-[10%] lg:top-[40%] lg:left-[26%] font-semibold lg:text-6xl text-4xl text-center">
          Sewage Treatment Plant
        </h1>
      </div>

      <div className="relative">
        <div className="h-[1px] bg-white"></div>
        <div className="absolute shadow-lg top-1/2 w-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
          <span className="text-[#44832a] lg:tracking-wide font-medium">
            Home • Sewage Treatment Plant
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className="lg:flex lg:my-24">
            <div>
              <h1 className="py-5 my-12 text-[#44832a] font-semibold text-4xl text-center">
                Sewage Treatment Plant
              </h1>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                Sai Sattva Engineering and Consultants, a distinguished
                enterprise, specializes in providing cutting-edge Sewage
                Treatment Plants (STP) utilizing various technologies such as
                Activated Sludge Process (ASP), Sequential Batch Reactor (SBR),
                Membrane Bio Reactor (MBR), and Moving Bed Bio Reactor (MBBR).
                Our offerings include fully automated or semi-automated systems
                tailored to site conditions and client specifications. Widely
                applicable across diverse sectors including hotels, industries,
                multiplexes, schools, institutions, corporate offices, and
                residential societies, our products uphold the highest standards
                of quality and efficiency.
              </p>
            </div>
            <img
              src="images/stp5.jpg"
              alt="STP"
              className="w-[70%] lg:w-[30%] lg:mr-10 h-[300px] mt-20 rounded-sm m-auto mb-12"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SewageTreatment;
