import React, { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Maindash from "../../components/Maindash";
import SubscribePop from "../../components/SubscribePop";
import { MyContext } from "../../context/AdminContext";

const Dashboard = () => {
  const { togglePop, setTogglePop } = useContext(MyContext);
  useEffect(() => {
    setTogglePop(true);
  }, []);
  return (
    <>
      <div className="flex relative">
        <Sidebar />
        <div className="flex-grow">
          <div className="fixed">
            <Header />
          </div>
          <div className="mt-16">
            <Maindash />
          </div>
        </div>
        {/* subscribe popup */}
        {togglePop && (
          <div className="absolute flex justify-center items-center inset-0">
            <SubscribePop />
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
