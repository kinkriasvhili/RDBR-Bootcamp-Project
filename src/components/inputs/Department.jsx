import styles from './inputs.module.css'
export default function Department() {
  return (
    <div>
      <label >დეპარტამენტი</label>
      <select id="Departament" name="options">
        <option value="option1">Dep 1</option>
        <option value="option2">Dep 2</option>
        <option value="option3">Dep 3</option>
      </select>
    </div>
  )
}