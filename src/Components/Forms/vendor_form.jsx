import React, { useState } from "react";
import Navbar from "../LandingPage/Navbar"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register_vendor } from "../../store/actions/loginActions";
import { useToast } from "@chakra-ui/react";

const vender_form = () => {
    const token = localStorage.getItem("token");
    // console.log("Token:", token);
    const [name, setName] = useState("");
    const [officeAddress, setOfficeAddress] = useState("");
    const [contactInt, setContact] = useState("");
    const [aadhar, setAadhar] = useState("");
    const [GSTint, setGST] = useState("");
    const [OrganizationName, setOrganizationName] = useState("");
    const [WorkDescription, setWorkDescription] = useState("");
    const toast = useToast();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const contact = parseInt(contactInt);
        const GST = parseInt(GSTint);

        try {
            // Dispatch the register_vendor action
            const response = await dispatch(
                register_vendor(
                    { name, officeAddress, contact, aadhar, GST, OrganizationName, WorkDescription },
                    navigate
                )
            );
            console.log("Response:", response);

            if (response?.userId) {
                // Registration successful
                toast({
                    title: 'Registration Successful',
                    status: 'success',
                    position: 'top',
                    duration: 3000,
                    isClosable: true,
                    
                });

                // Redirect or perform any other actions on successful registration
            } else {
                // Registration failed
                toast({
                    title: 'Registration Failed',
                    description: response?.message || 'An error occurred during registration.',
                    status: 'error',
                    position: 'top',
                    duration: 3000,
                    isClosable: true,
                    variant: 'solid',
                    colorScheme: 'red',
                });
            }
        } catch (error) {
            // Handle any unexpected errors
            console.error('Registration error:', error);
            toast({
                title: 'An error occurred',
                description: 'Please try again later.',
                status: 'error',
                position: 'top',
                duration: 3000,
                isClosable: true,
                variant: 'solid',
                colorScheme: 'red',
            });
        }
    };
    return (
        <div >

            <Navbar />
            <div style={{
                display: "flex", flexWrap: "wrap",
            }}
                className="mx-auto max-w-screen-xl  px-4 py-16  sm:px-6 lg:px-8">
                <div id="formdiv" style={{ width: "48%", height: "100%" }}
                    className="mx-auto  max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome to the community</h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Join the community by creating an identity
                    </p>

                    <form action="#" className="mb-0 mt-6 space-y-4 rounded-sm p-2 shadow-lg sm:p-6 lg:p-8" onSubmit={handleSubmit}>
                        <p className="text-center text-lg font-medium">Registration For Vender</p>

                        <div>
                            <label htmlFor="name" className="sr-only"  >Name</label>
                            <tr>Name</tr>
                            <input
                                type="text"
                                className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Enter Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <label htmlFor="name" className="sr-only">Office location</label>
                                <tr>Office Location</tr>
                                <input
                                    type="text"
                                    className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                                    placeholder="Location"
                                    value={officeAddress}
                                    onChange={(e) => setOfficeAddress(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="name" className="sr-only">Phone No.</label>
                                <tr>Phone no.</tr>
                                <input
                                    type="number"
                                    className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Phone No."
                                    value={contactInt}
                                    onChange={(e) => setContact(e.target.value)}
                                    required
                                />
                            </div>

                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div>
                                <label htmlFor="aadhar" className="sr-only">Aadhar</label>
                                <tr>Aadhar no.</tr>

                                <div className="relative">
                                    <input
                                        type="number"
                                        className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                                        placeholder="Enter Aadhar No."
                                        value={aadhar}
                                        onChange={(e) => setAadhar(e.target.value)}
                                        required
                                    />

                                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-4 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />

                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="sr-only">GST no.</label>
                                <tr>GST no.</tr>
                                <input
                                    type="varchar"
                                    className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                                    placeholder="Enter GST no."
                                    value={GSTint}
                                    onChange={(e) => setGST(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="name" className="sr-only">Shop/business name</label>
                            <tr>Shop/business name</tr>
                            <input
                                type="varchar"
                                className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Enter Shop/business name"
                                value={OrganizationName}
                                onChange={(e) => setOrganizationName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="col-span-2">
                            <label htmlFor="workDescription">Work Description</label>
                            <textarea
                                className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Example, We are a software solutions company providing services to various clients. We have a team of 10 people and have been in this field for 5 years."
                                value={WorkDescription}
                                onChange={(e) => setWorkDescription(e.target.value)}
                                rows={3}
                            />
                        </div>
                        <button

                            type="submit"
                            className="block w-full rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>

                    </form>
                </div>
                <div id="img-1" style={{ position: "relative", top: "120px", left: "50px" }}
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="public\images\memphis.png" alt="img" />

                </div>
            </div>
        </div>



    )
}
export default vender_form; 