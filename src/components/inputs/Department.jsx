import styles from '../../pages/CreateTask/create.module.css'
import { fetchData, fetchEmployees } from '../../fetchData'
import { useState, useEffect } from 'react'


export default function Department({location, selectName, endPointType, selfType, handleChange, name}) {
  const [data, setData] = useState(null)
  
  useEffect(()=> {
    if (endPointType === selfType & endPointType != "employees")  {
      fetchData(endPointType, setData)
    } else if (endPointType == "employees" & endPointType === selfType) {
      fetchEmployees(setData, endPointType)
    }
  }, [endPointType])
  return (
    
    <div className={location == "createTask" ? styles.department : ""}>
      
      <label >{selectName}</label>
      <select id="Departament" name={name} onChange={handleChange}>
        {data ? (
         data.map((item) => (
            <option className={styles.option} value={item.id} key={item.id}>
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