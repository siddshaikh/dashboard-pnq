import React, { createContext, useState } from "react";

export const MyContext = createContext(null);
const AdminContext = ({ children }) => {
  // popup for subscribe news letter
  const [togglePop, setTogglePop] = useState(false);

  return (
    <MyContext.Provider value={{ togglePop, setTogglePop }}>
      {children}
    </MyContext.Provider>
  );
};

export default AdminContext;
