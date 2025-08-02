import "./App.css";
import NavbarNoLog from "./components/NavbarNoLog/NavbarNoLog";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/home";
import NotFound from "./components/NotFound/NotFound";
import Login from "./views/Login/Login";
import AgendarTurnos from "./views/AgendarTurnos/AgendarTurnos";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [isLogged, setIsLogged] = useState(true);

  useEffect(() => {
    const validateRoutes = ["/", "/Register", "/Login"];

    if (!isLogged && location.pathname !== "/Register" && location.pathname !== "/Login") {
      navigate("/Login");
    }
    if (isLogged && location.pathname === "/Register" && location.pathname === "/Login") {
      navigate("/");
    }
  });
  return (
    <>
      {/* {location.pathname === "/*" ? <></> : <Navbar />} */}
      {/* <Navbar /> */}
      {!isLogged ? (
        <>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MisTurnos" element={<MisTurnos />} />
            <Route path="/AgendarTurnos" element={<AgendarTurnos />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
