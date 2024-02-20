import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";

const Issuer_form = () => {
  const [role, setRole] = useState(""); // Define role state variable and setRole function

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap" }} className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div style={{ width: "45%", height: "100%" }} className="mx-auto ml-4 max-w-lg-">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome to the community</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">Join the community by creating an identity</p>
          <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-2 shadow-lg sm:p-6 lg:p-8">
            <p className="text-center text-lg font-medium">Registration for Issuer</p>

            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <tr>Name</tr>
              <input
                type="text"
                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="sr-only">Phone No.</label>
              <tr>Phone no.</tr>
              <input
                type="tel"
                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                placeholder="Enter Phone No."
                required
              />
            </div>

            <div>
              <label htmlFor="aadhar" className="sr-only">Aadhar</label>
              <tr>Aadhar no.</tr>
              <input
                type="number"
                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                placeholder="Enter Aadhar No."
                required
              />
            </div>

            <div>
              <select onChange={e => setRole(e.target.value)} className="block w-full rounded-lg border px-5 py-3 shadow-sm text-sm font-medium text-gray-500">
                <option value="">Issuer Type</option>
                <option value="Individual">Individual</option>
                <option value="Organization">Organization</option>
                <option value="Business">Business</option>
              </select>
            </div>
            {role === "Organization" || role === "Business" ? (
              <div>
                <label htmlFor="organizationName" className="sr-only">Organization Name</label>
                <tr>Organization Name</tr>
                <input
                  id="organizationName"
                  type="text"
                  className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Name "
                  required
                />
              </div>
            ) : null}
            {role === "Organization" || role === "Business" ? (
              <div>
                <label htmlFor="gstNumber" className="sr-only">GST no.</label>
                <tr>GST no.</tr>
                <input
                  id="gstNumber"
                  type="text"
                  className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter GST no."
                  required
                />
              </div>
            ) : null}

            <div>
              <button type="submit" className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div style={{ position: "relative", top: "120px", left: "50px" }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src="src\Components\Forms\memphis.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Issuer_form;
