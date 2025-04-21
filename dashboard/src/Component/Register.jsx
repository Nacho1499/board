import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    if (!email || !password) return;
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered!");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  return (
    <div className="login container p-5">
      <form className="shadow p-4  rounded-4">
        <h4>Adventure starts here 🚀</h4>
        <p>Create an account</p>
        <input className="mt-5"
          type="email"
          placeholder="Enter Email"
          onChange={handleEmailChange}
          autoComplete="email"
        />
        <br />
        <input className="mt-3"
          type="password"
          placeholder="Enter Password"
          onChange={handlePasswordChange}
          autoComplete="password"
        />
        <br />
        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/" href="" className="text-danger">
            SignIn
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
