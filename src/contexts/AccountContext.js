import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AccountContext = createContext();

export const AccountProvider = ({ children }) => {
  const [accountId, setAccountId] = useState(null);

  const createAccount = () => {
    setAccountId(uuidv4());
  };

  const importAccount = (id) => {
    setAccountId(id);
  };

  return (
    <AccountContext.Provider value={{ accountId, createAccount, importAccount }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountContext;

