import React, { useState } from "react";
import { Layout } from "antd";
import Navbar from "../Components/IssuerDashboard/Navbar";
import Sidebar from "../Components/IssuerDashboard/Sidebar";
import BreadCrumb from "../Components/IssuerDashboard/Dashboard/BreadCrumb";
import NewBidCard from "../Components/IssuerDashboard/Dashboard/NewBidCard";
import AllBids from "../Components/IssuerDashboard/Dashboard/AllBids";
import Profile from "../Components/IssuerDashboard/IssuerProfile";
import Stopwatch from "../Components/IssuerDashboard/Stopwatch"
const { Content } = Layout;

const Dashboard = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("dashboard");

  const handleMenuItemSelect = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  // Render content based on selected menu item
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "dashboard":
        return (
          <>
            <BreadCrumb />
            <NewBidCard />
            <AllBids />
          </>
        );
      case "profile":
        return <Profile />;
      case "LiveBids":
        return (
          <>
            <Stopwatch/>
          </>
        )
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
          <Content style={{ padding: "20px" }}>{renderContent()}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;


