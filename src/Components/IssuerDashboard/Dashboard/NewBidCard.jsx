

import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { useNavigate } from "react-router-dom";
// import NewServiceModal from "./NewServiceModal";

export default function NewBidCard() {
  const navigate = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCreateBid = () => {
    navigate("/new-services");
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const [formData, setFormData] = useState({
    "price" : 0,
    "title" : "",
    "description": "",
  })

  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = ()=>{
    console.log(formData)
  }

  return (
    <>
      <article className="rounded-xl bg-white p-4 ring ring-indigo-50 sm:p-6 lg:p-8 my-10">
        <div className="flex items-start sm:gap-8">
          <div
            className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
            aria-hidden="true"
          >
            <div className="flex items-center gap-1">
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-4 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-6 w-0.5 rounded-full bg-indigo-500"></span>
              <span className="h-8 w-0.5 rounded-full bg-indigo-500"></span>
            </div>
          </div>

          <div>
            <h3 className="mt-4 text-lg font-medium sm:text-xl">
              <p className="hover:underline">Create a new bid</p>
            </h3>

            <p className="mt-1 text-sm text-gray-700">
              Easily post your project requirements to find the perfect contractor match.
            </p>

            <button type="button" className="px-8 py-2 my-3 font-medium rounded bg-indigo-500 text-gray-100" onClick={handleModalOpen}>Create</button>

            {/* Modal component */}
            <Modal
              title=""
              visible={modalVisible}
              onCancel={handleModalClose}
              
            >
              <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-sm p-2 shadow-lg sm:p-6 lg:p-8"
          >
             <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Create New Service
          </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <label htmlFor="maxBid">Max Bid</label>
                <input
                  type="number"
                  name="price"
                  onChange={(e) => handleChange(e)}
                  value = {formData.price}
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter Max Bid"
                />
              </div>
              <div>
                <label htmlFor="workCategory">Work Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={e => handleChange(e)}
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter Work Category"
                  required
                />
              </div>
              <div>
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter Location"
                />
              </div>
              <div>
                <label htmlFor="duration">Date</label>
                <input
                  type="date"
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter Time Duration"
                />
              </div>
              <div className="col-span-2">
                <label htmlFor="workDescription">Work Description</label>
                <textarea
                  name = "description"
                  value={formData.description}
                  onChange={e => handleChange(e)}
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Description of Work"
                  rows={5}
                />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="workDescription">File</label>
                    <input
                      type="file"
                      className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                      placeholder="Enter Time Duration"
                    />
                  </div>    
            </div>

            <div>
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                Submit
              </button>
            </div>
          </form>
            </Modal>
          </div>
        </div>
      </article>
    </>
  );
}

