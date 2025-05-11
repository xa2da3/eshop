import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Lex Arbitra</div>
      <div className={styles.navList}>
        <div className={styles.navItems}>Features</div>
        <div className={styles.navItems}>Pricing</div>
        <div className={styles.navItems}>About</div>
        <div className={styles.navItems}>Products</div>
        <div className={styles.navItemButton}>Try Demo Now</div>
      </div>
    </div>
  );
};

export default Navbar;
