import logo from "../images/Hourglass.png";
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
export default function Nav({ employees, setEmployees }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftSide}>
        <Link to='/' style={{ textDecoration: "none" }}>
          <p>Momentum</p>
        </Link>
        <img src={logo} alt="" />
      </div>
      <div className={styles.rightSide}>
        <CreateEmployee employees={employees} setEmployees={setEmployees} />
        <Link to="/CreateTask">
          <button className={styles.buttonRight}>+ შექმენი ახალი დავალება</button>
        </Link>

      </div>
    </nav>
  );
}
