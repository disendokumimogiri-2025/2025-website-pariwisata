import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AdminLoginScreen from "./screen/admin/admin-login-screen";
import AdminDashboardScreen from "./screen/admin/admin-dashboard-screen";
import AdminCreateBlogScreen from "./screen/admin/admin-create-blog-screen";
import AdminEditBlogScreen from "./screen/admin/admin-edit-blog-screen";
import AdminCreateEduScreen from "./screen/admin/admin-create-edu-screen";
import AdminEditEduScreen from "./screen/admin/admin-edit-edu-screen";
import AdminCreateSouvenirScreen from "./screen/admin/admin-create-souvenir-screen";
import AdminEditSouvenirScreen from "./screen/admin/admin-edit-souvenir-screen";

import LandingScreen from "./screen/public/landing-screen";
import BlogScreen from "./screen/public/blog-screen";
import MarketplaceScreen from "./screen/public/marketplace-screen";
import EducationScreen from "./screen/public/education-screen";
import SouvenirScreen from "./screen/public/souvenir-screen";
import AdminCreateBlogProvider from "./context-provider/admin-context-provider";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingScreen />} index />
        <Route path="/marketplace" element={<MarketplaceScreen />} />
        <Route path="/edu" element={<EducationScreen />} />
        <Route path="/souvenir" element={<SouvenirScreen />} />
        <Route path="/blog/:id" element={<BlogScreen />} />

        <Route path="/admin" element={<AdminCreateBlogProvider />} >
          <Route path="login" element={<AdminLoginScreen />} />
          <Route path="dashboard" element={<AdminDashboardScreen />} />

          <Route path="blog/create" element={<AdminCreateBlogScreen />} />
          <Route path="blog/premature" element={<AdminCreateBlogScreen />} />
          <Route path="blog/edit/:id" element={<AdminEditBlogScreen />} />
          <Route path="edu/edit/:id" element={<AdminEditEduScreen />} />
          <Route path="souvenir/edit/:id" element={<AdminEditSouvenirScreen />} />

          {/* [START] ini kayaknya gausah dipake aja */}
          <Route path="edu/create" element={<AdminCreateEduScreen />} />
          <Route path="edu/premature" element={<AdminCreateEduScreen />} />

          <Route path="souvenir/create" element={<AdminCreateSouvenirScreen />} />
          <Route path="souvenir/premature" element={<AdminCreateSouvenirScreen />} />

          <Route path="announcement/create" element={<AdminDashboardScreen />} />
          <Route path="announcement/edit/:id" element={<AdminDashboardScreen />} />
          {/* [END] ini kayaknya gausah dipake aja */}
        </Route>

      </Routes>
    </Router>
  );
}
