import "./App.css";
import Home from "./views/Home/home";
import Login from "./views/Login/Login";
import MisTurnos from "./views/MisTurnos/MisTurnos";
import Register from "./views/Register/Register";

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MisTurnos" element={<MisTurnos />} />
        </Routes>
      }

      {/* <Home /> */}
      {/* <MisTurnos /> */}
      {/* <Register />
      <Login /> */}
    </>
  );
}

export default App;
