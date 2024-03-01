import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWatchList } from '../../store/actions/vendorActions';
import moment from 'moment';
import { Modal } from 'antd';
import ServiceInfo from './ServiceInfo';
import { useState } from 'react';

const WatchList = () => {
    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.vendor.services);
    const [visible, setVisible] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Dispatch action to get watchlist
                await dispatch(getWatchList());
            } catch (error) {
                console.error('Error fetching watchlist:', error);
            }
        };

        fetchData();
    }, [dispatch]);
    const showModal = (service) => {
        setSelectedService(service);
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    return (
        <div>
            <h1 style={{ margin: '1% 40%' }} className='text-3xl text-gray-700 my-10'>
                WatchList
            </h1>
            {Array.isArray(watchlist) && watchlist.length > 0 ? (
                watchlist.map((service) => (
                    <div
                        key={service.id}
                        className='h-full bg-white hover:bg-gray-160 border-opacity-60 rounded-xs overflow-hidden mx-[100px] my-8'
                    >
                        <div className='p-6'>
                            {/* Render service details here */}
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h2 style={{}} className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>
                                    CATEGORY
                                </h2>
                                <h2
                                    style={{ fontWeight: '700' }}
                                    className='tracking-widest text-[15px] title-font font-medium text-gray-500 mb-1'
                                >
                                    Max Bid: {service.amount}
                                </h2>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h1 className='title-font text-lg font-medium text-gray-700 mb-3'>{service.title}</h1>
                            </div>
                            <p className='leading-relaxed text-gray-500 mb-3'>{service.description.slice(0, 500)}</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h2 style={{}} className='tracking-widest text-xs title-font font-medium text-gray-450 mb-1'>
                                    Bid Date: {moment(service.biddingDate).format('DD-MM-YYYY')}
                                </h2>
                                <h2 style={{}} className='tracking-widest text-xs title-font font-medium text-gray-450 mb-1'>
                                    Start-Date: {moment(service.projectStartDate).format('DD-MM-YYYY')}
                                </h2>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <img
                                    style={{ height: '1.7vh', margin: '4px 3px 0px 0px' }}
                                    src='https://res.cloudinary.com/dx7uxfrne/image/upload/v1708870760/assets/google-maps_mheo9v.png'
                                    alt='navi-btn'
                                />
                                <h2 className='title-font text-sm font-medium text-gray-700 mb-3'>{service.location}</h2>
                            </div>
                            <div className='flex items-center flex-wrap'>
                                {/* Additional details or actions */}
                            </div>
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
                ))
            ) : (
                <p>Loading...</p>
            )}
            <Modal
                title=""
                visible={visible}
                onCancel={handleCancel}
                footer={null}
                width={600}
                height={1000}
            >
                {selectedService && <ServiceInfo serviceId={selectedService.id} />}
            </Modal>
        </div>
    );
};

export default WatchList;
