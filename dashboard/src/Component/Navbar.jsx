import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
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
    <nav className="navbar bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand text-light " href="#">
          <i className="fa-solid fa-house text-danger"></i> Dashbaord
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5
              className="offcanvas-title text-light"
              id="offcanvasNavbarLabel"
            >
              <i className="fa-solid fa-house text-danger"></i> Dashboard
            </h5>
            <button
              type="button"
              className="btn-close "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  <i className="fa-solid fa-user text-danger"></i> profile
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light"
                  href="#"
                  onClick={handleLogout}
                >
                  <i className="fa-solid fa-right-from-bracket text-danger"></i>{" "}
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
