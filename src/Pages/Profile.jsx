import React from 'react';
import { Layout } from 'antd'; // Import the Layout component from Ant Design
import Navbar from '../Components/Dashboard/Navbar';
import Sidebar from '../Components/Dashboard/Sidebar';
import VendorProfile from '../Components/Dashboard/VendorProfile';
import IssuerProfile from '../Components/IssuerDashboard/IssuerProfile';

const { Content } = Layout;

const Profile = (props) => {
    const role = sessionStorage.getItem("role");
    console.log(role);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Layout>
                <Sidebar />
                <Layout>
                    <Content style={{ padding: "20px", }}>
                        {role === "ISSUER" ? < IssuerProfile /> : <VendorProfile />}
                        
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Profile;
