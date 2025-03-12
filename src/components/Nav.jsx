import logo from "../images/Hourglass.png";
import styles from "./nav.css";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <p>Momentum</p>
        <img src={logo} alt="" />
      </div>
      <div>
        <button>თანამშრომლის შექმნა</button>
        <button>+ შექმენი ახალი დავალება</button>
      </div>
    </nav>
  );
}
