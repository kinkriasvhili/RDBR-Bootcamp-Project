import Body from "./Body"
import styles from "./create.module.css"

export default function CreateTask() {
    return (
        <div className={styles.CreateTaskContainer}>
            <h2 className={styles.title}>შექმენი ახალი დავალება</h2>
            <Body />
        </div>
    )
}
  