import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ChartComp from "../../Card-components/Chart";
import { data } from "../../utils/userData";
import One from "../../Card-components/One";
import Two from "../../Card-components/Two";
import Three from "../../Card-components/Three";
import Four from "../../Card-components/Four";
import Form from "../../Card-components/Form";
import PieChart from "../../Card-components/PieChart";
import SelectForm from "../../Form-components/SelectForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },

  title: {
    fontSize: 14,
  },
});

const tabs = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
];
const cardData = [
  { id: 1, title: "Card", value: 1000 },
  { id: 2, title: "Card", value: 1000 },
  { id: 3, title: "Card", value: 1000 },
  { id: 4, title: "Card", value: 1000 },
];
const CardName = [
  "Card No One",
  "Card No Two",
  "Card No Three",
  "Card No Four",
];
const Cardview = () => {
  const [userData, setUserData] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: data.map((data) => data.userGot),
        backgroundColor: [
          "tomato",
          "orange",
          "rgba(255,99,132,0.6)",
          "blue",
          "green",
        ],
      },
    ],
  });
  const [lostUsers, setLostUsers] = useState({
    labels: data.map((data) => data.year),
    datasets: [
      {
        label: "User Lost",
        data: data.map((data) => data.userLoast),
        backgroundColor: [
          "tomato",
          "orange",
          "rgba(255,99,132,0.6)",
          "blue",
          "green",
        ],
      },
    ],
  });
  const [activeTab, setActiveTab] = useState("MainChart");
  const handleTabse = (tab) => {
    setActiveTab(tab);
  };
  console.log(activeTab);
  const classes = useStyles();
  return (
    <div className="flex">
      {/* tab panel */}
      <div className="border-r-2 w-1/5 h-screen flex items-center justify-center flex-col">
        <h2
          className="uppercase text-gray-500 text-lg font-bold cursor-pointer"
          onClick={() => setActiveTab("MainChart")}
        >
          Main
        </h2>
        <h2
          className="uppercase text-gray-500 text-lg font-bold mt-4 cursor-pointer"
          onClick={() => setActiveTab("Form")}
        >
          Form
        </h2>
        <h2
          className="uppercase text-gray-500 text-lg font-bold mt-4 cursor-pointer"
          onClick={() => setActiveTab("SelectForm")}
        >
          Select
        </h2>
      </div>
      {/* seond flex */}
      <div>
        <h2 className="text-center text-gray-500 uppercase font-bold">
          Navigation Tabs
        </h2>
        {/* tabs */}
        <div className="flex  border-b-2 w-full">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className="m-5 cursor-pointer"
              onClick={() => handleTabse(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* dynamic components */}
        {activeTab === "MainChart" ? (
          <div>
            {/* cards */}
            <div className="flex">
              {cardData.map((data) => (
                <Card
                  className={`${classes.root} mx-4 mt-4`}
                  key={data.id}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography className={classes.title} gutterBottom>
                      {data.title}
                    </Typography>
                    <Typography gutterBottom>{data.value}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* graph */}
            <div className="flex">
              <div className="w-1/2">
                <ChartComp chartData={userData} />
              </div>
              <div className="ml-12">
                <PieChart chartData={lostUsers} />
              </div>
            </div>
          </div>
        ) : activeTab === "SelectForm" ? (
          <SelectForm />
        ) : activeTab === "One" ? (
          <One cardName={CardName[0]} />
        ) : activeTab === "Two" ? (
          <Two cardName={CardName[1]} />
        ) : activeTab === "Three" ? (
          <Three cardName={CardName[2]} />
        ) : activeTab === "Four" ? (
          <Four cardName={CardName[3]} />
        ) : activeTab === "Form" ? (
          <Form />
        ) : (
          <span>No data.</span>
        )}
      </div>
    </div>
  );
};

export default Cardview;
