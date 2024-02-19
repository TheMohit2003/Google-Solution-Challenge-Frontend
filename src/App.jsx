import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign";
import LogIn from "./Pages/LogIn";
import LandingPage from "./Pages/LandingPage";
import VenderFrom from "./Components/Forms/vender_form";
import IssuerFrom from "./Components/Forms/issuer_form";
import Example from "./Components/Forms/Example";
import NewBid from "./Components/Forms/new_bid";

import Dashboard from "./Components/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/vender-form" element={<VenderFrom />} />
        <Route path="/issuer-form" element={<IssuerFrom />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-bid" element={<NewBid />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </Router>
  );
}
