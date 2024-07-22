import styles from "../styles/page.module.scss";
import AsideCats from "./components/AsideCats";

export default async function Page() {
  return (
    <div className={styles.main}>
      <AsideCats />
      <section className={styles.content}>
        <section className={styles.header}>
          <header className={styles.headerContent}>
            <h2>The Cat Breed fighter</h2>
          </header>
          <h3 className={styles.headerText}>Pick Your Fighter</h3>
        </section>
        <div id="main-content" className={styles.mainContent}></div>
      </section>
      <AsideCats />
    </div>
  );
}
