import React, { useState } from "react";
import { americanStates } from "../utils/dropdownList";

const TypeHead = () => {
  const [showList, setShowList] = useState(false);
  const [defaultList, setDefaultList] = useState(americanStates.slice(0, 3));
  const [inputValue, setInputValue] = useState("");
  const [basicList, setBasicList] = useState(true);
  const [hideBasic, setHideBasic] = useState(false);

  const handleDefault = () => {
    setShowList(!showList);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value) {
      const filteredStates = americanStates.filter((state) =>
        state.toLowerCase().includes(value.toLowerCase())
      );

      setBasicList(filteredStates.length > 0);
    } else {
      setBasicList(true);
    }
  };

  const handleBasicFocus = () => {
    setHideBasic(!hideBasic);
  };

  return (
    <div className="bg-white rounded-md m-4 shadow-lg p-4">
      <h2 className="text-blue-800 text-left font-bold text-xl">Typehead</h2>

      {/* Wrapper one */}
      <div className="flex items-center gap-4">
        {/* First */}
        <div className="w-full">
          <label htmlFor="">Basic</label>
          <div className="relative border-2 border-gray-500 rounded-md">
            <input
              type="text"
              placeholder="Enter States From USA"
              className="outline-none px-4"
              onChange={handleInputChange}
              value={inputValue}
              onFocus={handleBasicFocus}
              onBlur={() => setHideBasic(!hideBasic)}
            />
            {hideBasic &&
              (basicList ? (
                <ul className="absolute border-2 border-gray-500 rounded-md mt-2 bg-white h-40 overflow-scroll">
                  {americanStates
                    .filter((state) =>
                      state.toLowerCase().includes(inputValue.toLowerCase())
                    )
                    .map((state, index) => (
                      <li
                        key={index}
                        className="hover:bg-blue-500 cursor-pointer rounded-md py-2 px-2 mx-2"
                      >
                        {state}
                      </li>
                    ))}
                </ul>
              ) : (
                <div className="absolute border-2 border-gray-500 rounded-md mt-2 bg-white p-2">
                  No State Found
                </div>
              ))}
          </div>
        </div>

        {/* Second */}
        <div className="w-full">
          <label htmlFor="">BloodHound (suggestion engine)</label>
          <div className="border-2 border-gray-500 rounded-md">
            <input
              type="text"
              placeholder="Enter States From USA"
              className="outline-none px-4"
            />
          </div>
        </div>
      </div>

      {/* Second wrapper */}
      <div className="flex items-center gap-4 mt-4">
        {/* Third */}
        <div className="w-full">
          <label htmlFor="">Perfect</label>
          <div className="border-2 border-gray-500 rounded-md">
            <input
              type="text"
              placeholder="Enter States From USA"
              className="outline-none px-4"
            />
          </div>
        </div>

        {/* Fourth */}
        <div className="relative w-full">
          <label htmlFor="">Default Suggestions</label>
          <div className="border-2 border-gray-500 rounded-md">
            <input
              type="text"
              placeholder="Enter States From USA"
              className="outline-none px-4"
              onFocus={handleDefault}
              onBlur={() => setShowList(false)}
            />
          </div>
          <ul className="absolute border-2 border-gray-500 rounded-md mt-2 bg-white">
            {showList &&
              defaultList.map((list, index) => (
                <li
                  key={index}
                  className="hover:bg-blue-500 cursor-pointer rounded-md py-2 px-2 mx-2"
                >
                  {list}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TypeHead;
