import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import "../styles/Login.css"; // Import custom styles
import userIcon from "../assets/user.png";

const Login = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-icon">
        <img src={userIcon} alt="Login icon" className="login-icon-img" />

        </div>
        <h2 className="login-title">Welcome</h2>
        <p className="login-subtext">Sign in with Google to continue</p>
        <button onClick={handleLogin} className="login-button">
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
