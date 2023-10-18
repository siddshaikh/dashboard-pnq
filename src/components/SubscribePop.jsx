import React from "react";
import { RxCross2 } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";

const SubscribePop = () => {
  return (
    <div className="rounded-md shadow-md">
      <p className="text-right text-gray-500 cursor-pointer">
        <RxCross2 />
      </p>
      <h2 className="text-center text-blue-500">Subscribe !</h2>
      <p className="text-gray-500">
        Subscribe to our newletter and get notification to stay update.{" "}
      </p>
      {/* input boxes */}
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Email address"
          className="bg-gray-300 w-full"
        />
        <button className="text-white bg-blue-600 rounded-md cursor-pointer">
          <FaTelegramPlane />
        </button>
      </div>
    </div>
  );
};

export default SubscribePop;
