import styles from './taskDetail.module.css'
import statusImg from '../../images/status.png'
import employeeImg from '../../images/employee.png'
import calendarImg from '../../images/calendar.png'
import InfoItem from './InfoItem'
import Department from '../../components/inputs/Department'
import { formatDate } from '../../components/date.js'
import {  updateTaskStatus } from '../../fetchData.js'
export default function TaskInformation({task}) {
  const handleChange = async (event) => {
    const newStatusId = event.target.value; 
    await updateTaskStatus(task.id, newStatusId)

  };

  let value = task.status.name
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
          <div className={styles.detailRow}>
            <InfoItem itemName="სტატუსი" image={statusImg}/>
            <div className={styles.statusContainer}>
              <Department
                location="taskInformation"
                selectName="სტატუსი*"
                endPointType="statuses"
                selfType="statuses"
                handleChange={handleChange}
                name="status"
                value={value}
              />
            </div>
          </div>
          <div className={styles.detailRow}>
            <InfoItem itemName="თანამშრომელი" image={employeeImg}/>
            <div className={styles.employeeDetailedInfo}>
              <div className={styles.employeeProfile}>
                <img className={styles.imgProfile} src={task.employee.avatar} alt="" />
              </div>
              <div className={styles.employeeInfo}>
                <span>{task.department.name}</span>
                <p>{task.employee.name} {task.employee.surname}</p>
              </div>
            </div>
          </div>
          <div className={styles.detailRow}>
            <InfoItem itemName="დავალების ვადა" image={calendarImg}/>
            <div className={styles.dueData}>
              <span>{formatDate(task.due_date)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
