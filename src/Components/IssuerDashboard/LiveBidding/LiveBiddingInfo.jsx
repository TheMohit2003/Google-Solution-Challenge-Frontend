import { UserOutlined } from '@ant-design/icons';
import "../../../CSS/serviceInfo.css";
import moment from "moment";
import { useNavigate } from 'react-router-dom';

const ServiceInfo = (service) => {
    const serviceDetails = service.service;
    const navigate = useNavigate();

    const handleClick = ()=>{
        navigate('/bidding-page')
    }

    if (!serviceDetails) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1 style={{ fontSize: "2rem", margin: "2% 30%", color: "grey" }} className='text-center'>Service Info</h1>
            <div className="full-page-content">
                <div className="profile-header-1">
                    <div id='container1' className="profile-right">
                        <div className="profile-image-1">
                            <UserOutlined />
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
                                    moment(serviceDetails.biddingDate).format('DD-MM-YYYY') || 'N/A' : 'N/A'}
                                </td>
                                </tr>
                            </div>
                            <div id='container1' className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                <tr>
                                <td className="font-medium text-gray-900">Project Starts From: </td>
                                <td className="text-gray-700">{serviceDetails.biddingDate ?
                                    moment(serviceDetails.projectStartDate).format('DD-MM-YYYY') || 'N/A' : 'N/A'}
                                </td>
                                </tr>
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
                            </div>
                            <div id='info-btn'>
                                <button className='text-white' onClick={()=> handleClick()}>See Bidding ➡️</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceInfo;
