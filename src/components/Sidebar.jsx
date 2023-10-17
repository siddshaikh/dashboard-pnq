import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { BsChatLeftDots } from "react-icons/bs";
import { AiOutlineFileText } from "react-icons/ai";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { LiaBitcoin } from "react-icons/lia";
import { AiOutlineMail } from "react-icons/ai";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GoProjectRoadmap } from "react-icons/go";
import { BiTask } from "react-icons/bi";
import { LuContact2 } from "react-icons/lu";
import { LiaBlogger } from "react-icons/lia";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSolution } from "react-icons/ai";
import { FaElementor } from "react-icons/fa";
import { FaEraser } from "react-icons/fa";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaChartSimple } from "react-icons/fa6";
import { AiFillCodepenCircle } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import "../utils/globalCss.css";
import {
  dashboards,
  ecom,
  crypto,
  email,
  invoices,
  projects,
  task,
  contacts,
  blog,
  jobs,
} from "../utils/dropdownList";

const Sidebar = () => {
  const [dropdownShow, setDropdownShow] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });
  const [rotateIcon, setRotateIcon] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
  });

  const handleDropdownShow = (id) => {
    setDropdownShow((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setRotateIcon((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div className="bg-gray-700 text-gray-500 w-52">
      {/* sidebar section */}
      <h1 className="uppercase font-bold text-white py-4 tracking-wider">
        Skote
      </h1>
      <div className="flex flex-col gap-2 px-3 pt-6 overflow-y-auto h-screen scrollbar scroll">
        {/* menu items */}
        <p className="uppercase font-thin text-xs text-left">Menu</p>
        <li
          className="delayTrans flex items-center text-white cursor-pointer"
          onClick={() => handleDropdownShow(1)}
        >
          <span className="mx-1">
            <AiOutlineHome />
          </span>{" "}
          Dashboards
          <span
            className="ml-2 "
            style={{ transform: rotateIcon[1] ? "rotate(-180deg)" : "" }}
          >
            <IoMdArrowDropdown />
          </span>
        </li>
        {/* dropDowns */}
        <ul
          style={{ display: dropdownShow[1] ? "" : "none" }}
          className="text-left ml-5"
        >
          {dashboards.map((items, id) => (
            <li key={id}>{items}</li>
          ))}
        </ul>
        {/* first end */}
        {/* apps */}
        <p className="uppercase font-thin text-xs text-left">Apps</p>
        <ul>
          <li className="liItems">
            <span className="mr-2">
              <SlCalender />
            </span>
            Calender
          </li>

          <li className="liItems mt-2">
            <span className="mr-2">
              <BsChatLeftDots />
            </span>
            Chat
          </li>
          <li className="liItems mt-2">
            <span className="mr-2">
              <AiOutlineFileText />
            </span>
            File manager
          </li>
          <li className="liItems mt-2" onClick={() => handleDropdownShow(2)}>
            <span className="mr-2">
              <HiOutlineComputerDesktop />
            </span>
            E-commerce
            <span
              className="ml-2"
              style={{ transform: rotateIcon[2] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[2] ? "" : "none" }}
            className="text-left ml-5"
          >
            {ecom.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* second end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(3)}>
            <span className="mr-2">
              <LiaBitcoin />
            </span>
            Crypto
            <span
              className="ml-2"
              style={{ transform: rotateIcon[3] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[3] ? "" : "none" }}
            className="text-left ml-5"
          >
            {crypto.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* third end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(4)}>
            <span className="mr-2">
              <AiOutlineMail />
            </span>
            Email
            <span
              className="ml-2"
              style={{ transform: rotateIcon[4] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[4] ? "" : "none" }}
            className="text-left ml-5"
          >
            {email.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* fourth end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(5)}>
            <span className="mr-2">
              <LiaFileInvoiceSolid />
            </span>
            Invoices
            <span
              className="ml-2"
              style={{ transform: rotateIcon[5] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[5] ? "" : "none" }}
            className="text-left ml-5"
          >
            {invoices.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* fifth end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(6)}>
            <span className="mr-2">
              <GoProjectRoadmap />
            </span>
            Projects
            <span
              className="ml-2"
              style={{ transform: rotateIcon[6] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[6] ? "" : "none" }}
            className="text-left ml-5"
          >
            {projects.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* sixth end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(7)}>
            <span className="mr-2">
              <BiTask />
            </span>
            Tasks
            <span
              className="ml-2"
              style={{ transform: rotateIcon[7] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[7] ? "" : "none" }}
            className="text-left ml-5"
          >
            {task.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* seventh end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(8)}>
            <span className="mr-2">
              <LuContact2 />
            </span>
            Contacts
            <span
              className="ml-2"
              style={{ transform: rotateIcon[8] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[8] ? "" : "none" }}
            className="text-left ml-5"
          >
            {contacts.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* eight end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(9)}>
            <span className="mr-2">
              <LiaBlogger />
            </span>
            Blog
            <span
              className="ml-2"
              style={{ transform: rotateIcon[9] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[9] ? "" : "none" }}
            className="text-left ml-5"
          >
            {blog.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
          {/* nine end */}
          <li className="liItems mt-2" onClick={() => handleDropdownShow(10)}>
            <span className="mr-2">
              <HiOutlineShoppingBag />
            </span>
            Jobs
            <span
              className="ml-2"
              style={{ transform: rotateIcon[10] ? "rotate(-180deg)" : "" }}
            >
              <IoMdArrowDropdown />
            </span>
          </li>
          {/* dropdown */}
          <ul
            style={{ display: dropdownShow[10] ? "" : "none" }}
            className="text-left ml-5"
          >
            {jobs.map((items, id) => (
              <li key={id}>{items}</li>
            ))}
          </ul>
        </ul>
        {/* 10nth end */}
        {/* pages */}
        <p className="uppercase font-thin text-xs text-left mt-2">Pages</p>
        <ul>
          <li className="liItems">
            <span className="mr-2">
              <BiUserCircle />
            </span>
            Authentication
          </li>
          <li className="liItems mt-2">
            <span className="mr-2">
              <AiOutlineSolution />
            </span>
            Utility
          </li>
          {/*  */}
          <p className="uppercase font-thin text-sm text-left mt-2">
            Components
          </p>
          <li className="liItems">
            <span className="mr-2">
              <FaElementor />
            </span>
            UI Elements
          </li>
          <li className="liItems flex items-center justify-between mt-2">
            <span className="mr-2">
              <FaEraser />
              Forms
            </span>
          </li>
          <li className="liItems mt-2">
            <span className="mr-2">
              <TfiMenuAlt />
            </span>
            Tables
          </li>
          <li className="liItems mt-2">
            <span className="mr-2">
              <FaChartSimple />
            </span>
            Charts
          </li>
          <li className="liItems mt-2">
            <span className="mr-2">
              <AiFillCodepenCircle />
            </span>
            Icons
          </li>
          <li className="liItems mt-2">
            <span className="mr-2">
              <BiMap />
            </span>
            Maps
          </li>
          <li className="liItems mt-2">
            <span className="mr-2">
              <AiOutlineShareAlt />
            </span>
            multi Level
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
