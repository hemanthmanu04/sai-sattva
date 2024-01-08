import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect } from "react";

const ChemicalSupply = () => {
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
        <h1 className="absolute text-[#44832a] top-[40%] left-[5%] lg:top-[40%] lg:left-[25%] font-semibold text-3xl lg:text-6xl text-center">
          Industrial Chemical Supply
        </h1>
      </div>

      <div className="relative">
        <div className="h-[1px] bg-white"></div>
        <div className="absolute shadow-lg top-1/2 md:w-2/5 w-[300px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
          <span className="text-[#44832a] lg:tracking-wide font-medium">
            Home • Industrial Chemical Supply
          </span>
        </div>
      </div>
      <div>
        <div>
          <div className="lg:flex lg:my-24">
            <div>
              <h1 className=" py-5 mb-10 mt-12 underline text-[#44832a] font-semibold text-3xl md:text-4xl text-center">
                Industrial Chemical Supply
              </h1>
              <p className="md:mx-12 mx-4 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                Sai Sattva Engineering and conultants is a premier provider of
                industrial chemicals, specializing in the manufacturing and
                supply of chemicals for Effluent Treatment Plants (ETP), Sewage
                Treatment Plants (STP), and Water Treatment Plants (WTP). Our
                expertise extends to trading food-grade chemicals, solvents,
                acids, inorganic salts/chemicals, and more.
              </p>
            </div>
            <img
              src="images/chem.jpg"
              alt="STP"
              className="w-[85%] mb-16 lg:w-[30%] lg:mr-10 h-[320px] mx-auto mt-20 lg:mb-0 rounded-sm"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChemicalSupply;
