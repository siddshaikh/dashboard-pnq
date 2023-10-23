import React, { useState } from "react";
import Select from "react-select";
import { americanStates } from "../utils/dropdownList";
import TypeHead from "./TypeHead";

const socialMediaArray = ["Instagram", "Twitter", "Facebook", "SnapChat"];
const optionsArray = ["Option1", "Option2", "Option3", "Option4"];

const SelectForm = () => {
  const [selectedStates, setSelectedStates] = useState([]);
  const [disabled, setDisabled] = useState({
    value: "Option4",
    label: "Option4",
  });
  const stateOptions = americanStates.map((state) => ({
    value: state,
    label: state,
  }));
  const [socialMedia, setSocialMedia] = useState([]);
  const socialOptions = socialMediaArray.map((social) => ({
    value: social,
    label: social,
  }));
  const [options, setOptions] = useState([]);
  const optionOptions = optionsArray.map((option) => ({
    value: option,
    label: option,
  }));
  const handleStateChange = (selectedOptions) => {
    setSelectedStates(selectedOptions);
  };
  const handleSocialChange = (socialOptions) => {
    setSocialMedia(socialOptions);
  };
  const handleOptionChange = (options) => {
    setOptions(options);
  };
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Select States:</h2>
      <Select
        isMulti
        options={stateOptions}
        value={selectedStates}
        onChange={handleStateChange}
      />
      {/* second */}
      <div className="flex items-center gap-4 mt-8">
        <div className="cursor-not-allowed w-1/2 text-red-500">
          <h2>Disabled</h2>
          <Select isDisabled options={disabled} value={disabled} className="" />
        </div>
        <div className="mb-4 w-full">
          <h2 className="text-orange-500">Warning</h2>
          <Select
            isMulti
            options={socialOptions}
            value={socialMedia}
            onChange={handleSocialChange}
            className="text-orange-500"
          />
        </div>
      </div>
      {/* third */}
      <div className="flex items-center mt-8 mx-4 gap-4">
        {/* danger */}
        <div className="text-red-500 w-1/2">
          <h2 className="text-red-500">Danger</h2>
          <Select
            isMulti
            options={optionOptions}
            value={options}
            onChange={handleOptionChange}
          />
        </div>
        {/* success */}
        <div className="w-full text-green-500">
          <h2 className="text-green-500">Success</h2>
          <Select
            isMulti
            options={optionOptions}
            value={options}
            onChange={handleOptionChange}
          />
        </div>
      </div>
      {/* Typehead */}
      <TypeHead />
    </div>
  );
};

export default SelectForm;
