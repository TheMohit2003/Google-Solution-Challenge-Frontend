import React from "react";
import { Layout } from "antd";
import Navbar from "../Components/IssuerDashboard/Navbar";
import Sidebar from "../Components/IssuerDashboard/Sidebar";
import BreadCrumb from "../Components/IssuerDashboard/BreadCrumb";
import NewBidCard from "../Components/IssuerDashboard/NewBidCard";
import AllBids from "../Components/IssuerDashboard/AllBids";
const { Content } = Layout;

const Dashboard = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content style={{ padding: "20px" }}>
            <BreadCrumb/>
            <NewBidCard/>
            <AllBids/>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
