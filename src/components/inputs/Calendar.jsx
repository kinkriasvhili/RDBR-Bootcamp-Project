import styles from "./inputs.module.css"

export default function Calendar({ location, calendarName }) {
  return (
    <div className={styles.calendarContainer}>
      <label>{calendarName}</label>
      <input 
        type="date" 
        className={styles.calendarInput}
        data-location={location} 
      />
    </div>
  );
};
