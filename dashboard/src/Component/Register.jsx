import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { toast } from "react-toastify";

const Register = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Register logic
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("✅ Signed up successfully!", {
        position: "top-center",
      });
      // Redirect after a short delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      toast.error("❌ Sign up failed. Please try again.", {
        position: "top-center",
      });
    }
  };
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <div className="login container-fluid p-5">
      <form className="shadow p-4 mx-auto rounded-4 border">
        <div className="shadow rounded p-3 border ">
        <h4 className="text-center">Adventure starts here 🚀</h4>
        <p className="text-center text-danger">Create an account</p>
        </div>
        <input
          className="mt-5 form-control"
          type="email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
          autoComplete="email"
        />
        
        <input
          className="mt-3 form-control"
          type="password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          autoComplete="password"
        />
       
        <input
          className="mt-3 form-control"
          type="password"
          placeholder="Confirm password"
          onChange={handlePasswordChange}
          autoComplete="password"
        />
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/" href="" className="text-danger">
            Login
          </Link>
        </p>

        <button
          className="login-btn btn bg-danger text-light  shadow mb-5 "
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
