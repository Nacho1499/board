import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Dropdown } from "react-bootstrap";

const Nav = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  // logout logic
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.info("👋 Logged out successfully!", {
        position: "top-center",
      });
      // Redirect after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      alert("Error signing out: " + err.message);
    }
  };
  return (
    <nav className="navbar container navbar-light bg-light  px-3 rounded shadow sticky-top d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <button
          className="btn btn-outline-secondary d-md-none me-2"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <span className="navbar-brand mb-0 h1 text-danger">Dashboard</span>
      </div>
      <Dropdown align="end">
        <Dropdown.Toggle variant="outline-danger shadow" id="dropdown-basic">
        <i className="fa-solid fa-user"></i>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#"><i class="fa-solid fa-user text-danger"></i>  Profile</Dropdown.Item>

          <Dropdown.Divider />
          <Dropdown.Item onClick={handleLogout}>
            {" "}
            <i className="fa-solid fa-right-from-bracket text-danger"></i>  Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
};

export default Nav;
