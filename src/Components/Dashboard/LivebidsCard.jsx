import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceDetails } from '../../store/actions/biddingActions';
// import { useEffect } from 'react';
import "../../CSS/serviceInfo.css";
import { Link } from "react-router-dom";
import moment from "moment";
 
const LivebidsCard = ({ serviceId }) => {
    const dispatch = useDispatch();
    const serviceDetails = useSelector(state => state.bidding.services); // Assuming the reducer key is 'services'
    sessionStorage.setItem("serviceId", serviceId);
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
            <h1 style={{ fontSize: "2rem", margin: "2% 30%", color: "grey" }}>Service Info</h1>
            {serviceDetails ? (
                <div className="full-page-content">
                    <div className="profile-header-1">
                        <div id='container1' className="profile-right">
                            <div className="profile-image-1">
                                <UserOutlined />
                            </div>
                            <div className="profile-name-1">
                                {/* <h1 className="text-2xl font-bold text-gray-900">{serviceDetails.issuer.name}</h1> */}
                            </div>
                        </div>
                        <div className="profile-details-1">
                            <form className="-my-3 divide-y divide-gray-100 text-sm">
                                <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <div><td style={{ fontSize: "1.2rem", fontWeight: "600" }} className="font-medium text-gray-900">Max bid: </td></div>
                                    <div><td style={{ fontSize: "1.2rem", fontWeight: "600" }} className="text-gray-700">{serviceDetails.amount}</td></div>
                                </div>
                                <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <tr><td className="font-medium text-gray-900">Bidding Date: </td>
                                        <td className="text-gray-700">{serviceDetails.biddingDate ?
                                            moment(
                                                serviceDetails.biddingDate
                                            ).format('DD-MM-YYYY') : "N / A"}</td></tr>
                                </div>
                                <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <tr><td className="font-medium text-gray-900">Project Starts From: </td>
                                        <td className="text-gray-700">{serviceDetails.projectStartDate ?
                                            moment(
                                                serviceDetails.projectStartDate
                                            ).format('DD-MM-YYYY') : "N / A"}</td></tr>
                                </div>
                                <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <tr><td className="font-medium text-gray-900">Location: </td>
                                        <td className="text-gray-700">{serviceDetails.location}</td></tr>
                                </div>
                                <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <div><td className="font-medium text-gray-900">Work Category: </td></div>
                                    <div><td className="text-gray-700">{serviceDetails.title}</td></div>
                                </div>
                                <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <div><tr className="font-medium text-gray-900">Work Description: </tr></div>
                                    <div><td className="text-gray-700">{serviceDetails.description}</td></div>
                                </div>
                                <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <div><tr className="font-medium text-gray-900">Attachments </tr></div>
                                    {/* <div><td className="text-gray-700">{serviceDetails.description}</td></div> */}
                                </div>
                            </form>
                        </div>
                        <div id='info-btn'>
                            <Link to={"/bidding-page"}>
                                <button>Start Bidding ➡️</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No service details available</p>
            )}
        </div>
    );
};

export default LivebidsCard;
