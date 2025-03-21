import NormalInput from '../../components/inputs/Normal'
import styles from './create.module.css'
import Department from '../../components/inputs/Department';
import Calendar from '../../components/inputs/Calendar';
import { putTasksData } from '../../fetchData';
import { useState, useEffect } from 'react';

export default function Body({ formData, dispatch }) {
  const [endPointType, setEndPointType] = useState("");
  const [isSelectDisabled, setIsSelectDisabled] = useState(true)
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "CHANGE", field: name, value });
    if (name == "department_id") {
      disabledInput(value);
    }

  };
  

  
  const disabledInput = (departmentValue) => {
    // Check if the department value is not null
    if (departmentValue) {
      setIsSelectDisabled(false);
    } else {
      setIsSelectDisabled(true);
    }
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
            value={formData.title}
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
            name="department_id"
            isSelectDisabled={false}
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
            value={formData.describtion}

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
              isSelectDisabled={isSelectDisabled}
              filterEmployee={'filterTrue'}
              formData={formData}

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
                isSelectDisabled={false}

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
                isSelectDisabled={false}
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
              dispatch({ type: "RESET" });
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


  
 