import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-danger" role="status"></div>
      </div>
    );
  return user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
