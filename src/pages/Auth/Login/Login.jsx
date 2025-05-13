import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import Navbar from "../../../components/Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "tech.lexarbitra@gmail.com" && password === "TestUser@123") {
      navigate("/search");
    }
    console.log("Invalid Credentials");
  };
  return (
    <div className={styles.container}>
      <Navbar />
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
