import React from 'react';
import { Layout } from 'antd'; // Import the Layout component from Ant Design
import Navbar from '../Components/Dashboard/Navbar';
import Sidebar from '../Components/Dashboard/Sidebar';
import WatchList from '../Components/Dashboard/WatchList';


const { Content } = Layout;

const WatchListPage = (props) => {
    const role = sessionStorage.getItem("role");
    console.log(role);
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Layout>
                <Sidebar  />
                <Layout>
                    <Content style={{ padding: "20px", backgroundColor: "white" }}>
                        <WatchList />

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default WatchListPage;
