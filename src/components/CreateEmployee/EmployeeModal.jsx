import { useEffect, useReducer, useState } from "react";
import styles from "./employee.module.css";
import { putEmployeesData } from "../../fetchData.js";
import closeBtn from '../../images/Cancel.png'
import Department from "../inputs/Department";
import NormalInput from "../inputs/Normal";

const fromReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, [action.field]: action.value };
    case "CHANGE_FILE":
      return { ...state, avatar: action.file };
    case "RESET":
      return { name: "", surname: "", avatar: null, department_id: "" };
    default:
      return state;
  }
};

export default function EmployeeModal({
  isModalOpen,
  closeModal,
  EmployeeAdd,
}) {
  const [formData, dispatch] = useReducer(fromReducer, {
    name: "",
    surname: "",
    avatar: null,
    department_id: ""
  });

  const [btnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = formData.name.trim() !== "" &&
      formData.surname.trim() !== "" &&
      formData.avatar !== null &&
      formData.department_id.trim() !== "";

    setBtnDisabled(!allFieldsFilled);
  }, [formData]);

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      dispatch({ type: "CHANGE_FILE", file: e.target.files[0] });
    } else {
      dispatch({ type: "CHANGE", field: e.target.name, value: e.target.value });
    }
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeXBtn} onClick={closeModal}>
          <img src={closeBtn} alt="" />
        </button>
        <div>
          <h2>თანამშრომლის დამატება</h2>
          <form>
            <div className={styles.inputContainer}>
              <div className={styles.inputRow}>
                <NormalInput
                  inputName='სახელი'
                  formData={formData}
                  handleChange={handleChange}
                  name="name"
                  type="text"
                  location="employeeModal"
                />
                <NormalInput
                  inputName='გვარი'
                  formData={formData}
                  handleChange={handleChange}
                  name="surname"
                  type="text"
                  location="employeeModal"
                />
              </div>
              <NormalInput
                inputName='ავატარი'
                formData={null}
                handleChange={handleChange}
                name="avatar"
                type="file"
                location="employeeModal"
              />
              <Department
                location="employeeModal"
                selectName="დეპარტამენტი*"
                endPointType={"departments"}
                selfType="departments"
                handleChange={handleChange}
                name="department_id"
              />
            </div>

            <div className={styles.buttonsContainer}>
              <button className={styles.cancelButton} onClick={closeModal}>
                გაუქმება
              </button>
              <button
                className={`${styles.addEmployeeBtn} ${btnDisabled ? styles.disabledButton : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  putEmployeesData(formData, dispatch, closeModal);
                }}
                disabled={btnDisabled}
              >
                დაამატე თანამშრომელი
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


