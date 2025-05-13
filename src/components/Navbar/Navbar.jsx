import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={() => navigate("/")}>
        Lex Arbitra
      </div>
      <div className={styles.navList}>
        <div className={`${styles.navItems}`}>
          <a href="#features">Features</a>
        </div>
        <div className={`${styles.navItems} `}>
          Pricing<span className={styles.tooltip}>Beta is free for now!</span>
        </div>
        <div className={`${styles.navItems} `}>
          <a href="#about">About</a>
        </div>
        <div className={`${styles.navItems} `}>
          <a href="#products">Products</a>
        </div>
        <div className={styles.navItemButton} onClick={() => navigate("/login")}>
          Log In
        </div>
      </div>

      {/* <Tooltip anchorSelect=".shared-tooltip" place="top">
        Beta is free for now!
      </Tooltip> */}
    </div>
  );
};

export default Navbar;
