import React from "react";
import styles from "./LandingPageV1.module.scss";
import Navbar from "../../components/Navbar/Navbar";

const LandingPageV1 = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      {/* This is Landing Page V1 */}
    </div>
  );
};

export default LandingPageV1;
