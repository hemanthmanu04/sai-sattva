import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const WaterTreatment = () => {
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
        <h1 className="absolute text-[#44832a] top-[40%] left-[13%] lg:top-[40%] lg:left-[30%] font-semibold text-4xl lg:text-6xl text-center">
          Water Treatment Plant
        </h1>
      </div>

      <div className="relative">
        <div className="h-[1px] bg-white"></div>
        <div className="absolute shadow-lg top-1/2 w-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
          <span className="text-[#44832a] lg:tracking-wide font-medium">
            Home • Water Treatment Plant
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className="lg:flex lg:my-24">
            <div>
              <h1 className="py-5 mt-12 mb-10 text-[#44832a] font-semibold text-4xl text-center">
                Water Treatment Plant
              </h1>
              <p className="mx-12 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                Sai Sattva Engineering and Consultants offer Industrial RO
                Plants, Softeners, and filtration systems designed with
                cutting-edge technology for superior efficiency.
                <br />
                <br />
                Within the Sai Sattva Engineering and Consultants portfolio, we
                have successfully implemented, operated, and maintained a
                diverse range of softening plants. These plants exhibit
                versatility in flow, flexibility in resin quantities, and
                user-friendly operation. The water softening process involves
                the exchange of hardness ions, such as dissolved calcium and
                magnesium in water, with sodium molecules, facilitated by resin
                as the exchanging medium.
                <br />
                <br />
                We have also demonstrated expertise in installing, operating,
                and maintaining RO plants of various sizes, serving different
                types of raw water, including sewage and industrial effluent.
                Our focus remains on critical economic factors like chemical
                consumption, energy recovery, membrane durability, and process
                automation. Reverse osmosis continues to be a well-established
                and proven technology for producing desalinated water suitable
                for both drinking and industrial process applications.
              </p>
            </div>
            <img
              src="images/wtp2.webp"
              alt="STP"
              className="w-[70%] lg:w-[30%] lg:mr-10 h-[400px] mx-auto mt-24 mb-12 rounded-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WaterTreatment;
