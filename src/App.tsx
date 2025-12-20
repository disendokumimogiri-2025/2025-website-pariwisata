import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screen/landing-screen";
import DestinationsScreen from "./screen/destinations-screen";
import DetailDestinationScreen from "./screen/detail-destination-screen";
import ContactScreen from "./screen/contact-screen";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} index />
        <Route path="/destinations" element={<DestinationsScreen />} />
        <Route path="/destination/:id" element={<DetailDestinationScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </Router>
  );
}
