import React, { useEffect } from "react";
import { Layout } from "antd";
import Navbar from "../Components/Dashboard/Navbar";
import Sidebar from "../Components/Dashboard/Sidebar";
import Services from "../Components/Dashboard/Services";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../store/actions/vendorActions";
import Livebidding from "../Components/LiveBidding/Livebidding";

const { Content } = Layout;

const BiddingPage = () => {
    const dispatch = useDispatch();
    const services = useSelector((state) => state.vendor.services);

    // useEffect(() => {
    //     dispatch(getAllServices());
    // }, [dispatch]);

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Layout>
                <Sidebar />
                <Layout>
                    <Content style={{ padding: "20px" }}>
                        <Livebidding />
                        <p>This is your main content.</p>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default BiddingPage;