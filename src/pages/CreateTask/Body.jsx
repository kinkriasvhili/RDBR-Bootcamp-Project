import NormalInput from '../../components/inputs/Normal'
import Requairements from '../../components/inputs/Requairements'
import styles from './create.module.css'
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type){
    case "CHANGE":
      return {...state, [action.field]: action.value}
  }


}

export default function Body() {
  const [formData, dispatch] = useReducer(reducer, {
    title: "",
    department_id: 1,
    describtion: "",
    ResponsibleEmployee: "",
    priority: "საშუალო",
    status: 'დასაწყები',
    deadline: ""
  })  

  const handleChange = (e) => {
    dispatch({type: "CHANGE", field: e.target.name, value: e.target.value})
  };

  return (
    <div className={styles.body}>
       <form>
          <NormalInput 
            inputName='სათაური'  
            formData={formData} 
            handleChange={handleChange} 
            name="title"
            type="text"/>
          <Requairements />
       </form>
       
    </div>
  )
}