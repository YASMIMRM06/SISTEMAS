// src/context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser ] = useState(null);
  const [servicosContratados, setServicosContratados] = useState([]);

  return (
    <User Context.Provider value={{ user, setUser , servicosContratados, setServicosContratados }}>
      {children}
    </User Context.Provider>
  );
};