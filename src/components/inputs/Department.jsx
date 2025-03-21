import styles from '../../pages/CreateTask/create.module.css';
import { fetchData, fetchEmployees } from '../../fetchData';
import { useState, useEffect } from 'react';
import taskInfoStyle from '../../pages/TaskDetails/taskDetail.module.css';

export default function Department({
  location,
  selectName,
  endPointType,
  selfType,
  handleChange,
  name,
  value,
  isSelectDisabled,
  filterEmployee,
  formData,
}) {
  
  const [data, setData] = useState(null);
  const [selectedValue, setSelectedValue] = useState(''); // Local state to manage selected value

  let clasNameContainer = '';
  switch (location) {
    case 'createTask':
      clasNameContainer = styles.department;
      break;
    case 'taskInformation':
      clasNameContainer = taskInfoStyle.taskSelectStyle;
      break;
  }
  
  useEffect(() => {
    if (endPointType === selfType && endPointType !== 'employees') {
      fetchData(endPointType, setData);
    } else if (endPointType === 'employees' && endPointType === selfType) {
      fetchEmployees(setData, endPointType, filterEmployee, location, formData);

    }
  }, [endPointType, selfType]);

  const filteredData = data ? data.filter((item) => item.name !== value) : [];
  

  const handleSelectChange = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue); // Update the selected value in local state
    handleChange(e); // Call the passed-in `handleChange` function
  };

  return (
    <div className={`${clasNameContainer} ${isSelectDisabled ? styles.dis : ''}`}>
      <label>{location === 'taskInformation' ? '' : selectName}</label>
      <select
        disabled={isSelectDisabled}
        id="Departament"
        name={name}
        value={selectedValue}
        className={styles.select}
        onChange={handleSelectChange}
      >
        
        <option value="" disabled className={styles.chooseOption}>
          {value ? value : "აირჩიე"}
          {console.log(value)}
        </option>
        {filteredData.map((item) => (
          <option className={styles.option} value={item.id} key={item.id}>
            {item.name} {item.surname ? item.surname : ''}
          </option>
        ))}
      </select>
    </div>
  );
}
