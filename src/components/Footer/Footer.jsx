import React from "react";
import styles from "./Footer.module.scss";
import { Tooltip } from "react-tooltip";

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
          <div style={{ color: "#000000" }} className={styles.text}>
            Legal
          </div>
          <div className={`${styles.text} shared-tooltip`}>Privacy Policy</div>
          <div className={`${styles.text} shared-tooltip`}>Cookies</div>
        </div>
        <div className={styles.listContainer}>
          <div style={{ color: "#000000" }} className={styles.text}>
            Product
          </div>
          <div className={`${styles.text} shared-tooltip`}>Features</div>
          <div className={`${styles.text} shared-tooltip`}>Process</div>
          <div className={`${styles.text} shared-tooltip`}>Customers</div>
          <div className={`${styles.text} shared-tooltip`}>Pricing</div>
        </div>
        <div className={styles.listContainer}>
          <div style={{ color: "#000000" }} className={styles.text}>
            Pages
          </div>
          <div className={`${styles.text} shared-tooltip`}>Home</div>
          <div className={`${styles.text} shared-tooltip`}>Blog Index</div>
          <div className={`${styles.text} shared-tooltip`}>Blog</div>
          {/* <div className={styles.text}>404</div> */}
        </div>
      </div>
      <Tooltip anchorSelect=".shared-tooltip" place="top">
        We are working on it, stay tuned!
      </Tooltip>
    </footer>
  );
};

export default Footer;
