import styles from './taskDetail.module.css'

export default function TaskInformation({task}) {
  return (
    <div className={styles.taskInformationContainer}>
      <div className={styles.taskNamingConatiner}>
        <div className={styles.taskTitle}>
          <p>{task.name}</p>
        </div>
        <div className={styles.taskDescribtion}>
          <p>{task.description}</p>
        </div>
      </div>
      <div className={styles.taskDetailedInformation}>
        <h2>დავალების დეტალები</h2>
        <div className={styles.details}>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}
