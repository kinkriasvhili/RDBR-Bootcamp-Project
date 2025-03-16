import logo from "../images/Hourglass.png";
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import styles from "./nav.module.css";
export default function Nav({ employees, setEmployees }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftSide}>
        <p>Momentum</p>
        <img src={logo} alt="" />
      </div>
      <div className={styles.rightSide}>
        <CreateEmployee employees={employees} setEmployees={setEmployees} />
        <button className={styles.buttonRight}>+ შექმენი ახალი დავალება</button>
      </div>
    </nav>
  );
}
