import { api } from "../../../App";
import { useEffect, useState, useRef } from "react";
import styles from "./filter.module.css";

export default function FilterModal({
  isOpen,
  onClose,
  endPointType,
  setIsModalOpen,
}) {
  const [data, setData] = useState(null);
  const modalRef = useRef(null); // Reference to the modal div

  useEffect(() => {
    if (!isOpen || !endPointType) return;

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
