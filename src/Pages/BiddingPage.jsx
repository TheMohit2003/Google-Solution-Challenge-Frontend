import React, { useEffect } from "react";
import { Layout } from "antd";
import Navbar from "../Components/Dashboard/Navbar";
import Sidebar from "../Components/Dashboard/Sidebar";
import Services from "../Components/Dashboard/Services";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../store/actions/vendorActions";
import Livebidding from "../Components/LiveBidding/Livebidding";
import { getLiveServices } from "../store/actions/vendorActions";
import Profile from "./Profile";
import LiveBids from "./livebids";
import { useState } from "react";
const { Content } = Layout;

const BiddingPage = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.vendor.services);

    const [selectedMenuItem, setSelectedMenuItem] = useState("");

    const handleMenuItemSelect = (menuItem) => {
        setSelectedMenuItem(menuItem);

    };
    console.log(selectedMenuItem);
    sessionStorage.setItem("role", "VENDOR");
    useEffect(() => {
        dispatch(getLiveServices());
    }, [dispatch]);
    const renderContent = () => {
        switch (selectedMenuItem) {
            case "services":
                return <Services />;
            case "profile":
                return <Profile />;
            case "live-bids":
                return <LiveBids />;
            default:
                return null;
        }
    };
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Layout>
                
                <Sidebar onMenuItemSelect={handleMenuItemSelect} />
                <Layout>
                    <Content style={{ padding: "20px" }} >
                        {selectedMenuItem == "" ? (
                            <Livebidding />
                        ) : (
                            renderContent()
                        )}
                        {/* <p>This is your main content.</p> */}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default BiddingPage;
