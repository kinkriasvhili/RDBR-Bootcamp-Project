import { useState, useEffect } from "react";
import EmployeeModal from "./EmployeeModal";
import styles from "../nav.module.css";


export default function CreateEmployee({ employees, setEmployees }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleEmployeeAdded = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <>

      <button  onClick={handleClick} className={styles.buttonLeft}>
        თანამშრომლის შექმნა
      </button>

      <EmployeeModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        EmployeeAdd={handleEmployeeAdded}
      />

      
    </>
  );
}
