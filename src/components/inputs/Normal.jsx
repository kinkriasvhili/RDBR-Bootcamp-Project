import styles from './inputs.module.css'
import Requairements from './Requairements';

export default function NormalInput({ formData, handleChange, inputName, type, name }) {
  return (
    <div  
      className={name === "avatar" ? styles.avatarContainer : styles.singleInputCon}
      
    >
      <label>{inputName}*</label>
      <input
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

