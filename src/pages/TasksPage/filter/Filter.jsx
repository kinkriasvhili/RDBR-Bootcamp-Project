import styles from "./filter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import FilterModal from "./FilterModal";
import { useState } from "react";

export default function Filter({ employees, setEmployees }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [endPointType, setEndPointType] = useState("");

  const openModal = (type) => {
    setEndPointType(type);
    setIsModalOpen((prev) => !prev);
    if (isModalOpen) {
      setEndPointType("");
    }
  };

  const onClose = () => {
    setIsModalOpen(false);
    setEndPointType("");
  };

  return (
    <div className={styles.filterContainer}>
      <ul>
        <li
          onClick={() => openModal("departments")}
          className={endPointType === "departments" ? styles.activeLi : ""}
        >
          დეპარტამენტი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li
          onClick={() => openModal("priorities")}
          className={endPointType === "priorities" ? styles.activeLi : ""}
        >
          პრიორიტეტი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
        <li
          onClick={() => openModal("employees")}
          className={endPointType === "employees" ? styles.activeLi : ""}
        >
          თანამშრომელი
          <FontAwesomeIcon icon={faChevronDown} />
        </li>
      </ul>

      <FilterModal
        employees={employees}
        setEmployees={setEmployees}
        isOpen={isModalOpen}
        onClose={onClose}
        endPointType={endPointType}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}
