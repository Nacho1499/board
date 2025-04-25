import React, { useState } from "react";
import Nav from "./Nav.jsx";
import Sidebar from "./Sidebar.jsx";
import Chartjs from "../Charts/Chartjs.jsx";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleMobileSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleCollapseSidebar = () => setSidebarCollapsed(!sidebarCollapsed);

  return (
    <div className="App d-flex">
      <Sidebar
        isOpen={sidebarOpen}
        isCollapsed={sidebarCollapsed}
        toggleCollapseSidebar={toggleCollapseSidebar}
      />
      <div
        className={`main-content flex-grow-1 ${
          sidebarCollapsed ? "collapsed" : ""
        }`}
      >
        <Nav toggleSidebar={toggleMobileSidebar} />

        <div className="container p-4 mt-3">
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <div className=" card  shadow rounded p-3">
                <div className="card-body">
                  <h5 className="mb-3">
                    Congratulations John! 🎉
                  </h5>

                  <p>
                    You have done 68% 😎 more sales today. Check your new badge
                    in your profile.
                  </p>
                  <button className="btn bg-danger text-light shadow">
                    View profile
                  </button>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="h-100 card  shadow rounded">
                <div className="card-body">
                  <h5>Total sales</h5>
                  <i className="fa-solid fa-cart-plus text-danger"></i>
                  <hr />
                  <h5>$150,000</h5>
                </div>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="h-100 card shadow rounded">
                <div className="card-body">
                  <h5>Orders</h5>
                  <i class="fa-solid fa-users text-danger"></i>
                  <hr />
                  <h5>25,690</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Chartjs />
      </div>
    </div>
  );
};

export default Dashboard;
