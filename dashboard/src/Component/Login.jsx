import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //login logic
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("✅ Login successfully!", {
        position: "top-center",
      });
      // Redirect after a short delay
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } catch (err) {
      toast.error("❌ Login failed. Please try again.", {
        position: "top-center",
      });
    }
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);
  return (
    <div className="login container-fluid p-5">
      <form className="shadow p-4  rounded-4 mx-auto border" action="">
        <div className="shadow p-3 rounded border">
        <h4 className="text-center">Welcome back</h4>
        <p className="text-center text-danger">Please sign-in to your account</p>
        </div>
        <input
          className="mt-5 form-control"
          type="email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
        />
        
        <input
          className="mt-3 form-control"
          type="text"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
        />
        <br />
        <p className="mt-3">
          Don't have an account?{" "}
          <Link to="/register" className="text-danger">
            SignUp
          </Link>
        </p>

        <button
          className="login-btn btn bg-danger text-light  shadow mb-5"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
