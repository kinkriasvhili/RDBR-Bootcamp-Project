import { useEffect, useState } from "react";
import styles from "./filter.module.css";
import { fetchData, fetchEmployees } from "./fetchData.js";
export default function FilterModal({
  isOpen,
  onClose,
  endPointType,
  employees,
  setEmployees,
}) {
  const [data, setData] = useState(null);

  useEffect(() => {
   
     if (!isOpen || !endPointType)  {
      return;
    } else  if (endPointType == "employees") {
      fetchEmployees(setEmployees, endPointType, employees)
      console.log(employees)
    } else if  (endPointType != "employees") {
      fetchData(endPointType, setData);
    }
  }, [isOpen, endPointType]);
//  
 

if (!isOpen) return null;

const list = endPointType !== "employees" ? data : employees;
const getItemText = (item) => 
  endPointType !== "employees" ? item.name : `${item.name} ${item.surname}`;

return (
  <div className={styles.moduleContainer}>
    {list ? (
      <div className={styles.itemsCont}>
        {list.map((item) => (
          <div className={styles.itemCont} key={item.id}>
            <input type="checkbox" />
            <p>{getItemText(item)}</p>
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


