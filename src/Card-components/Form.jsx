import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  Container,
  Paper,
  Typography,
  Card,
  TextField,
  Button,
} from "@material-ui/core";
import UserTable from "../components/UserTable";
import DropDowns from "./DropDowns";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "50%",
    margin: theme.spacing(2),
  },
  select: {
    width: "50%",
  },
  paper: {
    boxShadow: "0 2px 2px gray",
    textTransform: "uppercase",
    fontWeight: 600,
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
}));

const Form = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedValues, setSelectedValues] = useState([]);

  const handleSelectedValue = (e) => {
    const value = e.target.value;
    setSelectedValue(value);
    setSelectedValues((prev) => [...prev, value]);
  };

  const removeHandler = (value) => {
    const filteredValues = selectedValues.filter((val) => val !== value);
    setSelectedValues(filteredValues);
  };

  const classes = useStyles();

  return (
    <Container className="mt-6">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age">Select The value</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedValue}
          onChange={handleSelectedValue}
          className={classes.select}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"First"}>First</MenuItem>
          <MenuItem value={"Second"}>Second</MenuItem>
          <MenuItem value={"Third"}>Third</MenuItem>
          <MenuItem value={"Fourth"}>Fourth</MenuItem>
          <MenuItem value={"Fifth"}>Fifth</MenuItem>
          <MenuItem value={"Sixth"}>Sixth</MenuItem>
        </Select>
      </FormControl>
      <Paper variant="outlined" className={classes.paper}>
        {selectedValues.length > 0 ? (
          selectedValues.map((value, index) => (
            <Card key={index} className={classes.card}>
              <Typography>{value}</Typography>
              <Typography
                className="text-gray-500 cursor-pointer"
                onClick={() => removeHandler(value)}
              >
                X
              </Typography>
            </Card>
          ))
        ) : (
          <Typography className="text-gray-500">No Selected Values.</Typography>
        )}
      </Paper>
      {/* user List */}
      <div className="mt-12">
        {/* select boxes */}
        <div className="mb-6">
          <DropDowns />
        </div>
        {/* search field */}
        <div className="flex gap-2 mb-2">
          <TextField
            variant="outlined"
            label="search the user..."
            className="w-4/5"
          />
          <Button variant="contained">Search User</Button>
        </div>
        <UserTable />
      </div>
    </Container>
  );
};

export default Form;
