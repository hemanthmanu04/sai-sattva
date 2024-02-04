import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

const EffluentTreatment = () => {
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
        <h1 className="absolute text-[#44832a] top-[42%] left-[4%] lg:top-[40%] lg:left-[25%] font-semibold text-3xl lg:text-6xl text-center">
          Effluent Treatment Plant
        </h1>
      </div>

      <div className="relative">
        <div className="h-[1px] bg-white"></div>
        <div className="absolute shadow-lg top-1/2 md:w-2/5 w-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
          <span className="text-[#44832a] lg:tracking-wide font-medium">
            Home • Effluent Treatment Plant
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className="lg:flex lg:my-24">
            <div>
              <h1 className="py-5 mb-10 mt-12 underline text-[#44832a] font-semibold text-3xl md:text-4xl text-center">
                Effluent Treatment Plant
              </h1>
              <p className="md:mx-12 mx-4 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                In the realm of industry sectors, we provide customers with
                innovative Effluent Treatment Plants (ETP). Our solution
                effectively addresses the treatment of water contaminated by
                anthropogenic and industrial/commercial activities. Employing a
                blend of efficient mechanisms, physico-chemical and biological
                treatments, solid-liquid separation, and various processes, our
                ETP range stands out. Noteworthy for its low power consumption
                and swift installation, it ensures the comprehensive treatment
                of contaminated water.
              </p>
            </div>
            <img
              src="images/etp.jpg"
              alt="STP"
              className="w-[85%] lg:w-[30%] mb-10 lg:mr-10 lg:h-[350px] h-[280px] mx-auto mt-20 rounded-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EffluentTreatment;
