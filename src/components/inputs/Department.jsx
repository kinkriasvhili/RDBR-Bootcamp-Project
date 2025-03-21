import styles from '../../pages/CreateTask/create.module.css'
import { fetchData, fetchEmployees } from '../../fetchData'
import { useState, useEffect } from 'react'
import taskInfoStyle from '../../pages/TaskDetails/taskDetail.module.css'

export default function Department({location, selectName, endPointType, selfType, handleChange, name, value}) {

  const [data, setData] = useState(null)
  let clasNameContainer = ""
  switch (location) {
    case "createTask":
      clasNameContainer = styles.department;
      break;
    case "taskInformation":
      clasNameContainer = taskInfoStyle.taskSelectStyle
      break
  }

  useEffect(()=> {
    if (endPointType === selfType & endPointType != "employees")  {
      fetchData(endPointType, setData)
    } else if (endPointType == "employees" & endPointType === selfType) {
      fetchEmployees(setData, endPointType)
    }
  }, [endPointType])

  const filteredData = data ? data.filter((item) => item.name !== value) : [];
  console.log(filteredData)
  return (
    
    <div className={clasNameContainer}>
      
      <label>{location == "taskInformation" ? "" : selectName}</label>
      <select id="Departament" name={name} onChange={handleChange}>
        {value && (
          <option value={value} key="default">
            {value}
          </option>
        )}
        {filteredData.map((item) => (
          <option className={styles.option} value={item.id} key={item.id}>
            {item.name} {item.surname ? item.surname : ''}
          </option>
        ))}
        
      </select>
    </div>
  )
}


// 