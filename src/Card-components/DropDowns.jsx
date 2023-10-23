import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const americanStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

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
