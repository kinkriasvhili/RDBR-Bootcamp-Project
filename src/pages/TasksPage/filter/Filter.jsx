import styles from "../task.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FilterModal from "./Department";
import { useState } from "react";

export default function Filter() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [endPointType, setEndPointType] = useState("");

  const openModal = (type) => {
    setEndPointType(type);
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className={styles.filterContainer}>
      <ul>
        <li
          onClick={() => {
            openModal("departments");
          }}
        >
          დეპარტამენტი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li
          onClick={() => {
            openModal("priorities");
          }}
        >
          პრიორიტეტი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li
          onClick={() => {
            openModal("employees");
          }}
        >
          თანამშრომელი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
      </ul>

      <FilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        endPointType={endPointType}
      />
    </div>
  );
}
