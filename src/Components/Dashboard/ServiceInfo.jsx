import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceDetails } from '../../store/actions/biddingActions';
import "../../CSS/serviceInfo.css";
const ServiceInfo = ({ serviceId }) => {
    const dispatch = useDispatch();
    const serviceDetails = useSelector(state => state.bidding.services); // Assuming the reducer key is 'services'
    console.log(serviceDetails);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Dispatch action to get service details
                await dispatch(getServiceDetails(serviceId));
            } catch (error) {
                console.error("Error fetching service details:", error);
            }
        };

        fetchData();
    }, [dispatch, serviceId]);

    if (!serviceDetails) {
        // Handle loading state or error state
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 style={{ fontSize: "3rem", margin: "2% 41%", color: "grey" }}>Service Info</h1>
            <div className="full-page-content">
                <div className="profile-header-1">
                    <div id='container1' className="profile-right">
                        <div className="profile-image-1">
                            <UserOutlined />
                        </div>
                        <div className="profile-name-1">
                            <h1 className="text-2xl font-bold text-gray-900">John Frusciante</h1>
                        </div>
                    </div>
                    <div className="profile-details-1">
                        <form className="-my-3 divide-y divide-gray-100 text-sm">
                            <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <div><td style={{ fontSize: "1.2rem", fontWeight: "600" }} className="font-medium text-gray-900">Max bid: </td></div>
                                <div><td style={{ fontSize: "1.2rem", fontWeight: "600" }} className="text-gray-700">{serviceDetails.amount}</td></div>
                            </div>
                            <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <tr><td className="font-medium text-gray-900">Date: </td>
                                    <td className="text-gray-700">{serviceDetails.date}</td></tr>
                            </div>
                            <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <tr><td className="font-medium text-gray-900">Location: </td>
                                    <td className="text-gray-700">{serviceDetails.location}</td></tr>
                            </div>
                            <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <div><td className="font-medium text-gray-900">Work Category: </td></div>
                                <div><td className="text-gray-700">{serviceDetails.workCategory}</td></div>
                            </div>
                            <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <div><tr className="font-medium text-gray-900">Work Description: </tr></div>
                                <div><td className="text-gray-700">{serviceDetails.workDescription}</td></div>
                            </div>
                            <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <input type='file' className="font-medium text-gray-900"></input>
                            </div>
                        </form>
                    </div>
                    <div id='info-btn'><button>I'm Interested ➡️</button></div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;
