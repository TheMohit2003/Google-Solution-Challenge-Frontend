import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { getVendorDetails } from '../../store/actions/vendorActions';
import { useDispatch } from 'react-redux';
const VendorProfile = () => {
    const [vendorDetails, setVendorDetails] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
          // Assuming getVendorDetails returns a Promise with vendor details
         dispatch(getVendorDetails());
        }, []);

    return (
        <div className="full-page-content">
            <div className="profile-header">
                {/* Profile Image and Name on Right */}
                <div className="profile-right">
                    <div className="profile-image">
                        <UserOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                    </div>
                    <div className="profile-name">
                        <h1 className="text-2xl font-bold text-gray-900">{vendorDetails?.name}</h1>
                        <p className="text-gray-500">Occupation: {vendorDetails?.occupation}</p>
                    </div>
                </div>

                {/* Profile Details on Left */}
                <div className="profile-details">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Title</dt>
                            <dd className="text-gray-700">{vendorDetails?.title}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Occupation</dt>
                            <dd className="text-gray-700">{vendorDetails?.occupation}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Salary</dt>
                            <dd className="text-gray-700">{vendorDetails?.salary}</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Bio</dt>
                            <dd className="text-gray-700">{vendorDetails?.bio}</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default VendorProfile;
