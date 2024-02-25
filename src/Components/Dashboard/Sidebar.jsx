import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  DashboardOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Sidebar.css"; // Import the CSS file for styling

const { Sider } = Layout;

const Sidebar = ({ onMenuItemSelect }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (key) => {
    onMenuItemSelect(key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      width={250}
      theme="light"
      className="sidebar"
    >
      <div className="profile-section">

        {/* Add your profile photo component or placeholder here */}
        <div style={{ margin: "0px 0px 0px -10px", height: "3vh", width: "170px" }}>
          <img id="logo-btn" src="https://res.cloudinary.com/dx7uxfrne/image/upload/v1708870762/assets/logo_be8pwm.png" alt="logo-btn" />
        </div>
      </div>
      <Menu
        mode="vertical"
        theme="light"
        defaultSelectedKeys={["1"]}
        onClick={({ key }) => handleMenuClick(key)}
      >

        <Menu.Item id="menu-Item" key="services" icon={<DashboardOutlined />} title="Services">
          <Link to="/vendor-dashboard">
            Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item id="menu-Item" key="live-bids" icon={<AppstoreAddOutlined />} title="LiveBids">
          Live bids
        </Menu.Item>
        <Menu.Item id="menu-Item" key="profile" icon={<UserOutlined />} title="Profile">
          Profile
        </Menu.Item>

      </Menu>

    </Sider >
  );
};

export default Sidebar;
