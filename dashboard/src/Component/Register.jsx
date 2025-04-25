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
    <div className="login container p-5">
      <form className="shadow p-4 mx-auto rounded-4">
        <h4>Adventure starts here 🚀</h4>
        <p>Create an account</p>
        <input
          className="mt-5"
          type="email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
          autoComplete="email"
        />
        <br />
        <input
          className="mt-3"
          type="password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          autoComplete="password"
        />
        <br />
        <p className="mt-3">
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
