import styles from '../../pages/CreateTask/create.module.css'
export default function Department({location, selectName}) {
  return (
    <div className={location == "createTask" ? styles.department : ""}>
      <label >{selectName}</label>
      <select id="Departament" name="options">
        <option value="option1">Dep 1</option>
        <option value="option2">Dep 2</option>
        <option value="option3">Dep 3</option>
      </select>
    </div>
  )
}