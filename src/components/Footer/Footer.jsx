import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.left}>
        <div className={styles.leftTop}>
          <h1 className={styles.leftTopHeading}>Lex Arbitra</h1>
          <h4 className={styles.leftTopPunch}>
            Intelligence at Every Step - From Research to Award
          </h4>
          <button className={styles.searchButtonV1}>
            Search Now
            <img src="/icons/search.svg" loading="lazy" />
          </button>
        </div>
        <div className={styles.leftBottom}>© 2025 Lex Arbitra Reserved.</div>
      </div>
      <div className={styles.right}>
        <div className={styles.listContainer}>
          <div style={{color: '#000000'}} className={styles.text}>Legal</div>
          <div className={styles.text}>Privacy Policy</div>
          <div className={styles.text}>Cookies</div>
        </div>
        <div className={styles.listContainer}>
            <div style={{color: '#000000'}} className={styles.text}>Product</div>
            <div className={styles.text}>Features</div>
            <div className={styles.text}>Process</div>
            <div className={styles.text}>Customers</div>
            <div className={styles.text}>Pricing</div>
        </div>
        <div className={styles.listContainer}>
            <div style={{color: '#000000'}} className={styles.text}>Pages</div>
            <div className={styles.text}>Home</div>
            <div className={styles.text}>Blog Index</div>
            <div className={styles.text}>Blog</div>
            <div className={styles.text}>404</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
