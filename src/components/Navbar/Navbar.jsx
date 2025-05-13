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
        <div className={`${styles.navItems} shared-tooltip`} >Features</div>
        <div className={`${styles.navItems} shared-tooltip`}>Pricing</div>
        <div className={`${styles.navItems} shared-tooltip`}>About</div>
        <div className={`${styles.navItems} shared-tooltip`}>Products</div>
        <div className={styles.navItemButton} onClick={() => navigate("/login")}>
          Log In
        </div>
      </div>

      <Tooltip anchorSelect=".shared-tooltip" place="top">
        We are working on it, stay tuned!
      </Tooltip>
    </div>
  );
};

export default Navbar;
