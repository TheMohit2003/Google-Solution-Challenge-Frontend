

import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newBid } from '../../../store/actions/biddingActions'
import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

export default function NewBidCard() {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [amountInt, setAmount] = useState(0);
  const [title, setWorkTitle] = useState("");
  const [biddingDate, setBiddingDate] = useState("");
  const [location, setLocation] = useState("");
  const [projectStartDate, setProjectStartDate] = useState("");
  const [description, setMessage] = useState("");
  const [attachment, setAttachment] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [error, setError] = useState("");
  const toast = useToast();

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleProjectStartDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate < currentDate || selectedDate < biddingDate) {
      setError("Project start date must be after or equal to the present date.");
    } else {
      setError("");
      setProjectStartDate(e.target.value);
    }
  };

  const handleBiddingDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      setError("Bidding date must be after or equal to the present date and project start date.");
    } else {
      setError("");
      setBiddingDate(e.target.value);
    }
  };

  const [formData, setFormData] = useState({
    "price": 0,
    "title": "",
    "description": "",
  })

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const amount = parseInt(amountInt);

      // Dispatch the newBid action
      const response = await dispatch(newBid({ title, amount, description, biddingDate, projectStartDate, location, attachment }), navigate);
      console.log("Response:", response);
      if (response?.service) {
        // Show success toast
        toast({
          title: 'Service Created Successfully',
          status: 'success',
          position: 'top',
          duration: 3000,
          isClosable: true,
        });

        // Close the modal after the dispatch
        handleModalClose();
      } else {
        // Show failure toast
        toast({
          title: 'Service Creation Failed',
          description: response?.message || 'An error occurred during service creation.',
          status: 'error',
          position: 'top',
          duration: 3000,
          isClosable: true,
          variant: 'solid',
          colorScheme: 'red',
        });
      }
    } catch (error) {
      // Handle any unexpected errors
      console.error('Service creation error:', error);
      toast({
        title: 'An error occurred',
        description: 'Please try again later.',
        status: 'error',
        position: 'top',
        duration: 3000,
        isClosable: true,
        variant: 'solid',
        colorScheme: 'red',
      });
    }
  };

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
              <p className="hover:underline">Create a new service</p>
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
              footer={null}
            >
              <form
                action="#"
                className="mb-0 mt-6 space-y-4 rounded-sm p-2 shadow-lg sm:p-6 lg:p-8"
                onSubmit={handleSubmit}
              >
                <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                  Create New Service
                </h1>
                {error && <h2 className="text-red-500 text-center">{error}</h2>}

                <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
                  <div>
                    <label htmlFor="maxBid">Max Bid</label>
                    <input
                      type="number"
                      name="price"
                      value={amountInt}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                      placeholder="Enter Max Bid"
                    />
                  </div>
                  <div>
                    <label htmlFor="workCategory">Work Title</label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={(e) => setWorkTitle(e.target.value)}
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
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}

                    />
                  </div>
                  <div>
                    <label htmlFor="duration">Bidding Date</label>
                    <input
                      type="date"
                      className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                      placeholder="Enter Time Duration"
                      value={biddingDate}
                      onChange={handleBiddingDateChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="duration">Project start Date</label>
                    <input
                      type="date"
                      id="projectStartDate"
                      className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                      placeholder="Enter Project Start Date"
                      value={projectStartDate}
                      onChange={handleProjectStartDateChange}
                    />
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="workDescription">Work Description</label>
                    <textarea
                      name="description"
                      value={description}
                      onChange={(e) => setMessage(e.target.value)}
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
                      value={attachment}
                      onChange={(e) => { setAttachment(e.target.value) }}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
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

