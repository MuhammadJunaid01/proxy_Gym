import React, { createContext } from "react";
import UsefireBase from "../useFirebase/UseFirebase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const alldata = UsefireBase();
  return (
    <AuthContext.Provider value={alldata}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
