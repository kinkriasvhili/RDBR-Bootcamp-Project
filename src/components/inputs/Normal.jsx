import styles from './inputs.module.css'
import Requairements from './Requairements';

export default function NormalInput({ formData, handleChange, inputName, type, name, location }) {
  let containerClassNme = ""
  if(name === "avatar" & location=="employeeModal") {
    containerClassNme = styles.avatarContainer 
  } else if ((name === "title" & location=="createTask") || inputName == "აღწერა") {
    containerClassNme = styles.titleContainer 
  } else {
    containerClassNme = styles.singleInputCon
  }
  return (
    <div className={containerClassNme}>
      <label>{inputName}*</label>
      <input
        className={inputName == "აღწერა"? styles.describeInp : ""}
        type={type}
        name={name}
        value={formData ? formData[name] : ""}
        onChange={handleChange}
        required
      />
      <div className={name === "avatar" ? styles.disable : styles.requairements }>
        <Requairements />
      </div>
      {/* */}
    </div>
  );
}

