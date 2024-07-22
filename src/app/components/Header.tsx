import React from "react";
import styles from "../../styles/page.module.scss";

const Header: React.FC = () => (
  <section className={styles.header}>
    <header className={styles.headerContent}>
      <h2>The Cat Breed Fighter</h2>
    </header>
    <h3 className={styles.headerText}>Pick Your Fighter</h3>
  </section>
);

export default Header;
