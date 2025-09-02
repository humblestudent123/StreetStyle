// src/pages/Home/Home.jsx
import React from "react";
import styles from "./Home.module.scss";

import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const Home = () => {
  return (
    <section className={styles.grid}>
      <div className={styles.card} style={{ backgroundImage: `url(${img1})` }}>
        <h2>Comfort & Style</h2>
      </div>

      <div className={styles.card} style={{ backgroundImage: `url(${img2})` }}>
        <h2>Practicality</h2>
      </div>

      <div className={styles.card} style={{ backgroundImage: `url(${img3})` }}>
        <h2>Credit</h2>
      </div>

      <div className={styles.card} style={{ backgroundColor: "green" }}>
        <h2>Catalog</h2>
      </div>

      <div className={styles.card} style={{ backgroundImage: `url(${img4})` }}>
        <h2>Quality</h2>
      </div>
    </section>
  );
};

export default Home;
