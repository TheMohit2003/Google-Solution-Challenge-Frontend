import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import LandingPage from "./Pages/LandingPage";
import VendorFrom from "./Components/Forms/vendor_form";
import IssuerFrom from "./Components/Forms/issuer_form";
import Example from "./Components/Forms/Example";
import NewBid from "./Components/Forms/new_bid";
import IssuerDashboard from "./Pages/IssuerDashboard";
import VendorDashboard from "./Pages/VendorDashboard";
import Profile from "./Pages/Profile";
// import BiddingPage from "./Pages/BiddingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/sign-up" element={<Signup />} />

        <Route path="/log-in" element={<LogIn />} />
        <Route path="/vendor-form" element={<VendorFrom />} />
        {/* <Route path="/bidding-page" element={<BiddingPage />} /> */}
        <Route path="/issuer-form" element={<IssuerFrom />} />
        <Route path="/vendor-dashboard" element={<VendorDashboard />} />
        <Route path="/new-services" element={<NewBid />} />
        <Route path="/example" element={<Example />} />
        <Route path="/issuer-dashboard" element={<IssuerDashboard />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}
