import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import LandingPage from "./Pages/LandingPage";
import VendorFrom from "./Components/Forms/vendor_form";
import IssuerFrom from "./Components/Forms/issuer_form";
import Example from "./Components/Forms/Example";
import IssuerDashboard from "./Pages/IssuerDashboard";
import VendorDashboard from "./Pages/VendorDashboard";
import Profile from "./Pages/Profile";
import AboutUs from "./Components/LandingPage/AboutUs";
// import Livebidding from "./Components/LiveBidding/Livebidding";

import BiddingPage from "./Pages/BiddingPage";
import ServiceInfo from "./Components/Dashboard/ServiceInfo";
// import LiveBids from "./Components/LiveBidding/livebids";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* landing page routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs/>}/>
        {/* <Route path="/live-bidding" element={<Livebidding />} /> */}
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/vendor-form" element={<VendorFrom />} />
        <Route path="/issuer-form" element={<IssuerFrom />} />

        {/* issuer dashboard routes */}
        <Route path="/issuer-dashboard" element={<IssuerDashboard />} />

        {/* vendor dashboard routes */}
        <Route path="/bidding-page" element={<BiddingPage />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/example" element={<Example />} />
        <Route path="/service-info" element={<ServiceInfo />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}
