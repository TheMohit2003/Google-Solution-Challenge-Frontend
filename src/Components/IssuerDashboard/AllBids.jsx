import React from 'react'

export default function Allbids() {
  return (
    <>
    <h1 className='font-medium text-3xl text-gray-500 mx-5'> All bids</h1>

    {/* Cards */}
    <div className='my-10'>
    <div className="p-6 sm:p-12 bg-gray-50 text-gray-800">
      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
        <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="self-center flex-shrink-0 w-24 h-24 border rounded-full md:justify-self-start bg-gray-500 border-gray-300" />
        <div className="flex flex-col">
          <h4 className="text-lg font-semibold text-center md:text-left">Bid name</h4>
          <p className="text-gray-600">Sed non nibh iaculis, posuere diam vitae, consectetur neque. Integer velit ligula, semper sed nisl in, cursus commodo elit. Pellentesque sit amet mi luctus ligula euismod lobortis ultricies et nibh.</p>
        </div>
      </div>
     
    </div>
    </div>
   
    </>
  )
}
