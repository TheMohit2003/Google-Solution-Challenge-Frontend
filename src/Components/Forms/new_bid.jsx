import Navbar from "../LandingPage/Navbar";
import React from "react";
import { newBid } from "../../store/actions/biddingActions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
const NewBid = () => {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg-2">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            New Bid
          </h1>
          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Join the community by creating an identity
          </p>
          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-sm p-2 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleSubmit}
          >
            <p className="text-center text-lg font-medium">
              Registration for Issuer
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <div>
                <label htmlFor="maxBid">Max Bid</label>
                <input
                  type="number"
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Max Bid"
                />
              </div>
              <div>
                <label htmlFor="workCategory">Work Category</label>
                <input
                  type="text"
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter Work Category"
                  // value={work}
                  // onChange={(e) => setAmount(e.target.value)}
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
              {/* <div>
                <label htmlFor="peopleRequired">People Required</label>
                <input
                  type="number"
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter Number of People Required"
                />
              </div> */}
              {/* <div>
                <label htmlFor="bidingTimeSlot">Biding Time Slot</label>
                <input
                  type="text"
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Enter Biding Time Slot"
                  required
                />
              </div> */}
              <div className="col-span-2">
                <label htmlFor="workDescription">Work Description</label>
                <textarea
                  className="w-full rounded-sm border p-2 pe-12 text-sm shadow-sm"
                  placeholder="Description of Work"
                  value={message}
                  onChange={(e) => setAmount(e.target.value)}
                  rows={5}
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
        </div>
      </div>
    </div>
  );
};

export default NewBid;
