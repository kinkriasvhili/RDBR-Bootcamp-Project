import styles from "./inputs.module.css"

export default function Calendar({ location, calendarName, handleChange, name }) {
  return (
    <div className={styles.calendarContainer}>
      <label>{calendarName}</label>
      <input 
        type="date" 
        onChange={(e)=> {
          handleChange(e)
        }}
        name={name}
        className={styles.calendarInput}
        data-location={location} 
      />
    </div>
  );
};
