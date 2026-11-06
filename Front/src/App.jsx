import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/Login.jsx";
import Outlet from "./component/Outlet.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/outlet" element={<Outlet />} />
      </Routes>
    </Router>
  );
}

export default App;
