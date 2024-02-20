import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign";
import LogIn from "./Pages/LogIn";
import LandingPage from "./Pages/LandingPage";
import IssuerDashboard from "./Pages/IssuerDashboard";

import Dashboard from "./Components/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/issuer-dashboard" element={<IssuerDashboard/>}/>
      </Routes>
    </Router>
  );
}
