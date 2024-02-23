import React from "react";
import { Card } from "antd";

const Livebids = ({ services }) => {
    console.log(services);
    const serviceId = services?.id;
    console.log(serviceId);
    if (!Array.isArray(services)) {
        // Handle the case when services is not an array (e.g., set a default value or show a loading message)
        return <p>Loading...</p>;
    }

    return (
        <section className="text-gray-600 body-font">
            <h1 style={{ fontSize: "3rem", margin: "auto 33%" }}>Your services</h1>
            <div className="container px-5 pt-[60px] mx-auto">
                <div className="flex flex-wrap -m-4">
                    {services.map((service) => (
                        <div key={service.id} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                <div className="p-6">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{service.title}</h1>
                                    <p className="leading-relaxed mb-3">{service.description}</p>
                                    <div className="flex items-center flex-wrap">
                                        <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Livebids;

