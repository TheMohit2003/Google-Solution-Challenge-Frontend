import React, { useEffect } from "react";
import { Layout } from "antd";
import Navbar from "../Components/Dashboard/Navbar";
import Sidebar from "../Components/Dashboard/Sidebar";
import Services from "../Components/Dashboard/Services";
import { useDispatch, useSelector } from "react-redux";
import { getAllServices } from "../store/actions/vendorActions";

const { Content } = Layout;

const VendorDashboard = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.vendor.services);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Layout>
          <Content style={{ padding: "20px" }}>
            <Services services={services} />
            <p>This is your main content.</p>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default VendorDashboard;
