import { Route, Routes } from "react-router-dom";
import PlacingOrder from "./pages/PlacingOrder";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home/>} />
      <Route path="/order" element={<PlacingOrder />} />
    </Routes>
  );
}

export default App;
