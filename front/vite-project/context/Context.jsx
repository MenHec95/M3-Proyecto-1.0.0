import { createContext, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({
  userName: "",
  userId: "",
  turnos: [],

  loginUser: async () => {},
  logoutUser: () => {},
  turnosUser: async () => {},
  createTurnoUser: async () => {},
  cancelTurno: async () => {},
});

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [turnos, setTurnos] = useState([]);

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

  const turnosUser = async () => {
    const response = await axios.get(`http://localhost:3000/users/${userId}`);
    setTurnos(response.data.appointments);
  };

  const createTurnoUser = async (values) => {
    await axios.post("http://localhost:3000/appointments/schedule", { ...values, userId });
  };

  const cancelTurno = async (id) => {
    await axios.put(`http://localhost:3000/appointments/cancel/${id}`);
    const nuevosTurnos = turnos.map((turnos) => (turnos.id === id ? { ...turnos, status: "cancelled" } : turnos));
    setTurnos(nuevosTurnos);
  };
  const value = {
    userId,
    userName,
    turnos,
    loginUser,
    logoutUser,
    turnosUser,
    createTurnoUser,
    cancelTurno,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
