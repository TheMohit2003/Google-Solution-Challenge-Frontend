import React, { useState } from "react";
import Navbar from "../Components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [role, setrole] = useState("");
  const [email, setEmail] = useState(""); // State variable to hold email input value
  const [password, setPassword] = useState(""); // State variable to hold password input value


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  console.log(role)

  const handleSubmit = () => {
    if (role === "ISSUER") {
      navigate("/issuer-form");
    } else if (role === "VENDOR") {
      navigate("/vendor-form");
    }
  }

  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome back</h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Unlock access to seamless project collaboration by logging in now
          </p>

          <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={() => handleSubmit()}>
            <p className="text-center text-lg font-medium">Log in to your account</p>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={handleEmailChange}
                  required // Email input is required
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {/* You can keep the email validation icon here if needed */}
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                  required // Password input is required
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {/* You can keep the password validation icon here if needed */}
                </span>
              </div>
            </div>

            <div>
              <select onChange={e => setrole(e.target.value)} className="block w-full rounded-lg border px-5 py-3 shadow-sm text-sm font-medium text-gray-500">
                <option value="">Select Role</option>
                <option value="ISSUER">Issuer</option>
                <option value="VENDOR">Vendor</option>
              </select>
            </div>

            {/* Always show the "Sign Up" button */}
            <div>
              <button
                type="submit"
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Log in
              </button>

            </div>

            <p className="text-center text-sm text-gray-500">
              Already have an account?
              <a className="underline" href="/log-in">Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
