import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register_Issuer } from "../../store/actions/loginActions";

const Issuer_form = () => {
  const [IssuerType, setIssuerType] = useState(""); // Define role state variable and setRole function
  const [name, setName] = useState(""); // Define name state variable and setName function
  const [contactInt, setContact] = useState(""); // Define phone state variable and setPhone function
  const [aadhar, setAadhar] = useState(""); // Define aadhar state variable and setAadhar function
  const [OrganizationName, setOrganizationName] = useState(""); // Define organizationName state variable and setOrganizationName function
  const [GSTint, setGST] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  console.log("Token:", token);

  const handleSubmit = (event) => {
    event.preventDefault();
    const contact = parseInt(contactInt)
    console.log(typeof (contact))
    const GST = parseInt(GSTint)
    console.log(typeof (GST))
    dispatch(register_Issuer({ name, contact, aadhar, IssuerType, OrganizationName, GST }, navigate));
    // console.log("Name:", name, "Contact:", contact, "Aadhar:", aadhar, "Role:", role, "Organization Name:", organizationName, "GST:", GST);
  };
  return (
    <div >
      <Navbar />
      <div style={{ display: "flex", flexWrap: "wrap" }} className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div style={{ width: "45%", height: "100%" }} className="mx-auto  max-w-lg-">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome to the community</h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">Join the community by creating an identity</p>
          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-2 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-lg font-medium">Registration for Issuer</p>

            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <tr>Name</tr>
              <input
                type="text"
                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={contactInt}
                onChange={(e) => setContact(e.target.value)}
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
                value={aadhar}
                onChange={(e) => setAadhar(e.target.value)}
                required
              />
            </div>

            <div>
              <select
                value={IssuerType}
                onChange={e => setIssuerType(e.target.value)}
                className="block w-full rounded-lg border px-5 py-3 shadow-sm text-sm font-medium text-gray-500"
              >
                <option value="">Issuer Type</option>
                <option value="INDIVIDUAL">Individual</option>
                <option value="COMPANY">Organization</option>
                <option value="COMPANY">Business</option>
              </select>
            </div>
            {IssuerType === "COMPANY" ? (
              <div>
                <label htmlFor="organizationName" className="sr-only">Organization Name</label>
                <tr>Organization Name</tr>
                <input
                  id="organizationName"
                  type="text"
                  className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Name "
                  value={OrganizationName}
                  onChange={(e) => setOrganizationName(e.target.value)}
                  required
                />
              </div>
            ) : null}
            {IssuerType === "COMPANY" ? (
              <div>
                <label htmlFor="gstNumber" className="sr-only">GST no.</label>
                <tr>GST no.</tr>
                <input
                  id="gstNumber"
                  type="text"
                  className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter GST no."
                  value={GSTint}
                  onChange={(e) => setGST(e.target.value)}
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
        <div id="img-2" style={{ position: "relative", top: "120px", left: "50px" }} className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src="public\images\memphis.png" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Issuer_form;
