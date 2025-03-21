import Body from "./Body"
import styles from "./create.module.css"
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type){
    case "CHANGE":
      return {...state, [action.field]: action.value}
    case "RESET":
      return {
        title: "",
        describtion: "",
        due_data: "",
        status: "",
        priority: "",
        department_id: "",
        employee: "",
      }
  }
}

export default function CreateTask() {
    const [formData, dispatch] = useReducer(reducer, {
      title: "",
      describtion: "",
      due_data: "",
      status: "",
      priority: "",
      department_id: "",
      employee: "",
      })  
    return (
        <div className={styles.CreateTaskContainer}>
            <h2 className={styles.title}>შექმენი ახალი დავალება</h2>
            <Body formData={formData} dispatch={dispatch}/>
        </div>
    )
}
  