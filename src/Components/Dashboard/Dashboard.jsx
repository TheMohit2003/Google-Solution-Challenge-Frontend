// App.jsx
import React from "react";
import { Layout } from "antd";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Services from "./Services";

const { Content } = Layout;

const Dashboard = () => {
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

export default Dashboard;
