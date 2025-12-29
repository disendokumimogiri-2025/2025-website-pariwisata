import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingScreen from "./screen/landing-screen";
import CTAScreen from "./screen/CTA-screen";
import NotificationProvider from "./context-provider/notification-context-provider";
import ModalProvider from "./context-provider/modal-context-provider";
import DrawerProvider from "./context-provider/drawer-context-provider";
import MarketplaceScreen from "./screen/marketplace-screen";
import EducationScreen from "./screen/education-screen";
import CulinaryScreen from "./screen/culinary-screen";
import DestinationsScreen from "./screen/destinations-screen";
import AdminGatewayScreen from "./screen/admin-gateway-screen";
import AdminDashboardScreen from "./screen/admin-dashboard-screen";

export default function App() {
  return (
    <NotificationProvider>
      <ModalProvider>
        <DrawerProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LandingScreen />} index />
              <Route path="/education" element={<EducationScreen />} />
              <Route path="/destinations" element={<MarketplaceScreen />} />
              <Route path="/culinary" element={<CulinaryScreen />} />
              <Route path="/destination/:id" element={<DestinationsScreen />} />
              <Route path="/cta" element={<CTAScreen />} />

              {/* admin properties */}
              <Route path="/admin/login" element={<AdminGatewayScreen />} />
              <Route path="/admin/dashboard" element={<AdminDashboardScreen />} />

            </Routes>
          </Router>
        </DrawerProvider>
      </ModalProvider>
    </NotificationProvider>
  );
}
