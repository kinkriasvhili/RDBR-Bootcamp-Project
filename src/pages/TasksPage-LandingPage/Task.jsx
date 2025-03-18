import Filter from "./filter/Filter";
import styles from "./task.module.css";

export default function Task({ employees, setEmployees }) {
  return (
    <main className={styles.landingPageMain}>
      <div className={styles.headerTitle}>
        <p>დავალებების გვერდი</p>
      </div>
      <Filter employees={employees} setEmployees={setEmployees} />
    </main>
  );
}
