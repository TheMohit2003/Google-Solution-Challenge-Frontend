// TopNavbar.jsx
import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

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
        <Link to={"/watch-listPage"}><img style={{ height: "2.7vh", margin: "21px", }} src="https://res.cloudinary.com/dx7uxfrne/image/upload/v1708870760/assets/heart1_uljsvo.png" alt="like-icon" /></Link>
        <Dropdown overlay={menu}>
          <div style={{ display: "flex" }}>
            <UserOutlined style={{ cursor: "pointer", fontSize: "18px", marginRight: "8px" }} />
          
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default Navbar;
