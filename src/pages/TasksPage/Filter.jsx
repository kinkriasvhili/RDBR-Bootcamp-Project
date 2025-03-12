import styles from "./task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
export default function Filter() {
  return (
    <div className={styles.filterContainer}>
      <ul>
        <li>
          დეპარტამენტი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li>
          პრიორიტეტი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li>
          თანამშრომელი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
      </ul>
    </div>
  );
}
