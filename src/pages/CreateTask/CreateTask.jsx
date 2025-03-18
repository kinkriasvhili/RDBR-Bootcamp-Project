import Body from "./Body"
import styles from "./create.module.css"
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type){
    case "CHANGE":
      return {...state, [action.field]: action.value}
  }
}

export default function CreateTask() {
    const [formData, dispatch] = useReducer(reducer, {
        title: "",
        department_id: 1,
        describtion: "",
        ResponsibleEmployee: "",
        priority: "საშუალო",
        status: 'დასაწყები',
        deadline: "",
      })  
    return (
        <div className={styles.CreateTaskContainer}>
            <h2 className={styles.title}>შექმენი ახალი დავალება</h2>
            <Body formData={formData} dispatch={dispatch}/>
        </div>
    )
}
  