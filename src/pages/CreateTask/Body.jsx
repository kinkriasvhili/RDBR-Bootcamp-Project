import NormalInput from '../../components/inputs/Normal'
import styles from './create.module.css'
import Department from '../../components/inputs/Department';
import Calendar from '../../components/inputs/Calendar';

export default function Body({formData, dispatch}) {
  const handleChange = (e) => {
    dispatch({type: "CHANGE", field: e.target.name, value: e.target.value})
  };

  return (
    <div className={styles.body}>
        <form>
          <div className={styles.inputRow}>
            <NormalInput 
              inputName='სათაური'  
              formData={formData} 
              handleChange={handleChange} 
              name="title"
              type="text"
              location="createTask"
            />
            <Department location="createTask" selectName="დეპარტამენტი*"/>
          </div>
          <div className={styles.inputRow}>
            <NormalInput 
              inputName='აღწერა'  
              formData={formData} 
              handleChange={handleChange} 
              name="describtion"
              type="text"
              location="createTask"
            />
            <Department location="createTask"  selectName="პასუხისმბგებელი თანამშრომელი*"/>
          </div>
          <div className={styles.inputRow}>
            <div className={styles.miniRow} >
              <Department location="createTask"  selectName="პრიორიტეტი*"/>
              <Department location="createTask"  selectName="სტატუსი*"/>
            </div>
            <Calendar location="createTask"  calendarName="დედლაინი*"/>
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.createTaskButton}>
              დავალების შექმნა
            </button>
          </div>
       </form>
    </div>
  )
}