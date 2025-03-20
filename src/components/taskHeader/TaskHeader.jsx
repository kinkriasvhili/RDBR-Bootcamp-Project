import departmentName from "../../pages/TasksPage-LandingPage/tasksBody/departmentName.js"
import styles from './taskHeader.module.css'

export default function TaskHeader({task}) {
  return (
      <div className={styles.leftSide}>
        <button className={`${styles.priority} ${styles[`${task.priority.name}Color`]}`}>
          <img src={task.priority.icon} style={{ width: "20px", height: "20px" }} />
          {task.priority.name}
        </button>
        <button className={styles.department}>
          {departmentName(task)}
        </button>
      </div>
  )
}