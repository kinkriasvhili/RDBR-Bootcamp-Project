import styles from './taskBody.module.css'
import profileImage from '../../../images/profile-pic.jpeg'
import commentImage from '../../../images/Vector.png'
import departmentName from './departmentName'

export default function SingleTask({task, color, index}) {
  
  return(
    <div  className={`${styles[`${color}-singleTask`]} ${styles.singleTask}`}>
      <div className={`${styles.taskRow} ${styles.firstRow}`}>
        <div className={styles.leftSide}>
          <button className={`${styles.priority} ${styles[`${task.priority.name}Color`]}`}>
            <img src={task.priority.icon} style={{ width: "20px", height: "20px" }} />
            {task.priority.name}
          </button>
          <button className={styles.department}>
            დიზაინი
          </button>
        </div>
        <div className={styles.dueData}>
          <span>
            {new Date(task.due_data).toLocaleDateString()}
          </span>
          
        </div>
      </div>
      <div className={`${styles.taskRow} ${styles.secondRow}`}>
        <p className={styles.taskTitle}>
          {task.name}
        </p>
        <p className={styles.taskDescribtion}>
          {task.description}
        </p>
      </div>
      <div className={`${styles.taskRow} ${styles.thirdtRow}`}>
        <div>
          <img className={styles.imgProfile} src={task.employee.icon} alt="" />
        </div>
        <div className={styles.commentContainer}>
          <img className={styles.imgComment} src={commentImage} alt="" />
          <span className={styles.commentCount}>8</span>
        </div>
      </div>
    </div>
  )
}

/**
 * 
 */