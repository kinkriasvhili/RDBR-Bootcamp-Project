import { useState, useEffect } from "react";
import EmployeeModal from "./EmployeeModal";
import styles from "../nav.module.css";

export default function CreateEmployee() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employees, setEmployees] = useState([]);

  const handleClick = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleEmployeeAdded = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <>
      <button onClick={handleClick} className={styles.buttonLeft}>
        თანამშრომლის შექმნა
      </button>

      <EmployeeModal
        isModalOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        onEmployeeAdded={handleEmployeeAdded}
      />

      {/* <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} {emp.surname}
          </li>
        ))}
      </ul> */}
    </>
  );
}
