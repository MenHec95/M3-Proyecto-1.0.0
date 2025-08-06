import { createContext, useState } from "react";
import axios from "axios";

export const UserContext = createContext({
  userName: "",
  userId: "",

  loginUser: async () => {},
  logoutUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));

  const [userName, setUserName] = useState(localStorage.getItem("userName"));

  const loginUser = async (values) => {
    const response = await axios.post("http://localhost:3000/users/login", values);
    localStorage.setItem("userId", response.data.user.id);
    localStorage.setItem("userName", response.data.user.name);
    setUserId(response.data.user.id);
    setUserName(response.data.user.name);
  };

  const logoutUser = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");
    setUserId(null);
  };

  const value = {
    userId,
    userName,
    loginUser,
    logoutUser,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
