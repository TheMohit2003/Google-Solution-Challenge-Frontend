import Navbar from "../LandingPage/Navbar"
import React from 'react';


const Issuer_form = () => {
    return (
       
        <div >
            <Navbar />
            <div style={{
                display: "flex", flexWrap: "wrap", 
            }}
                className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" >

                <div style={{ width: "45%", height: "100%" }}
                    className="mx-auto ml-4 max-w-lg-">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome to the community</h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Join the community by creating an identity
                    </p>

                    <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-2 shadow-lg sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">Registration for Issuer</p>

                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <tr>Name</tr>
                            <input
                                type="text"
                                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Enter Name"
                            />
                        </div>


                        {/* <div>
                            <label htmlFor="name" className="sr-only">location</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Location"
                            />
                        </div> */}

                        <div>
                            <label htmlFor="name" className="sr-only">Phone No.</label>
                            <tr>Phone no.</tr>
                            <input
                                type="phone"
                                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Enter Phone No."
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <tr>Email</tr>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                    placeholder="Enter email"
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
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="aadhar" className="sr-only">Aadhar</label>
                            <tr>Aadhar no.</tr>
                            <div className="relative">
                                <input
                                    type="number"
                                    className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                    placeholder="Enter Aadhar No."
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
                            <label htmlFor="name" className="sr-only">Occupation</label>
                            <tr>Occupation</tr>
                            <input
                                type="text"
                                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Enter Occupation"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="sr-only">organization name</label>
                            <tr>Organization Name</tr>
                            <input
                                type="text"
                                className="w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                placeholder="organization name (optional)"

                            />
                        </div>
                        <div>
                            <label htmlFor="name" className="sr-only">GST no.</label>
                            <tr>GST no.</tr>
                            <input
                                type="varchar"
                                className=" w-full rounded-lg border p-2 pe-12 text-sm shadow-sm"
                                placeholder="Enter GST no."
                                required
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
                <div style={{ position: "relative", top: "120px", left: "50px"}}
                    className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img src="src\Components\Forms\memphis.png" alt="img" />
                </div>
            </div>

        </div >



    )
}
export default Issuer_form;