import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaTelegramPlane } from "react-icons/fa";
import { MyContext } from "../context/AdminContext";

const SubscribePop = () => {
  const { togglePop, setTogglePop } = useContext(MyContext);
  return (
    <div className="rounded-md shadow-xl bg-white fixed border-gray-500">
      <p
        className="flex items-center justify-end m-5 text-gray-500 cursor-pointer"
        onClick={() => setTogglePop(!togglePop)}
      >
        <RxCross2 />
      </p>
      {/* content */}
      <div className="w-2/3 flex items-center justify-center flex-col ml-10">
        <h2 className="text-center text-blue-500">Subscribe !</h2>
        <p className="text-gray-500">
          Subscribe to our newletter and get notification to stay update.{" "}
        </p>
        {/* input boxes */}
        <div className="flex items-center mb-4">
          <input
            type="email"
            placeholder="Email address"
            className="bg-gray-300 w-full rounded-md p-1 outline-none"
          />
          <button className="text-white bg-blue-600 rounded-md cursor-pointer p-2">
            <FaTelegramPlane />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribePop;
