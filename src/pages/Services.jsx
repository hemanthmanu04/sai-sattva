import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="relative">
        <div
          className="h-[300px] bg-cover bg-center object-cover duration-500"
          style={{ backgroundImage: `url("images/bg.jpg")` }}
        ></div>
        <h1 className="absolute top-0">Environment Legal Advisory</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
