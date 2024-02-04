import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//import Spinner from "./components/Spinner";

// Lazy load all components
const LazyHome = lazy(() => import("./pages/Home"));
const LazyContact = lazy(() => import("./pages/Contact"));
const LazyAboutUs = lazy(() => import("./pages/AboutUs"));
const LazyClients = lazy(() => import("./pages/Clients"));
const LazySewageTreatment = lazy(() => import("./pages/SewageTreatment"));
const LazyWaterTreatment = lazy(() => import("./pages/WaterTreatment"));
const LazyEffluentTreatment = lazy(() => import("./pages/EffluentTreatment"));
const LazySwimmingPool = lazy(() => import("./pages/SwimmingPool"));
const LazyChemicalSupply = lazy(() => import("./pages/ChemicalSupply"));
const LazyAnnualMaintenence = lazy(() => import("./pages/AnnualMaintenence"));
const LazyEnvironmentLegal = lazy(() => import("./pages/EnvironmentLegal"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading content...</div>}>
      <Routes>
        <Route path="/" element={<LazyHome />} />
        <Route path="/contact" element={<LazyContact />} />
        <Route path="/about" element={<LazyAboutUs />} />
        <Route path="/clients" element={<LazyClients />} />
        <Route path="/STP" element={<LazySewageTreatment />} />
        <Route path="/WTP" element={<LazyWaterTreatment />} />
        <Route path="/ETP" element={<LazyEffluentTreatment />} />
        <Route path="/SwimmingPool" element={<LazySwimmingPool />} />
        <Route path="/ChemicalSupply" element={<LazyChemicalSupply />} />
        <Route path="/AMC" element={<LazyAnnualMaintenence />} />
        <Route path="/ELA" element={<LazyEnvironmentLegal />} />
      </Routes>
    </Suspense>
  );
};

export default App;
