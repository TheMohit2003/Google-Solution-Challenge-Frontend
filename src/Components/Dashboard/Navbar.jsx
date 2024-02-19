// TopNavbar.jsx
import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Header } = Layout;

const Navbar = () => {
  const menu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{ background: "#4578c0", padding: "0 16px", color: "white" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Dropdown overlay={menu}>
          <div style={{ cursor: "pointer" }}>
            <UserOutlined style={{ fontSize: "18px", marginRight: "8px" }} />
            John Doe
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
