import Nav from "./components/Nav";
import Home from "./components/Home";
import BlackJack from "./components/BJ/BlackJack";
import Slots from "./components/Slots/Slots";
import Roulette from "./components/Roulette/Roulette";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/Logout";
import Playground from "./components/Playground";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Roulette" element={<Roulette />} />
        <Route path="/BlackJack" element={<BlackJack />} />
        <Route path="/Slots" element={<Slots />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<Logout />} />
        <Route path="/P" element={<Playground />} />
      </Routes>
    </div>
  );
}

export default App;
