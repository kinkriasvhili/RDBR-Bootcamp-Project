import styles from '../../pages/CreateTask/create.module.css'
import { fetchData, fetchEmployees } from '../../fetchData'
import { useState, useEffect } from 'react'


export default function Department({location, selectName, endPointType, selfType}) {
  const [data, setData] = useState(null)
  const [employees, setEmployees] = useState(null)
  
  useEffect(()=> {
    if (endPointType === selfType & endPointType != "employees")  {
      console.log(endPointType)
      fetchData(endPointType, setData)
      console.log(data)
    } else if (endPointType == "employees" & endPointType === selfType) {
      fetchEmployees(setData, endPointType)
      console.log(data)
    }
  }, [endPointType])
  return (
    
    <div className={location == "createTask" ? styles.department : ""}>
      
      <label >{selectName}</label>
      <select id="Departament" name="options">
        {data ? (
         data.map((item) => (
            <option className={styles.option} value="option1" key={item.id}>
              {item.name} {item.surname? item.surname: ""}
            </option>
          ))
        ) : (
          <option value="option20">..loading</option>
        )}
        
      </select>
    </div>
  )
}


// 