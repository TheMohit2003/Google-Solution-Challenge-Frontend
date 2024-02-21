// Sidebar.jsx
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

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
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
      <Menu mode="vertical" theme="light" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<DashboardOutlined />} title="Dashboard">
          <Link to="/vendor-dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreAddOutlined />} title="Apps">
          <Link to="/live-bids">Live bids</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />} title="Profile">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
      </Menu>
      
    </Sider>
  );
};

export default Sidebar;
