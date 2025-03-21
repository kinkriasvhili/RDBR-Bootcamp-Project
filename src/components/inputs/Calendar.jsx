import styles from "./inputs.module.css";

export default function Calendar({ location, calendarName, handleChange, name }) {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className={styles.calendarContainer}>
      <label>{calendarName}</label>
      <input 
        type="date" 
        min={today} 
        onChange={(e) => handleChange(e)}
        name={name}
        className={styles.calendarInput}
        data-location={location} 
      />
    </div>
  );
}
