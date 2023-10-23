import React from "react";
import Cards from "./Cards";

const Maindash = () => {
  return (
    <div className="bg-gray-100 overflow-y-scroll">
      {/* heading section */}
      <div className="flex items-center justify-between ml-6 p-4">
        <p className="uppercase">Dashboard</p>
        <p className="text-gray-500 text-sm ml-96">Dashboards/Dashboard</p>
      </div>
      {/* main wrapper */}
      <div className="flex">
        {/* content */}
        <div className="ml-6 flex flex-col w-72">
          {/* card columns */}
          <div className="w-1/2 bg-white rounded-md mt-6 p-4 ">
            {/* color section */}
            <div className="text-blue-500 bg-slate-300 rounded-md">
              <h4>Welcome back!</h4>
              <p className="font-thin text-sm">Skote Dashboard</p>
            </div>
            {/* projects */}
            <div>
              <div>
                <p>Henry Prince</p>
              </div>
              <div>
                <span>125</span>
                <span>projects</span>
              </div>
              <div>
                <span>$1225</span>
                <span>Revenue</span>
              </div>
              <button className="rounded-md text-white bg-blue-600 px-4">
                View Profiles-
              </button>
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-md mt-6 p-4">
            {/* color section */}
            <div className="text-blue-500 bg-slate-300 rounded-md p-4">
              <h4>Welcome back!</h4>
              <p className="font-thin text-sm">Skote Dashboard</p>
            </div>
            {/* projects */}
            <div>
              <div>
                <p>Henry Prince</p>
              </div>
              <div>
                <span>125</span>
                <span>projects</span>
              </div>
              <div>
                <span>$1225</span>
                <span>Revenue</span>
              </div>
              <button className="rounded-md text-white bg-blue-600 px-4">
                View Profiles-
              </button>
            </div>
          </div>
        </div>

        {/* small cards */}
        {/* card */}

        <Cards />
      </div>
    </div>
  );
};

export default Maindash;
