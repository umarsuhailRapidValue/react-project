import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);

  return (
    <UserContext.Provider value={[users, setUsers]}>
      {props.children}
    </UserContext.Provider>
  );
};
