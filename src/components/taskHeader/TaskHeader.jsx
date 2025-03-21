import departmentName from "../../pages/TasksPage-LandingPage/tasksBody/departmentName.js"
import styles from './taskHeader.module.css'

export default function TaskHeader({task}) {
  let depName = departmentName(task);
  let depClassName = `${depName}-department`
  // console.log(task.employee.department.name)
  return (
      <div className={styles.leftSide}>
        <button className={`${styles.priority} ${styles[`${task.priority.name}Color`]}`}>
          <img src={task.priority.icon} style={{ width: "20px", height: "20px" }} />
          {task.priority.name}
        </button>
        <button className={`${styles.department} ${styles[depClassName]}`}>

          {depName}
        </button>
      </div>
  )
}