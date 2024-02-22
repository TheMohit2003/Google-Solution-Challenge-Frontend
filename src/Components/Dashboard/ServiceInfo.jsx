import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import '../../CSS/vendorProfile.css';
import { getVendorDetails } from '../../store/actions/vendorActions';
import { useDispatch } from 'react-redux';
import '../../CSS/serviceInfo.css';
import { getServiceDetails } from '../../store/actions/biddingActions';

const ServiceInfo = () => {
    const [vendorDetails, setVendorDetails] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        // Assuming getVendorDetails returns a Promise with vendor details
        dispatch(getServiceDetails());
    }, []);



    return (
        <div>
            <h1 style={{ fontSize: "3rem", margin: "2% 41%", color: "grey" }}>Service Info</h1>
            <div className="full-page-content">
                <div className="profile-header-1">
                    {/* Profile Image and Name on Right */}
                    <div id='container1' className="profile-right ">
                        <div className="profile-image-1">
                            {/* Use UserOutlined from Ant Design as a placeholder */}
                            <UserOutlined />
                        </div>
                        <div className="profile-name-1">
                            <h1 className="text-2xl font-bold text-gray-900">John Frusciante</h1>

                        </div>
                    </div>

                    {/* Profile Details on Left */}
                    <div className="profile-details-1">
                        <form className="-my-3 divide-y divide-gray-100 text-sm">
                            <div id='container1' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <div><td style={{ fontSize: "1.2rem", fontWeight: "600" }} className="font-medium text-gray-900">Max bid: </td></div>
                                <div><td style={{ fontSize: "1.2rem", fontWeight: "600" }} className="text-gray-700">20,000/-</td></div>
                            </div>

                            <div id='container1' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <tr><td className="font-medium text-gray-900">Date: </td>
                                    <td className="text-gray-700">12-5-2018</td></tr>
                            </div>

                            <div id='container1' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <tr><td className="font-medium text-gray-900">Location: </td>
                                    <td className="text-gray-700">asd fgh erty erty</td></tr>
                            </div>

                            <div id='container1' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <div><td className="font-medium text-gray-900">Work Category: </td></div>
                                <div><td className="text-gray-700">Civil engineer</td></div>
                            </div>

                            <div id='container1' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <div><tr className="font-medium text-gray-900">Work Description: </tr></div>
                                <div><td className="text-gray-700">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                                    doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                                    aspernatur neque molestiae labore aliquam soluta architecto?
                                </td></div>
                            </div>
                            <div id='container1' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <input type='file' className="font-medium text-gray-900"></input>

                            </div>

                        </form>

                    </div>
                    <div id='info-btn'><button  >I'm Intrested  ➡️</button></div>
                </div>
            </div>
        </div>
    )
}
export default ServiceInfo;
