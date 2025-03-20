import TaskColumn from './TaksColumn'
import styles from './taskBody.module.css'

export default function TaskBody() {
  return (
    <div className={styles.taskBody}>
      <TaskColumn color="yellow" title="დასაწყები"/>
      <TaskColumn color="orange" title="პროგრესში"/>
      <TaskColumn color="pink" title="მზად ტესტირებისთვის"/>
      <TaskColumn color="blue" title="დასრულებული"/>
    </div>
  )
}