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
      <div className="logo">Logo</div>
      <div className="profile-section">
        {/* Add your profile photo component or placeholder here */}
        <div className="profile-photo" />
        <span className="profile-name">John Doe</span>
      </div>
<<<<<<< HEAD
      <Menu
        mode="vertical"
        theme="light"
        defaultSelectedKeys={["1"]}
        onClick={({ key }) => handleMenuClick(key)}
      >
        <Menu.Item key="dashboard" icon={<DashboardOutlined />} title="Dashboard">
          Dashboard
        </Menu.Item>
        <Menu.Item key="live-bids" icon={<AppstoreAddOutlined />} title="LiveBids">
          Live bids
        </Menu.Item>
        <Menu.Item key="profile" icon={<UserOutlined />} title="Profile">
          Profile
=======
      <Menu mode="vertical" theme="light" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<DashboardOutlined />} title="Dashboard">
          <Link to="/issuer-dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreAddOutlined />} title="Apps">
          <Link to="/live-bids">Live bids</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />} title="Profile">
          <Link to="/profile">Profile</Link>
>>>>>>> 5df0bf50ebabab1c08bf1c628e28be4ab0376cfd
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
