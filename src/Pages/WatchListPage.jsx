import React from 'react';
import { Layout } from 'antd'; // Import the Layout component from Ant Design
import Navbar from '../Components/Dashboard/Navbar';
import Sidebar from '../Components/Dashboard/Sidebar';
import WatchList from '../Components/Dashboard/WatchList';
import LiveBids from './livebids';
import Profile from './Profile';
import Services from "../Components/Dashboard/Services";
import { Link } from 'react-router-dom';
import { useState } from 'react';


const { Content } = Layout;

const WatchListPage = (props) => {
    const renderContent = () => {
        switch (selectedMenuItem) {
            case "services":

                return (
                    <Link to="/vendor-dashboard">
                        <Services />
                    </Link>);
            case "profile":
                return <Profile />;
            case "live-bids":
                return <LiveBids />;
            default:
                return null;
        }
    };

    const [selectedMenuItem, setSelectedMenuItem] = useState("");

    const handleMenuItemSelect = (menuItem) => {
        setSelectedMenuItem(menuItem);

    };
    const role = sessionStorage.getItem("role");
    console.log(role);
    return (
        <Layout style={{ minHeight: "100vh" }}>

            <Navbar key="watch-list" />
            <Layout>

                <Sidebar onMenuItemSelect={handleMenuItemSelect} />

                <Layout>
                    <Content style={{ padding: "20px", backgroundColor: "white" }}>
                        {selectedMenuItem == "" ? (
                            <WatchList />
                        ) : (

                            renderContent()
                        )}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default WatchListPage;
