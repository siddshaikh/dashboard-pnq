import React from "react";

const SettingPanel = () => {
  return (
    <div className="w-full h-full overflow-y-scroll shadow-md rounded-md">
      {/* close bar */}
      <div className="flex items-center justify-between border-b-2 py-2">
        <h2 className="uppercase text-gray-600 tracking-wider font-bold ">
          Setting
        </h2>
        <button className="cursor-pointer text-gray-400 bg-gray-700 rounded-s-3xl p-2">
          X
        </button>
      </div>
      {/* setting content */}
      <div>
        {/* main content */}
        {/* one */}
        <div className="mt-4 border-b-2 py-2">
          <label htmlFor="" className="block mt-5 text-left">
            Layouts
          </label>
          <span className="my-4">
            <button className="font-bold text-white cursor-pointer bg-blue-500 rounded-md mr-4 px-2 ">
              Verical
            </button>
            <button className="text-gray-600 bg-slate-400 rounded-md cursor-pointer font-bold">
              Horizontal
            </button>
          </span>
        </div>
        {/* two */}
        <div className="mt-4 border-b-2 py-2">
          <label htmlFor="" className="block mt-5 text-left">
            Layouts Mode
          </label>
          <span className="my-4">
            <button className="font-bold text-white cursor-pointer bg-blue-500 rounded-md mr-4 px-2 ">
              Light
            </button>
            <button className="text-gray-600 bg-slate-400 rounded-md cursor-pointer font-bold">
              Dark
            </button>
          </span>
        </div>
        {/* three */}
        <div className="mt-4 border-b-2 py-2">
          <label htmlFor="" className="block mt-5 text-left">
            Layout Width
          </label>
          <span className="my-4 border-b-2 py-2">
            <button className="font-bold text-white cursor-pointer bg-blue-500 rounded-md mr-4 px-2 ">
              Fluid
            </button>
            <button className="text-gray-600 bg-slate-400 rounded-md cursor-pointer font-bold mr-2">
              Boxed
            </button>
            <button className="text-gray-600 bg-slate-400 rounded-md cursor-pointer font-bold">
              Scrollable
            </button>
          </span>
        </div>
        {/* four */}
        <div className="mt-4 border-b-2 py-2">
          <label htmlFor="" className="block mt-5 text-left">
            Topbar Theme
          </label>
          <span className="my-4">
            <button className="font-bold text-white cursor-pointer bg-blue-500 rounded-md mr-4 px-2 ">
              Light
            </button>
            <button className="text-gray-600 bg-slate-400 rounded-md cursor-pointer font-bold">
              Dark
            </button>
          </span>
        </div>
        {/* five */}
        <div className="mt-4 border-b-2 py-2">
          <label htmlFor="" className="block mt-5 text-left">
            Left Sidebar
          </label>
          <span className="my-4 border-b-2 py-2">
            <button className="font-bold text-white cursor-pointer bg-blue-500 rounded-md mr-4 px-2 ">
              Verical
            </button>
            <button className="text-gray-600 bg-slate-400 rounded-md cursor-pointer font-bold">
              Horizontal
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SettingPanel;
