import React from "react";

const MegaMenu = () => {
  return (
    <div className="flex items-center justify-evenly rounded-md shadow-md w-full">
      {/* first */}
      <ul className="text-gray-500 font-thin text-left ml-8">
        <h2 className="text-black font-medium">UI Components</h2>
        <li>Lightbox</li>
        <li>Range Slider</li>
        <li>Sweet Alert</li>
        <li>Rating</li>
        <li>Forms</li>
        <li>Tables</li>
        <li>Charts</li>
      </ul>
      {/* second */}
      <ul className="text-gray-500 font-thin text-left ml-8 mt-0">
        <h2 className="text-black font-medium">Applications</h2>
        <li>Ecommerce</li>
        <li>calender</li>
        <li>Email</li>
        <li>Projects</li>
        <li>Tasks</li>
        <li>Contacts</li>
      </ul>
      {/* third */}
      <ul className="text-gray-500 font-thin text-left ml-8">
        <h2 className="text-black font-medium">Extra Pages</h2>
        <li>Light Sidebar</li>
        <li>Compact Sidebar</li>
        <li>Horizontal Layout</li>
        <li>Maintenance</li>
        <li>Coming Soon</li>
        <li>Timeline</li>
        <li>FAQs</li>
      </ul>
      {/* fourth */}
      <ul className="text-gray-500 font-thin text-left ml-8 mr-8">
        <h2 className="text-black font-medium">UI Components</h2>
        <li>Lightbox</li>
        <li>Range Slider</li>
        <li>Sweet Alert</li>
        <li>Rating</li>
        <li>Forms</li>
        <li>Tables</li>
        <li>Charts</li>
      </ul>
    </div>
  );
};

export default MegaMenu;
