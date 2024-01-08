import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Clients from "./pages/Clients";
import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";
import SewageTreatment from "./pages/SewageTreatment";
import WaterTreatment from "./pages/WaterTreatment";
import EffluentTreatment from "./pages/EffluentTreatment";
import SwimmingPool from "./pages/SwimmingPool";
import ChemicalSupply from "./pages/ChemicalSupply";
import AnnualMaintenence from "./pages/AnnualMaintenence";
import EnvironmentLegal from "./pages/EnvironmentLegal";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data or some asynchronous task
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear the timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/clients" element={<Clients />} />

          <Route path="/STP" element={<SewageTreatment />} />
          <Route path="/WTP" element={<WaterTreatment />} />
          <Route path="/ETP" element={<EffluentTreatment />} />
          <Route path="/SwimmingPool" element={<SwimmingPool />} />
          <Route path="/ChemicalSupply" element={<ChemicalSupply />} />
          <Route path="/AMC" element={<AnnualMaintenence />} />
          <Route path="/ELA" element={<EnvironmentLegal />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
