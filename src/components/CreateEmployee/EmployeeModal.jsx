import { useState, useReducer } from "react";
import styles from "./employee.module.css";
import { api, apiToken } from "../../App"; // Import API details
import closeBtn from '../../images/Cancel.png'
import Department from "../inputs/Department";
import NormalInput from "../inputs/Normal";
import Requairements from "../inputs/Requairements";

const fromReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {...state, [action.field]: action.value}
    case "CHANGE_FILE":
      return {...state, avatar: action.file};
    case 'RESET':
      return {name: "", surname: "", avatar: null, department_id: 1};
    default:
      return {state}
  }
}

export default function EmployeeModal({
  isModalOpen,
  closeModal,
  EmployeeAdd,
}) {
  const [formData, dispatch] = useReducer(fromReducer, {
    name: "",
    surname: "",
    avatar: null,
    department_id: 1
  })
  const handleChange = (e) => {
    dispatch({type: "CHANGE", field: e.target.name, value: e.target.value})
  };

  const handleFileChange = (e) => {
    dispatch({type: "CHANGE_FILE", file: e.target.files[0]})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("surname", formData.surname);
    data.append("avatar", formData.avatar);
    data.append("department_id", formData.department_id);

    try {
      const response = await fetch(`${api}/employees`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
        body: data,
      });

      if (!response.ok) throw new Error("Failed to create employee");

      const newEmployee = await response.json();
      EmployeeAdd(newEmployee); 
      dispatch({ type: "RESET" });
      closeModal();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeXBtn} onClick={closeModal}><img src={closeBtn} alt="" /></button>
        <div>
          <h2>თანამშრომლის დამატება</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
              <div className={styles.inputRow}>
                <NormalInput 
                  inputName='სახელი' 
                  formData={formData} 
                  handleChange={handleChange} 
                  name="name"
                  type="text"
                  location="employeeModal"/>
                
                <NormalInput 
                  inputName='გვარი'  
                  formData={formData} 
                  handleChange={handleChange} 
                  name="surname"
                  type="text"
                  location="employeeModal"/>
              </div>
              <NormalInput 
                inputName='ავატარი'  
                formData={null}
                handleChange={handleFileChange} 
                name="avatar"
                type="file"
                location="employeeModal"/>
              <Department selectName="დეპარტამენტი*" />
            </div>
            
            <div className={styles.buttonsContainer}>
              <button className={styles.cancelButton} onClick={closeModal}>გაუქმება</button>
              <button className={styles.addEmployeeBtn} type="submit">დაამატე თანამშრომელი</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
