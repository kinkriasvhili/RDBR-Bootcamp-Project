import styles from "../nav.module.css";
import { useState } from "react";
import EmployeeModal from "./EmployeeModal";
export default function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleClick} className={styles.buttonLeft}>
        თანამშრომლის შექმნა
      </button>

      <EmployeeModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
      />
    </>
  );
}
