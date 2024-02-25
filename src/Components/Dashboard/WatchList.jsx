import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWatchList } from '../../store/actions/vendorActions';
import moment from 'moment';

const WatchList = () => {
    const dispatch = useDispatch();
    const watchlist = useSelector((state) => state.vendor.services);
    console.log(watchlist);
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

    return (
        <div>
            <h1 style={{ margin: '1% 40%' }} className='text-3xl text-gray-700 my-10'>
                WatchList
            </h1>
            {watchlist ? watchlist.map((service) => (
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
                                src='public\images\google-maps.png '
                                alt='navi-btn'
                            />
                            <h2 className='title-font text-sm font-medium text-gray-700 mb-3'>{service.location}</h2>
                        </div>
                        <div className='flex items-center flex-wrap'>
                            {/* Additional details or actions */}
                        </div>
                    </div>
                </div>

            )) : <p>Loading...</p>}
        </div>
    );
};

export default WatchList;
