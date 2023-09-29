import { useState } from "react";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Components/Sidebar/Sidebar";
import Devices from "./Pages/Devices";
import Statistics from "./Pages/Statistics";
import Dashboard from "./Pages/Dashboard";
import Notifications from "./Pages/Notifications";
import Users from "./Pages/Users";
import Settings from "./Pages/Settings";

function App() {
  // const [count, setCount] = useState(0);

  return (
    // <Sidebar />
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Statistics" element={<Statistics />} />
        <Route path="/Devices" element={<Devices />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
