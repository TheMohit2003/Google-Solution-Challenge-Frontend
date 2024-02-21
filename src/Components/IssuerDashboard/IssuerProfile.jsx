import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import '../../CSS/vendorProfile.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIssuerDetails } from '../../store/actions/issuerAction';



const IssuerProfile = () => {
const data = useSelector(state => state.issuer.issuer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIssuerDetails());
  }, [dispatch]); 

  useEffect(() => {
    console.log(data); 
  }, [data]); 

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
                        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
                        <p className="text-gray-500 text-[20px]">IssuerType: {data.IssuerType}</p>
                    </div>
                </div>

                {/* Profile Details on Left */}
                <div className="profile-details">
                    <dl className="-my-3 divide-y divide-gray-100 text-sm">

                    {Object.entries(data).map(([key, value]) => {
                        if (key !== 'createdAt' && key !== 'userId') { 
                            return (
                                <div key={key} className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50">
                                    <div>
                                        <dt className="font-medium text-gray-900">
                                            {key.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toUpperCase()}:
                                        </dt>
                                    </div>
                                    <div>
                                        <dd className="text-gray-700">{value}</dd>
                                    </div>
                                </div>
                            );
                        }
                        return null; 
                    })}



                    </dl>
                </div>
            </div>
        </div>
    );
};

export default IssuerProfile;
