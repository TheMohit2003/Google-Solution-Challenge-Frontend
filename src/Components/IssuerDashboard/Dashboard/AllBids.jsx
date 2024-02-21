import React from 'react';

export default function AllBids({ bids }) {
  return (
    <>
      <h1 className='font-medium text-3xl text-gray-500 mx-5'> All bids</h1>

      {/* Conditionally render based on whether there are bids */}
      {bids && bids.length > 0 ? (
        <div className='my-10'>
          {/* Map over the bids array to render multiple cards */}
          {bids.map((bid, index) => (
            <div key={index} className="p-6 sm:p-12 bg-gray-50 text-gray-800">
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300" />
                <div className="flex flex-col">
                  <h4 className="text-lg font-semibold text-center md:text-left">Bid name</h4>
                  <p className="text-gray-600">{bid.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show a picture or placeholder content if there are no bids
        <div className="my-5">
          <img 
          src="https://img.freepik.com/free-vector/microsites-concept-illustration_114360-7302.jpg?w=996&t=st=1708512654~exp=1708513254~hmac=7f228ad4183dd3d709110a5ea59599359f836a1a7ac60ff9a32ccce139bba9f2" alt="Placeholder" className="mx-auto" />
          <p className="text-center text-gray-600 mt-4">No bids available</p>
        </div>
      )}
    </>
  );
}
