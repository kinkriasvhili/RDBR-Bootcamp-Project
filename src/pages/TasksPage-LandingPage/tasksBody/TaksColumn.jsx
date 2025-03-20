import styles from "./taskBody.module.css"
import { useState, useEffect } from "react"
import { fetchEmployees } from "../../../fetchData"
import SingleTask from "./SingleTask"

export default function TaskColumn({title, color}) {
  const [tasks, setTasks] = useState([])
  const endPointType = "tasks"
  useEffect(()=> {
    const getTasks = async () => {
      try {
        await fetchEmployees(setTasks, endPointType, tasks)
      } catch(error) {
        console.log(error)
      }
    }
    getTasks()
  },[])

  return (
    <div className={styles.taskColumn}>
      
      <button className={`${styles[`${color}-TaskColumnButton`]} ${styles.taskColumnButton}`}>
        {title}
      </button>
      {tasks? (
        tasks.map((task, index)=> {
          if(title == task.status.name) {
            return (
              <div key={index}>
                <SingleTask task={task} index={index} color={color} />
              </div>)
          }
          
        }) 
      ) : (
        <p>Loading tasks...</p>
      )}
    </div>
  )
}