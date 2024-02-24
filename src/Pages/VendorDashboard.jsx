// VendorDashboard.jsx
import React, { useState } from "react";
import { Layout } from "antd";
import Navbar from "../Components/Dashboard/Navbar";
import Sidebar from "../Components/Dashboard/Sidebar";
import Profile from "../Pages/Profile";
import LiveBids from "./livebids";
import Services from "../Components/Dashboard/Services";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices, getLiveServices } from "../store/actions/vendorActions";
// import { i } from "vite/dist/node/types.d-jgA8ss1A";
import { useEffect } from "react";

const { Content } = Layout;

const VendorDashboard = () => {
  const dispatch = useDispatch();
  // const services = useSelector((state) => state.vendor.services);

  const [selectedMenuItem, setSelectedMenuItem] = useState("services");

  const handleMenuItemSelect = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };
  sessionStorage.setItem("role", "VENDOR");


  // Render content based on selected menu item
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
          <Content style={{ padding: "20px" }}>{renderContent()}</Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default VendorDashboard;
