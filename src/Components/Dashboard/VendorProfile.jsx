import React from 'react';
import { UserOutlined } from '@ant-design/icons';

const VendorProfile = () => {
    return (
        <div className="full-page-content">
            <div className="profile-header">
                {/* Profile Image and Name on Right */}
                <div className="profile-right">
                    <div className="profile-image">
                        {/* Use UserOutlined from Ant Design as a placeholder */}
                        <UserOutlined style={{ fontSize: '64px', color: '#1890ff' }} />
                    </div>
                    <div className="profile-name">
                        <h1 className="text-2xl font-bold text-gray-900">John Frusciante</h1>
                        <p className="text-gray-500">Occupation: Guitarist</p>
                    </div>
                </div>

                {/* Profile Details on Left */}
                <div className="profile-details">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">
                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Title</dt>
                            <dd className="text-gray-700">Mr</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Occupation</dt>
                            <dd className="text-gray-700">Guitarist</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Salary</dt>
                            <dd className="text-gray-700">$1,000,000+</dd>
                        </div>

                        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                            <dt className="font-medium text-gray-900">Bio</dt>
                            <dd className="text-gray-700">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                                doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                                aspernatur neque molestiae labore aliquam soluta architecto?
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
};

export default VendorProfile;
