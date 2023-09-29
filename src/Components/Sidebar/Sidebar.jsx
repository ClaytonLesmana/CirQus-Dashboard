import { Children, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./sidebar.css";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  LayoutDashboard,
  BarChart3,
  BellRing,
  Settings,
  Server,
  UserCircle,
} from "lucide-react";

import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export default function CompleteSidebar() {
  return (
    <Sidebar>
      <Link to="/">
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          alert
        />
      </Link>
      <Link to="/Statistics">
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" active />
      </Link>
      <Link to="/Devices">
        <SidebarItem icon={<Server size={20} />} text="Devices" />
      </Link>
      <Link to="/Notification">
        <SidebarItem icon={<BellRing size={20} />} text="Notification" />
      </Link>
      <hr className="my-3" />
      <Link to="/Settings">
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
      </Link>
      <Link to="/Users">
        <SidebarItem icon={<UserCircle size={20} />} text="Users" />
      </Link>
    </Sidebar>
  );
}

function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="nav">
        <div className="container">
          <img
            src={Logo}
            className={expanded ? "expanded" : "collapsed"}
            alt=""
          />
          <button onClick={() => setExpanded((curr) => !curr)}>
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="sidebar-list">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li className={`sidebar-item ${active ? "active-class" : "hover-class"}`}>
      {icon}
      <span
        className={`sidebar-item-text ${expanded ? "expanded" : "collapsed"}`}
      >
        {text}
      </span>

      {alert && (
        <div
          className={`sidebar-alert ${expanded ? "expanded" : "collapsed"}`}
        />
      )}
      {!expanded && <div className="sidebar-tooltip">{text}</div>}
    </li>
  );
}
