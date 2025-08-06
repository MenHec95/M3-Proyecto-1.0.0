import { createContext, useState } from "react";

export const UserContext = createContext({
  userId: "",
});

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const value = {
    userId,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
