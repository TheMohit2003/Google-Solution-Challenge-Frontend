import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import '../../CSS/vendorProfile.css';


import { getVendorDetails } from '../../store/actions/vendorActions';
import { useDispatch, useSelector } from 'react-redux';
import { GET_VENDOR_DETAILS } from '../../store/actions/vendorActions';


const VendorProfile = () => {
    const [vendorDetails, setVendorDetails] = useState(null);
    const dispatch = useDispatch();
    const vendorDetailsData = useSelector((state) => state.vendorDetails); // Check this line
    const vendorData = GET_VENDOR_DETAILS.data;

    // Assuming this is how the details are stored in the state
    console.log(vendorDetailsData);
    useEffect(() => {
        const fetchData = async () => {
            try {
                await getVendorDetails();
                // The data is now available in vendorDetailsData
                console.log(vendorDetailsData);
            } catch (error) {
                console.error("Error fetching vendor details:", error);
            }
        };

        fetchData();
    }, [getVendorDetails, vendorDetailsData]);
    console.log(vendorData);
    console.log(vendorDetailsData);

    return (
        <div className="full-page-content">
            <div className="profile-header">
                {/* Profile Image and Name on Right */}
                <div id='container' className="profile-right ">
                    <div className="profile-image">
                        {/* Use UserOutlined from Ant Design as a placeholder */}
                        <UserOutlined />
                    </div>
                    <div className="profile-name">
                        <h1 className="text-2xl font-bold text-gray-900">John Frusciante</h1>
                        <p className="text-gray-500 text-[20px]">Occupation: Guitarist</p>
                    </div>
                </div>

                {/* Profile Details on Left */}
                <div className="profile-details">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div id='container' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <div><dt className="font-medium text-gray-900">Title: </dt></div>
                            <div><dd className="text-gray-700">Mr</dd></div>
                        </div>

                        <div id='container' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <div><dt className="font-medium text-gray-900">Occupation: </dt></div>
                            <div><dd className="text-gray-700">Guitarist</dd></div>
                        </div>

                        <div id='container' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <div><dt className="font-medium text-gray-900">Salary: </dt></div>
                            <div><dd className="text-gray-700">$1,000,000+</dd></div>
                        </div>

                        <div id='container' className=" grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <div><dt className="font-medium text-gray-900">Bio: </dt></div>
                            <div><dd className="text-gray-700">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                                doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                                aspernatur neque molestiae labore aliquam soluta architecto?
                            </dd></div>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default VendorProfile;
