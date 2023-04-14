import Nav from "./components/Nav";
import Home from "./components/Home";
import BlackJack from "./components/BJ/BlackJack";
import Lottery from "./components/Lottery";
import Scratchers from "./components/Scratchers";
import Slots from "./components/Slots";
import Roulette from "./components/Roulette";
import {Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Roulette" element={<Roulette />} />
        <Route path="/BlackJack" element={<BlackJack />} />
        <Route path="/Lottery" element={<Lottery />} />
        <Route path="/Scratchers" element={<Scratchers />} />
        <Route path="/Slots" element={<Slots />} />
      </Routes>
    </div>
  );
};

export default App;
