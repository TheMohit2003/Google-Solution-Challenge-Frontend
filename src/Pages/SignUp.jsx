import React, { useState } from "react";
import Navbar from "../Components/LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../store/actions/loginActions";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup({ email, password, role })); // Fix the typo here: `rolr` to `role`
    console.log("Email:", email, "Password:", password, "Role:", role);
  };
  return (
    <div>
      <Navbar />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Get started today</h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Start connecting with service issuers and contractors. Ready to streamline your project collaborations? Sign in to ServiMatch and get started today
          </p>

          <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-lg font-medium">Sign up to your account</p>

            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
                  required // Password input is required
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  {/* You can keep the password validation icon here if needed */}
                </span>
              </div>
            </div>

            <div>
              <select
                className="block w-full rounded-lg border px-5 py-3 shadow-sm text-sm font-medium text-gray-500"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="">Select Role</option>
                <option value="ISSUER">Issuer</option>
                <option value="VENDOR">Vendor</option>
              </select>
            </div>

            {/* Always show the "Sign Up" button */}
            {/* <Link to={"/vendor-form"}> */}
            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign Up
            </button>
            {/* </Link> */}

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
