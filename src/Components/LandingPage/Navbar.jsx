import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const menu = (
  <Menu>

    <Menu.Item key="login"><Link to={"/log-in"}>Login</Link></Menu.Item>
    <Menu.Item key="register"><Link to={"/sign-up"}>Register</Link></Menu.Item>
    {/* <Menu.Item key="register">Register as Issuer</Menu.Item> */}
  </Menu>
);

export default function Navbar() {
  return (
    <div >
      <header className="">

        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <div style={{ margin: "-40px 0px 0px 0px", height: "1.5vh", width: "90px" }}><img id="logo-btn" src="src\Components\LandingPage\logo.png" alt="logo-btn" /></div>
              <a className="block text-indigo-500" href="#">
                <span className="sr-only">Home</span>
                <svg
                  className="h-8"
                  viewBox="0 0 28 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >

                </svg>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="/"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-gray-500/75"
                      href="#"
                    >
                      {" "}
                      About{" "}
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <Dropdown overlay={menu} className="mx-4">
                    <Button
                      type="primary"
                      style={{
                        backgroundColor: "#483d8b	",
                        border: "1px solid",
                        color: "white",
                      }}
                    >
                      Login/Register <DownOutlined />
                    </Button>
                  </Dropdown>
                </div>

                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
