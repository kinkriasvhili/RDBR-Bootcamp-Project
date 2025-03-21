import styles from './taskBody.module.css'
import commentImage from '../../../images/Vector.png'
import TaskHeader from '../../../components/taskHeader/TaskHeader';
import { formatDateMont } from '../../../components/date';

export default function SingleTask({task, color, index}) {
 
  return (
    <div className={`${styles[`${color}-singleTask`]} ${styles.singleTask}`}>
      <div className={`${styles.taskRow} ${styles.firstRow}`}>
        <TaskHeader task={task}/>
        <div className={styles.dueData}>
          <span className={styles.dueData}>
            {formatDateMont(task.due_date)}
          </span>
        </div>
      </div>
      <div className={`${styles.taskRow} ${styles.secondRow}`}>
        <p className={styles.taskTitle}>{task.name}</p>
        <p className={styles.taskDescribtion}>{task.description}</p>
      </div>
      <div className={`${styles.taskRow} ${styles.thirdtRow}`}>
        <div>
          <img className={styles.imgProfile} src={task.employee.avatar} alt="" />
        </div>
        <div className={styles.commentContainer}>
          <img className={styles.imgComment} src={commentImage} alt="" />
          <span className={styles.commentCount}>8</span>
        </div>
      </div>
    </div>
  );
}


/**
 * 
 */