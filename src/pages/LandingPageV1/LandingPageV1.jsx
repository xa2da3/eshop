import React from "react";
import styles from "./LandingPageV1.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const LandingPageV1 = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.heroContainer}>
        <h1 className={styles.heroHeading}>Smart Arbitration Starts Here</h1>
        <h3 className={styles.heroSubHeading}>
          Intelligence at Every Step - From Research to Award
        </h3>
        <div className={styles.searchContainer}>
          <input placeholder="Keyword, document, case number, etc." className={styles.input} />
          <button style={{ borderRadius: "32px" }} className={styles.searchButton}>
            Search
          </button>
        </div>
        <div className={styles.demoContainer}>
          <button className={styles.demoButton}>
            <a href="https://calendly.com/kabrapratham/30min" target="_blank">
              Schedule a Demo
            </a>
          </button>
          <button className={styles.contactButton}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeL2MmpOw4I-lmJK75HBykrkzcRBJvj2a8H30sweVPxyOgAig/viewform?usp=sharing"
              target="_blank"
            >
              Contact Sales
            </a>
          </button>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <iframe
          width="60%"
          height="500px"
          src="https://www.youtube.com/embed/YM4VgA0hfXg?si=GW7TC9M3UMFWsMfc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          style={{ borderRadius: "20px" }}
        ></iframe>
      </div>

      <div className={styles.whyToChooseContainer}>
        <h2 className={styles.whyToChooseHeading}>Why Choose Our Case Search?</h2>

        <div className={styles.whyToChooseItems}>
          <div className={styles.whyToChooseBox}>
            <img src="/icons/whyToChoose1.svg" loading="lazy" />
            <h3 className={styles.whyToChooseBoxHeading}>Data-Backed Accuracy</h3>
            <p className={styles.whyToChooseBoxDesc}>
              Trained on 40,000 real cases to ensure factual, reliable search results without
              hallucinations
            </p>
          </div>

          <div className={styles.whyToChooseBox}>
            <img src="/icons/whyToChoose1.svg" loading="lazy" />
            <h3 className={styles.whyToChooseBoxHeading}>Search in Seconds</h3>
            <p className={styles.whyToChooseBoxDesc}>
              Find relevent precedents in seconds with our optimized search algorithm
            </p>
          </div>

          <div className={styles.whyToChooseBox}>
            <img src="/icons/whyToChoose1.svg" loading="lazy" />
            <h3 className={styles.whyToChooseBoxHeading}>Simple Interface</h3>
            <p className={styles.whyToChooseBoxDesc}>
              Intuitive designs makes complex legal research accessible to all professionals
            </p>
          </div>
        </div>
      </div>

      <div className={styles.workingContainer}>
        <div className={styles.workingBox}>
          <h3 className={styles.workingHeading}>
            How <span style={{ fontWeight: "600" }}>Lex Arbitra</span> Works
          </h3>

          <div className={styles.workingPointsBox}>
            <div className={styles.workingPointItem}>
              <img src="/icons/workingIcon1.svg" loading="lazy" />
              <div className={styles.workingPointItemDetails}>
                <h4 className={styles.workingPointsItemHeading}>Enter Search Query</h4>
                <p className={styles.workingPointsItemDesc}>
                  Type Keywords, citations, or legal concepts
                </p>
              </div>
            </div>
            <div className={styles.workingPointItem}>
              <img src="/icons/workingIcon2.svg" loading="lazy" />
              <div className={styles.workingPointItemDetails}>
                <h4 className={styles.workingPointsItemHeading}>Review Results</h4>
                <p className={styles.workingPointsItemDesc}>
                  Browse relevant cases with accurate summaries
                </p>
              </div>
            </div>
            <div className={styles.workingPointItem}>
              <img src="/icons/workingIcon3.svg" loading="lazy" />
              <div className={styles.workingPointItemDetails}>
                <h4 className={styles.workingPointsItemHeading}>Access Case Details</h4>
                <p className={styles.workingPointsItemDesc}>
                  View full text, itations, and related precedents
                </p>
              </div>
            </div>
          </div>

          <button className={styles.searchButtonV1}>
            Search Now
            <img src="/icons/search.svg" loading="lazy" />
          </button>
        </div>
        <div className={styles.workingImageBox}>
          <img
            width="701px"
            src="/images/working.png"
            loading="lazy"
            className={styles.workingImageStyles}
          />
        </div>
      </div>

      <div className={styles.productsContainer}>
        <div className={styles.productsTypeA}>
          <div className={styles.productDetailsBox}>
            <h4 className={styles.productDetailsHeading}>
              SACH - Sourcing accurate cases without hallucinations
            </h4>
            <p className={styles.productDetailsDesc}>
              A Smart Arbitration case search that is instantly source relevant, hallucination-free
              legal precedents from a global database. Enter your facts or issues and get precise
              case matches tailored to arbitration, ensuring accuracy and trust.
            </p>
          </div>
          <div className={styles.productImageBox}>
            <img src="/images/product1.png" loading="lazy" />
          </div>
        </div>

        <div style={{ flexDirection: "row-reverse" }} className={styles.productsTypeA}>
          <div className={styles.productDetailsBox}>
            <h4 className={styles.productDetailsHeading}>Case Management System</h4>
            <p className={styles.productDetailsDesc}>
              A secure, integrated platform designed for arbitration professionals. Maintain
              confidentiality and control in a high-stakes, anti-trust environment, with streamlined
              document drafting and real-time collaboration built in.
            </p>
          </div>
          <div className={styles.productImageBox}>
            <img src="/images/product2.png" loading="lazy" />
          </div>
        </div>

        <div className={styles.productsTypeA}>
          <div className={styles.productDetailsBox}>
            <h4 className={styles.productDetailsHeading}>Predicta Verdict</h4>
            <p className={styles.productDetailsDesc}>
              Our model rigorously analyzes each argument and matches it against historical
              precedents to offer a deterministic view of your chances to win, helping you shape
              smarter strategies.
            </p>
          </div>
          <div className={styles.productImageBox}>
            <img src="/images/product3.png" loading="lazy" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LandingPageV1;
