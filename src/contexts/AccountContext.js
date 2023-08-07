import React, { createContext, useState } from "react";

export const AccountContext = createContext();
const AccountProvider = () => {
  const [account, setAccount] = useState();
  const [token, setToken] = useState();

  return (
    <AccountContext.Provider
      value={{ account, setAccount, token, setToken }}
    ></AccountContext.Provider>
  );
};

export default AccountProvider;
