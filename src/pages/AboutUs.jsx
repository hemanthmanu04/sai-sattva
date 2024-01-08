import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet";

import { useEffect, useState } from "react";
const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or some asynchronous task
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      <div>
        <Helmet>
          <title>About Us | SaiSattvaE&C</title>
        </Helmet>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <Navbar />
          <div className="relative">
            <div
              className="h-[300px] bg-cover bg-center object-cover duration-500"
              style={{ backgroundImage: `url("images/bg.jpg")` }}
            ></div>
            <h1 className="absolute text-[#44832a] top-[45%] left-[30%] lg:top-[40%] lg:left-[40%] font-semibold text-4xl md:text-6xl  text-center">
              About Us
            </h1>
          </div>
          <div className="relative">
            <div className="h-[1px] bg-white"></div>
            <div className="absolute shadow-lg top-1/2md:w-2/5 w-[200px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-100 rounded-full p-2 text-center">
              <span className="text-[#44832a] lg:tracking-wide font-medium">
                Home • About Us
              </span>
            </div>
          </div>
          <div className="lg:m-12 my-14 mx-4 lg:mb-4">
            <div className="lg:flex">
              <div className="lg:pt-20">
                <span className=" text-md lg:text-lg mx-1 text-slate-700 font-medium tracking-wide ">
                  About us
                </span>
                <h1 className="text-[#58a337] font-semibold  text-3xl tracking-wide">
                  Sai Sattva Engineering and Consultants
                </h1>
                <p className="mb-4 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
                  Established in 2023, Sai Sattva is committed to delivering
                  cutting-edge technologies and unparalleled services to its
                  customers. The company is devoted to fulfilling its
                  responsibilities with utmost dedication, striving to ensure
                  that its services consistently exceed customer expectations.
                </p>
              </div>
              <img
                src="images/tu.jpg"
                className=" object-cover h-[250px] mt-12 lg:mx-12 lg:my-12 w-full"
              />
            </div>
          </div>
          <p className="md:mx-12 mx-4 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
            Sai Sattva stands as a trailblazer in professional environmental
            services, offering comprehensive solutions in the design,
            manufacturing, operation, and maintenance of
            Effluent/Sewage/RO/Softeners, Water Treatment Plants, and associated
            equipment. The company specializes in Environmental Management Plan
            (EMP), liaising with the Karnataka State Pollution Control Board
            (KSPCB), conducting Environmental Audits, Environmental Impact
            Assessments, Rapid Environmental Impact Assessments, Environmental
            Management Plans, Rainwater Harvesting, and more. Sai Sattva excels
            in providing turnkey solutions for water and wastewater management,
            emphasizing environmental consciousness in product innovations,
            purification, and recycling technologies.
          </p>
          <p className="md:mx-12 mx-4 my-10 text-md lg:text-lg text-slate-700 font-medium tracking-wide">
            The enduring and prosperous relationships Sai Sattva builds with its
            clients are a testament to the quality of its products and the
            ultimate satisfaction of end customers. The company remains
            dedicated to supporting customers through a committed helpline,
            timely assistance, warranty services, and addressing a spectrum of
            issues, ranging from installation to routine maintenance.
          </p>
          <div className="bg-slate-100 flex flex-col ">
            {/* Vision Box */}
            <div className="m-6 lg:p-10 p-6 bg-[#EAECCC] rounded-lg lg:flex">
              <div className="lg:w-2/4">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  Vision
                </h2>
                <p className="text-left text-lg font-medium text-slate-700 ">
                  Leadership in Environmental Science and Engineering for
                  Sustainable Development
                </p>
              </div>
              <img
                src="images/compass.jpg"
                className="md:h-[350px] h-[220px] w-auto rounded-md mt-4 lg:mx-4"
              />
            </div>

            <div className="m-6 lg:p-10 p-6 bg-[#EAECCC] rounded-lg lg:flex">
              <div className="lg:w-2/4">
                <h2 className="text-2xl text-center font-semibold mb-4">
                  Mission
                </h2>
                <p className="text-lg text-left font-medium text-slate-700">
                  Continue to strive for providing effective innovative and
                  solutions for sustainable development and to help Government,
                  industry and the society,
                </p>
              </div>
              <img
                src="images/mission.jpg"
                className="md:h-[350px] h-[220px] w-auto rounded-md mt-4 lg:mx-4"
              />
            </div>
          </div>
          <div>
            <div className="m-6 text-center text-[#58a337] text-4xl font-semibold">
              MD&apos;s Desk
            </div>

            <div className="mt-12 mx-4">
              <div className="lg:flex">
                <div className="flex justify-center mb-8">
                  <div className="bg-[#e0e2c5] rounded-lg h-[420px] w-[350px]">
                    <img
                      src="images/dad.png"
                      className="mx-auto pt-5 h-[330px] w-auto"
                    />
                    <div className="text-center mt-3">
                      <h2 className="text-[#58a337] font-semibold text-3xl">
                        Suresh V
                      </h2>
                      <span className="text-center text-lg  text-grey-100">
                        Managing Director
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:mx-8 lg:mt-16">
                  <p className="my-4 text-slate-700 tracking-wide font-medium">
                    Suresh V is a seasoned professional in the field of
                    Environmental Science with over 25 years of dedicated
                    experience. A highly skilled individual, he has made
                    significant contributions to the industry and has earned a
                    stellar reputation.
                  </p>
                  <p className="my-4 text-slate-700 tracking-wide font-medium">
                    Having worked with several market giants, Suresh has
                    accumulated a wealth of knowledge and expertise. His journey
                    includes successful collaborations on a diverse range of
                    projects, spanning government, commercial, industrial, and
                    residential sectors. His involvement in such varied projects
                    showcases his versatility and adaptability.
                  </p>
                  <p className="my-4 text-slate-700 tracking-wide font-medium">
                    Suresh V&apos;s commitment to excellence and his ability to
                    meet and exceed client expectations have been the hallmark
                    of his career. Throughout his professional journey, he has
                    built a strong rapport with clients, earning their trust and
                    satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default AboutUs;
