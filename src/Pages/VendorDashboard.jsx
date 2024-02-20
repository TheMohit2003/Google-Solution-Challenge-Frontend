// App.jsx
import React from "react";
import { Layout } from "antd";
import Navbar from "../Components/Dashboard/Navbar";
import Sidebar from "../Components/Dashboard/Sidebar";
import Services from "../Components/Dashboard/Services";

const { Content } = Layout;

const VendorDashboard = () => {

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content style={{ padding: "20px" }}>
            <Services />
            <p>This is your main content.</p>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default VendorDashboard;