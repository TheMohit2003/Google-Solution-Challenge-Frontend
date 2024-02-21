// ServiceList.jsx
import React from "react";
import { Card } from "antd";
import { useEffect } from "react";
import { getAllServices } from "../../store/actions/vendorActions";
import { useDispatch } from "react-redux";
const services = [
  {
    title: "Web Development",
    description: "Build modern and responsive websites tailored to your needs.",
    icon: "🚀",
  },
  {
    title: "Mobile App Development",
    description:
      "Create native or cross-platform mobile applications for iOS and Android.",
    icon: "📱",
  },
  {
    title: "Graphic Design",
    description: "Design visually appealing graphics and branding materials.",
    icon: "🎨",
  },
  {
    title: "Digital Marketing",
    description:
      "Promote your business through effective online marketing strategies.",
    icon: "📈",
  },
];

const Services = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllServices());
  }, []);
  return (
    <div>
      {services.map((service, index) => (
        <Card
          key={index}
          hoverable
          style={{
            marginBottom: "16px",
            background: "#ebeeff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div style={{ padding: "8px", fontWeight: "bold" }}>
            {service.title}
          </div>
          <p>{service.description}</p>
          <div style={{ textAlign: "center", fontSize: "24px" }}>
            {service.icon}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Services;
