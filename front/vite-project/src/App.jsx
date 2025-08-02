import "./App.css";
import NavbarNoLog from "./components/NavbarNoLog/NavbarNoLog";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/home";
import Login from "./views/Login/Login";
import AgendarTurnos from "./views/AgendarTurnos/AgendarTurnos";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </>
      }

      {
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MisTurnos" element={<MisTurnos />} />
            <Route path="/AgendarTurnos" element={<AgendarTurnos />} />
          </Routes>
        </>
      }
    </>
  );
}

export default App;
