import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/Sign";
import LogIn from "./Pages/LogIn";
import LandingPage from "./Pages/LandingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/log-in" element={<LogIn />} />
      </Routes>
    </Router>
  );
}
