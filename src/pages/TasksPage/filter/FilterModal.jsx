import { useEffect, useState, useRef } from "react";
import styles from "./filter.module.css";
import { api, apiToken } from "../../../App";

export default function FilterModal({
  isOpen,
  onClose,
  endPointType,
  employees,
  setEmployees,
}) {
  const [data, setData] = useState(null);
  const modalRef = useRef(null); // Reference to the modal div

  useEffect(() => {
    if (!isOpen || !endPointType || endPointType === "employees") return;
    const fetchData = async () => {
      try {
        const url = `${api}/${endPointType}`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const jsonRes = await res.json();
        setData(jsonRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [isOpen, endPointType]);

  useEffect(() => {
    console.log(endPointType);
    if (endPointType != "employees") return;
    async function fetchEmployees() {
      try {
        const response = await fetch(`${api}/${endPointType}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiToken}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to fetch employees");

        const data = await response.json();
        console.log(data);
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    }

    fetchEmployees();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose;
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.moduleContainer} ref={modalRef}>
      {data ? (
        <div className={styles.itemsCont}>
          {data.map((item) => (
            <div className={styles.itemCont} key={item.id}>
              <input type="checkBox" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>იტვირთება...</p>
      )}
      <div className={styles.closeButtonContainer}>
        <button onClick={onClose}>არჩევა</button>
      </div>
    </div>
  );
}
