import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mailer from "../components/Mailer";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Contacts | SaiSattvaEngineeringAndConsultants</title>
        </Helmet>
      </div>
      <div>
        <Navbar />
        <div className="relative">
          <div
            className="h-[300px] bg-cover bg-center object-cover duration-500"
            style={{ backgroundImage: `url("images/bg.jpg")` }}
          ></div>
          <h1 className="absolute text-[#44832a] top-[45%] left-[30%] lg:left-[38%] font-semibold text-4xl md:text-6xl text-center">
            Contact Us
          </h1>
        </div>
        <div className="relative">
          <div className="h-[1px] bg-white"></div>
          <div className="absolute shadow-lg top-1/2 w-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm md:text-base bg-slate-100 rounded-full p-2 text-center">
            <span className="text-[#44832a]  font-semibold">
              Home • Contact Us
            </span>
          </div>
        </div>

        <div className="bg-white lg:flex mt-14">
          <div className="lg:w-[40%] bg-[#F5F7F8] shadow-xl mx-4 md:mx-20 lg:mt-16 rounded-xl">
            <div className="h-2 bg-green-700 rounded-t-lg"></div>
            <div className="m-10 ml-10 lg:my-12">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-8 lg:w-24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <div className="ml-5">
                  <h2 className="text-[#44832a] text-lg font-medium">
                    Address
                  </h2>
                  <div className="text-md lg:text-md text-slate-700 font-medium tracking-wide ">
                    <p className="mr-6 mb-6">
                      H.O: No.16, Samruddhi 3rd floor 11th cross, Vijaya
                      Bharathi school road Bhuvaneshwari nagara, T.Dasarahalli
                      Bangalore 560057
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <div className="ml-5">
                  <h2 className="text-[#44832a] text-lg font-medium">Phone.</h2>
                  <p className=" text-md lg:text-md text-slate-700 font-medium tracking-wide">
                    +91 81976 96766
                  </p>
                </div>
              </div>
              <div className="flex mt-5">
                <a
                  href="mailto:saisattvaconsultants@gmail.com"
                  className="flex"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <div className="ml-5  mb-10 lg:mb-0">
                    <h2 className="text-[#44832a] text-lg font-medium">
                      Email.
                    </h2>
                    <span className="text-md lg:text-md text-slate-700 font-medium tracking-wide">
                      saisattvaconsultants@gmail.com
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Mailer />
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.759775153065!2d77.51127192388373!3d13.050957201825959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d002a4c3069%3A0x64496bb2a00cee3!2sSai%20Sattva%20Engineering%20and%20Consultants!5e0!3m2!1sen!2sin!4v1703613562170!5m2!1sen!2sin"
        className="h-[400px] lg:h-[500px] w-full lg:w-[90%] mx-auto m-12"
        style={{ border: 0 }}
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer />
    </>
  );
};

export default Contact;
