import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Add from "./component/Add.jsx";
import Analysis from "./component/Analysis.jsx";
import DashBoard from "./component/DashBoard.jsx";
import Login from "./component/Login.jsx";
import Manage from "./component/Manage.jsx";
import SystemOutlet from "./component/Outlet.jsx";
import Setting from "./component/Setting.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<SystemOutlet />}>
          <Route path="home" element={<DashBoard />} />
          <Route path="setting" element={<Setting />} />
          <Route path="add" element={<Add />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="manage" element={<Manage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
