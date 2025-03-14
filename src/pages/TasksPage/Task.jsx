import Filter from "./filter/Filter";
import styles from "./task.module.css";

export default function Task() {
  return (
    <main className={styles.landingPageMain}>
      <div className={styles.headerTitle}>
        <p>დავალებების გვერდი</p>
      </div>
      <Filter />
    </main>
  );
}
