import React, { useState, useEffect } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getServiceDetails } from '../../store/actions/biddingActions';
// import { useEffect } from 'react';
import "../../CSS/serviceInfo.css";
import moment from "moment";

const WatchList = () => {

    return (
        <div >
            <div>
                <h1 style={{ margin: "1% 40%" }} className='text-4xl text-gray-700 my-10'>WatchList</h1>

                <div className="h-full bg-gray-100 hover:bg-gray-160 border-opacity-60 rounded-xs overflow-hidden mx-4 my-8">
                    <div className="p-6">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h2 style={{ fontWeight: "700", }} className="tracking-widest text-[15px] title-font font-medium text-gray-500 mb-1">Max Bid: </h2>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h1 className="title-font text-lg font-medium text-gray-700 mb-3"></h1>

                        </div>
                        <p className="leading-relaxed text-gray-500 mb-3"></p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-450 mb-1">Bid Date:</h2>
                            <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-450 mb-1">Start-Date:</h2>
                        </div>
                        <div style={{ display: "flex" }}><img style={{ height: "1.7vh", margin: "4px 3px 0px 0px" }} src="public\images\google-maps.png " alt="navi-btn" />
                            <h2 className="title-font text-sm font-medium text-gray-700 mb-3"></h2></div>
                        <div className="flex items-center flex-wrap">
                            <a
                                onClick={() => showModal(service)}
                                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                                View More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="h-full bg-gray-100 hover:bg-gray-160 border-opacity-60 rounded-xs overflow-hidden mx-4 my-8">
                    <div className="p-6">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h2 style={{ fontWeight: "700", }} className="tracking-widest text-[15px] title-font font-medium text-gray-500 mb-1">Max Bid: </h2>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h1 className="title-font text-lg font-medium text-gray-700 mb-3"></h1>

                        </div>
                        <p className="leading-relaxed text-gray-500 mb-3"></p>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-450 mb-1">Bid Date:</h2>
                            <h2 style={{}} className="tracking-widest text-xs title-font font-medium text-gray-450 mb-1">Start-Date:</h2>
                        </div>
                        <div style={{ display: "flex" }}><img style={{ height: "1.7vh", margin: "4px 3px 0px 0px" }} src="public\images\google-maps.png " alt="navi-btn" />
                            <h2 className="title-font text-sm font-medium text-gray-700 mb-3"></h2></div>
                        <div className="flex items-center flex-wrap">
                            <a
                                onClick={() => showModal(service)}
                                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            >
                                View More
                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="M12 5l7 7-7 7"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchList;
