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
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [isLogged, setIsLogged] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const validateRoutes = ["/", "/Register", "/Login", "/MisTurnos", "/AgendarTurnos"];

    if (!validateRoutes.includes(location.pathname)) setIsNotFound(true);
    else setIsNotFound(false);
    if (!isLogged && location.pathname !== "/Register" && location.pathname !== "/Login") {
      navigate("/Login");
    }
    if ((isLogged && location.pathname === "/Register") || (isLogged && location.pathname === "/Login")) {
      navigate("/");
    }
  }, [location.pathname, userId, navigate]);
  return (
    <>
      {!isLogged ? (
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
