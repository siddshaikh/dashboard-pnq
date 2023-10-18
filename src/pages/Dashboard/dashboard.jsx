import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Maindash from "../../components/Maindash";
import SubscribePop from "../../components/SubscribePop";

const Dashboard = () => {
  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <div>
          <div className="fixed">
            <Header />
          </div>
          <div className="mt-16">
            <Maindash />
          </div>
        </div>
        {/* subscribe popup */}
        <div className="absolute">
          <SubscribePop />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
