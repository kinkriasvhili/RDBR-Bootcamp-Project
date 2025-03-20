import { useLocation } from "react-router-dom";
import styles from "./taskDEtail.module.css"
import TaskInformation from "./TaskInformation";
import TaskComment from "./TaskComment";
import departmentName from "../TasksPage-LandingPage/tasksBody/departmentName.js";
import TaskHeader from "../../components/taskHeader/TaskHeader.jsx";
export default function TaskDetails() {
  const location = useLocation();
  const task = location.state?.task; // Get task from state

  if (!task) return <p>Task not found</p>;

  return (
    <div className={styles.taskDetailsContainer}>
      <TaskHeader task={task}/>
      <div className={styles.taskDetailsComponents}>
        <TaskInformation task={task}/>
        <TaskComment task={task} />
      </div>
    </div>
    
  );
}
