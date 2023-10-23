import React from "react";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Topic Analytics",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci illum perferendis ea!",
    btnData: "Open Topic Analytics",
    bgc: "tomato",
  },
  {
    id: 2,
    title: "IQ Apps",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci illum perferendis ea! Recusandae sed",
    btnData: "Open IQ Apps",
    bgc: "#03a9f4",
  },
  {
    id: 3,
    title: "Dashboards",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci illum perferendis ea! Recusandae sed",
    btnData: "Open DashBoards",
    bgc: "#8bc34a",
  },
  {
    id: 4,
    title: "Reports and Alerts",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci illum perferendis ea! Recusandae sed",
    btnData: "Open Reports",
    bgc: "#ff5722",
  },
  {
    id: 5,
    title: "Settings",
    description: "Manage your settings here.",
    btnData: " Open Settings",
    bgc: "gray",
  },
];
const Cards = () => {
  const navigate = useNavigate();
  const handleCardViewButton = () => {
    navigate("/cardview");
  };
  return (
    <div className="mx-4 shadow-lg bg-white rounded-md flex flex-wrap">
      {/* card */}
      {cardData.map((card) => (
        <div className="rounded-md shadow-lg w-48 h-96 mx-4 my-4" key={card.id}>
          {/* first */}
          <div
            className="h-1/2 text-white font-bold text-xl flex justify-center items-center"
            style={{ backgroundColor: card.bgc }}
          >
            {card.title}
          </div>
          {/* second */}
          <div className="h-1/2 p-2">
            <p className="text-gray-500 text-left">{card.description}</p>
            <button
              style={{ border: `1px solid ${card.bgc}`, color: card.bgc }}
              className="py-4 px-4 rounded-md h-auto"
              onClick={handleCardViewButton}
            >
              {card.btnData}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
