import NormalInput from '../../components/inputs/Normal'
import styles from './create.module.css'
import Department from '../../components/inputs/Department';
import Calendar from '../../components/inputs/Calendar';
import { putTasksData } from '../../fetchData';
import { useState } from 'react';

export default function Body({ formData, dispatch }) {
  const [endPointType, setEndPointType] = useState("");
  const [task, setTasks] = useState([])

  const handleChange = (e) => {
    console.log(e.target.name)
    console.log(e.target.value)
    dispatch({ type: "CHANGE", field: e.target.name, value: e.target.value });
    console.log(formData)
  };


  return (
    <div className={styles.body}>
      <form>
        <div className={styles.inputRow}>
          <NormalInput
            inputName='სათაური'
            formData={formData}
            handleChange={handleChange}
            name="title"
            type="text"
            location="createTask"
          />
          <span onClick={()=> {
            setEndPointType("departments");
          }}>
          <Department 
            location="createTask"
            selectName="დეპარტამენტი*"
            endPointType={endPointType}
            selfType="departments"
            handleChange={handleChange}
            name="department"
          />
          </span>
          
        </div>
        <div className={styles.inputRow}>
          <NormalInput
            inputName='აღწერა'
            formData={formData}
            handleChange={handleChange}
            name="describtion"
            type="text"
            location="createTask"
          />
          <span onClick={()=> {
            setEndPointType("employees");
          }}>
            <Department
              location="createTask"
              selectName="პასუხისმბგებელი თანამშრომელი*"
              endPointType={endPointType}
              selfType="employees"
              handleChange={handleChange}
              name="employee"
            />
          </span>

          
        </div>
        <div className={styles.inputRow}>
          <div className={styles.miniRow}>
            <span  onClick={()=> {
              setEndPointType("priorities");
             }}>
              <Department
                location="createTask"
                selectName="პრიორიტეტი*"
                endPointType={endPointType}
                selfType="priorities"
                handleChange={handleChange}
                name="priority"

              />
            </span>
            
            <span onClick={()=> {
              setEndPointType("statuses");
            }}>
              <Department
                location="createTask"
                selectName="სტატუსი*"
                endPointType={endPointType}
                selfType="statuses"
                handleChange={handleChange}
                name="status"
              />
            </span>
            
          </div>
          <Calendar 
            name="due_data" 
            location="createTask" 
            calendarName="დედლაინი*" 
            handleChange={handleChange}/>
        </div>
        <div className={styles.buttonContainer}>
          <button
            onClick={(e) => {
              e.preventDefault();
              putTasksData(formData);
            }}
            className={styles.createTaskButton}
          >
            დავალების შექმნა
          </button>
        </div>
      </form>
    </div>
  );
}
