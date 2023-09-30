import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link , useNavigate   } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate(); // Initialize useNavigate

const handleLogin = (e) => {
    e.preventDefault();

    // Email validation (contains @)
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!email.trim() || !email.match(emailRegex)) {
    toast.error("Please enter a valid email address");
    return;
    }

    // Password validation (contains capital, small, special character, and numbers)
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password.trim() || !password.match(passwordRegex)) {
    toast.error("Please enter a valid password with at least 8 characters, containing capital and small letters, special character, and numbers");
    return;
    }

    // Perform login logic here

    toast.success("Logged in successfully");
    setEmail("");
    setPassword("");
    navigate("/");
};

return (
    <div className="container col-6">
    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>
    <form onSubmit={handleLogin}>
        <h3>Login Here</h3>

        <label for="username">Username</label>
        <input
        type="text"
        placeholder="Email or Phone"
        id="username"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <label for="password">Password</label>
        <input
        type="password"
        placeholder="Password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Log In</button>
        <div class="social">
        <div class="go">
            <i class="fab fa-google"></i> Google
        </div>
        <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
        </div>
        </div>
        <div className="text-center mt-3">
            Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
    </form>
    <ToastContainer />
    </div>
);
};

export default Login;
