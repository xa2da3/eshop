import React from "react";
import styles from "./Navbar.module.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.logo} onClick={()=>navigate('/')}>Lex Arbitra</div>
      <div className={styles.navList}>
        <div className={styles.navItems}>Features</div>
        <div className={styles.navItems}>Pricing</div>
        <div className={styles.navItems}>About</div>
        <div className={styles.navItems}>Products</div>
        <div className={styles.navItemButton} onClick={()=>navigate('/login')}>Log In</div>
      </div>
    </div>
  );
};

export default Navbar;
