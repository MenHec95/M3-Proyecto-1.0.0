/* eslint-disable react-hooks/exhaustive-deps */
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
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/Context";

function App() {
  const { userId } = useContext(UserContext);

  const navigate = useNavigate();

  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const validateRoutes = ["/", "/Register", "/Login", "/MisTurnos", "/AgendarTurnos"];

    if (!validateRoutes.includes(location.pathname)) setIsNotFound(true);
    else setIsNotFound(false);
    if (!userId && location.pathname !== "/Register" && location.pathname !== "/Login") {
      navigate("/Login");
    }
    if ((userId && location.pathname === "/Register") || (userId && location.pathname === "/Login")) {
      navigate("/");
    }
  }, [location.pathname, navigate, userId]);

  return (
    <>
      {!userId ? (
        <>
          <Routes>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </>
      ) : (
        <>
          {!isNotFound && (
            <header>
              <Navbar />
            </header>
          )}

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MisTurnos" element={<MisTurnos />} />
              <Route path="/AgendarTurnos" element={<AgendarTurnos />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </>
      )}
    </>
  );
}

export default App;
