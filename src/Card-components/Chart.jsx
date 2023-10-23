import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartComp = ({ chartData }) => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        type: "category",
      },
    },
  };

  return (
    <div>
      <h2 className="text-gray-500">Sample Bar Chart</h2>
      <Bar data={chartData} options={options} color="red" />
    </div>
  );
};

export default ChartComp;
