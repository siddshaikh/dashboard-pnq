import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { americanStates } from "../utils/dropdownList";
import { indianStates } from "../utils/dropdownList";

const DropDowns = () => {
  const [selectedAmericanState, setSelectedAmericanState] = useState("");
  const [selectedIndianState, setSelectedIndianState] = useState("");

  const handleAmericanStateChange = (event) => {
    setSelectedAmericanState(event.target.value);
  };

  const handleIndianStateChange = (event) => {
    setSelectedIndianState(event.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <FormControl className="w-full">
        <InputLabel>American State</InputLabel>
        <Select
          value={selectedAmericanState}
          onChange={handleAmericanStateChange}
        >
          {americanStates.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className="w-full">
        <InputLabel>Indian State</InputLabel>
        <Select value={selectedIndianState} onChange={handleIndianStateChange}>
          {indianStates.map((state) => (
            <MenuItem key={state} value={state}>
              {state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDowns;
