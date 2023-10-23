import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import MegaMenu from "./MegaMenu";
import { MdOutlineWindow } from "react-icons/md";
import { AiOutlineMinusSquare } from "react-icons/ai";
import { BsBell } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiWallet } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { AiOutlineLock } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import "../utils/globalCss.css";
import SettingPanel from "./SettingPanel";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [adminPopup, setAdminPopup] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const handleShowMenu = () => {
    if (adminPopup) {
      setAdminPopup(false);
    }
    setShowMenu(!showMenu);
  };

  const handleAdminPopup = () => {
    if (showMenu) {
      setShowMenu(false);
    }
    setAdminPopup(!adminPopup);
  };

  return (
    <div className="relative bg-white w-screen">
      {/* Navigation bar section */}
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <div>
            <GiHamburgerMenu />
          </div>
          <div className="ml-3 relative">
            <CiSearch className="absolute text-gray-500 mt-3 ml-3" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-gray-200 rounded-md pl-8 pr-3 py-2 text-gray-700"
            />
          </div>
          <div
            className="flex items-center text-gray-500 ml-3 cursor-pointer"
            onClick={handleShowMenu}
          >
            Mega menu <IoMdArrowDropdown />
          </div>
        </div>
        <div className="flex items-center justify-evenly mr-40">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png"
            alt="flag"
            height={25}
            width={25}
          />
          <div className="ml-4 cursor-pointer">
            <MdOutlineWindow />
          </div>
          <div className="ml-4 cursor-pointer">
            <AiOutlineMinusSquare />
          </div>
          <div className="moving-bell ml-4 cursor-pointer">
            <BsBell />
          </div>
          <div
            className="flex items-center ml-4 cursor-pointer text-gray-500"
            onClick={handleAdminPopup}
          >
            Admin
            <IoMdArrowDropdown />
          </div>
          {/*admin dropdown */}
          {adminPopup && (
            <div className="shadow-md rounded-md absolute mt-56 ml-20 px-6 py-6 text-gray-500 bg-white">
              <ul>
                <li className="flex items-center">
                  <span>
                    <AiOutlineUser />
                  </span>{" "}
                  Profile
                </li>
                <li className="flex items-center mt-2">
                  <span>
                    <BiWallet />
                  </span>{" "}
                  My Wallet
                </li>
                <li className="flex items-center mt-2">
                  <span>
                    <CiSettings />
                  </span>{" "}
                  Settings
                </li>
                <li className="flex items-center mt-2">
                  {" "}
                  <span>
                    <AiOutlineLock />
                  </span>{" "}
                  Lock Screen
                </li>
                <li className="flex items-center border-t-2 mt-3">
                  <span className="text-red-500">
                    <RiLogoutCircleLine />
                  </span>{" "}
                  Log out
                </li>
              </ul>
            </div>
          )}

          <div
            className="rotate-infinite ml-4 cursor-pointer"
            onClick={() => setShowSetting(!showSetting)}
          >
            <AiOutlineSetting />
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      {showMenu && (
        <div>
          <MegaMenu />
        </div>
      )}
      {/* setting bar */}
      {showSetting && (
        <div
          className="absolute top-0 right-44 bg-white p-4 rounded-lg shadow-md 
         mt-10"
        >
          <SettingPanel />
        </div>
      )}
    </div>
  );
};

export default Header;
