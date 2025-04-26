import React from "react";

const Sidebar = ({ isOpen, isCollapsed, toggleCollapseSidebar }) => {
  return (
    <div
      className={`sidebar bg-dark text-white ${isOpen ? "open" : ""} ${
        isCollapsed ? "collapsed" : ""
      }`}
    >
      <div className="d-flex justify-content-between align-items-center px-3">
        <h4>{isCollapsed ? "" : "Dashboard"}</h4>
        <button
          className="btn btn-sm btn-outline-light d-none d-md-block"
          onClick={toggleCollapseSidebar}
          title="Collapse Sidebar"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <ul className="nav flex-column px-2 mt-3">
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            {isCollapsed ? <i className="fa-solid fa-house text-danger"></i> : "Home"}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            {isCollapsed ? <i className="fa-solid fa-users text-danger"></i> : "Users"}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            {isCollapsed ? <i className="fa-solid fa-chart-simple text-danger"></i>: "Analytics"}
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">
            {isCollapsed ? <i className="fa-solid fa-gear text-danger"></i> : "Settings"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
