import logo from "../images/Hourglass.png";
import styles from "./nav.module.css";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.leftSide}>
        <p>Momentum</p>
        <img src={logo} alt="" />
      </div>
      <div className={styles.rightSide}>
        <button className={styles.buttonLeft}>თანამშრომლის შექმნა</button>
        <button className={styles.buttonRight}>+ შექმენი ახალი დავალება</button>
      </div>
    </nav>
  );
}
