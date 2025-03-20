import { api, apiToken } from "./App";
import img from './images/Cancel.png'


export async function fetchData(endPointType, setData) {
    if (!endPointType) return;
    try {
        const url = `${api}/${endPointType}`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const jsonRes = await res.json();
        setData(jsonRes);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export async function fetchEmployees(setEmployees, endPointType) {
    try {
        const response = await fetch(`${api}/${endPointType}`, {
            method: "GET",
            headers: {
            Authorization: `Bearer ${apiToken}`,
            Accept: "application/json",
            },
        });

        if (!response.ok) throw new Error("Failed to fetch employees");

        const data = await response.json();
        setEmployees(data);
    } catch (error) {
        console.error("Error fetching employees:", error);
    }
}



export async function putTasksData(formData, setTasks) {
    const data = {
        name: formData.title,
        description: formData.describtion,
        due_date: formData.due_data,
        status_id: formData.status,
        employee_id: formData.employee,
        priority_id: formData.priority,
        department_id: formData.department
    };

    try {
        const response = await fetch("api/tasks", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiToken}`,
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        });

        const responseText = await response.text(); 
        console.log("Raw response:", responseText); // ✅ Log response

        if (!response.ok) {
            throw new Error(`Server Error (${response.status}): ${responseText}`);
        }

        const newTask = JSON.parse(responseText); 
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function putEmployeesData(formData, dispatch, closeModal) {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("surname", formData.surname);
    data.append("avatar", formData.avatar);
    data.append("department_id", "1");
    console.log(data)
    try {
        console.log(apiToken)
        const response = await fetch(`api/employees`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiToken}`,
                Accept: "application/json",
            },
            body: data,
        });
        console.log(response)
        
        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Failed to create employee: ${errorText}`);
        }
        console.log(response)
        const newEmployee = await response.json();

        dispatch({ type: "RESET" });
        closeModal();
    } catch (error) {
        console.error("Error:", error);
    }
}
