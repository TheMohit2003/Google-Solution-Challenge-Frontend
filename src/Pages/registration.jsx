import Navbar from "../Components/LandingPage/Navbar"
import React from 'react';
// import { DownOutlined, SmileOutlined } from '@ant-design/icons';
// import { Dropdown, Space } from 'antd';
// const items = [
//     {
//         key: '1',
//         label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//                 1st menu item
//             </a>
//         ),
//     },
//     {
//         key: '2',
//         label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//                 2nd menu item (disabled)
//             </a>
//         ),
//         icon: <SmileOutlined />,
//         disabled: true,
//     },
//     {
//         key: '3',
//         label: (
//             <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//                 3rd menu item (disabled)
//             </a>
//         ),
//         disabled: true,
//     },
//     {
//         key: '4',
//         danger: true,
//         label: 'a danger item',
//     },
// ];
// const App = () => (
//     <Dropdown
//         menu={{
//             items,
//         }}
//     >
//         <a onClick={(e) => e.preventDefault()}>
//             <Space>
//                 Hover me
//                 <DownOutlined />
//             </Space>
//         </a>
//     </Dropdown>
// );

    
export default function RegistrationFrom() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Welcome to the community</h1>

                    <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
                        Join the community by creating an identity
                    </p>

                    <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                        <p className="text-center text-lg font-medium">Registration</p>

                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Name"
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="sr-only">location</label>
                            <input
                                type="text"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Location"
                            />
                        </div>

                        <div>
                            <label htmlFor="name" className="sr-only">Phone No.</label>
                            <input
                                type="number"
                                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                placeholder="Enter Phone No."
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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

                            <div className="relative">
                                <input
                                    type="number"
                                    className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
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
                                        // d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />

                                    </svg>
                                </span>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </div>



    )
}