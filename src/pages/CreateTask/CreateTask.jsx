import Body from "./Body"
import styles from "./create.module.css"
import { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type){
    case "CHANGE":
      return {...state, [action.field]: action.value}
    case "RESET":
      return {
        id: 1,
        title: "",
        describtion: "",
        due_data: "",
        status: 'დასაწყები',
        priority: "საშუალო",
        department: "",
        employee: "",
      }
  }
}

export default function CreateTask() {
    const [formData, dispatch] = useReducer(reducer, {
        id: 1,
        title: "me",
        describtion: "me",
        due_data: "2025-03-26",
        status: 'დასაწყები',
        priority: "საშუალო",
        department: "1",
        employee: "22",
      })  
    return (
        <div className={styles.CreateTaskContainer}>
            <h2 className={styles.title}>შექმენი ახალი დავალება</h2>
            <Body formData={formData} dispatch={dispatch}/>
        </div>
    )
}
  