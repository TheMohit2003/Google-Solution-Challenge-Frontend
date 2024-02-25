import React, { useEffect } from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { useDispatch, useSelector } from "react-redux";

// import Livebids from "../LiveBidding/livebids";

const { Content } = Layout;

const Live_Bids = () => {
    const dispatch = useDispatch();
   

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Navbar />
            <Layout>
                <Sidebar />
                <Layout>
                    <Content style={{ padding: "20px" }}>
                        <Livebids />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Live_Bids;
