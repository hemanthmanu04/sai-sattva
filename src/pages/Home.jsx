import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Footer from "../components/Footer";
import AboutUs from "../components/About";
import ListOfServices from "../components/ListOfServices";
import ListOfClients from "../components/ListOfClients";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <div>
        <Helmet>
          <title>SaiSattvaEngineeringAndConsultants</title>
        </Helmet>
      </div>
      <Navbar />
      <Section />
      <AboutUs />
      <ListOfServices />
      <ListOfClients />
      <Footer />
    </div>
  );
};

export default Home;
