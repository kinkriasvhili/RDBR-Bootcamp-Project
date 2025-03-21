import { api, apiToken } from "./App";


export async function fetchData(endPointType, setData, newStatusId) {
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

export async function fetchEmployees(setEmployees, endPointType, filterEmployee, location, formData) {
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
        // console.log(data)
        if (filterEmployee=="filterTrue" & location=="createTask") {
            console.log(endPointType == "employees")
            const filteredData = data.filter(item => item.department.id == formData.department_id);
            setEmployees(filteredData); 
        }
        // console.log(data)

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
        department_id: formData.department_id
    };
    console.log(data)

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
        console.log(newTask) 
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function putEmployeesData(formData, dispatch, closeModal) {
    const data = new FormData();
    data.append("name", formData.name);
    data.append("surname", formData.surname);
    data.append("avatar", formData.avatar);
    data.append("department_id", formData.department_id);
    console.log(data)

    try {
        const response = await fetch(`api/employees`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${apiToken}`,
                Accept: "application/json",
            },
            body: data,
        });
        
        if (!response.ok) {
            const errorText = await response.text(); 
            throw new Error(`Failed to create employee: ${errorText}`);
        }
        const newEmployee = await response.json();

        dispatch({ type: "RESET" });
        closeModal();
    } catch (error) {
        console.error("Error:", error);
    }
}



export async function updateTaskStatus(taskId, statusId) {
    try {
        console.log(statusId)
        const response = await fetch(`${api}/tasks/${taskId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${apiToken}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                status_id: Number(statusId), // force it to be number
            })
        });

        console.log(response);

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const updatedTask = await response.json();
        console.log("Task updated successfully:", updatedTask);
        return updatedTask;
    } catch (error) {
        console.error("Failed to update task status:", error);
    }
}

export async function postComments(task, text, parentId) {
    const data = {
        text: text,
        parent_id: parentId
    };
    console.log(task.id)
    // console.log(data)

    try {
        const response = await fetch(`${api}/tasks/${task.id}/comments`, {
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
        console.log(newTask)
        console.log(task.id)
    } catch (error) {
        console.error("Error:", error);
    }
}
export async function getComments({task, getComments}) {
    try {
        const response = await fetch(`${api}/tasks/${task.id}/comments`, {
            method: "GET",
            headers: {
            Authorization: `Bearer ${apiToken}`,
            Accept: "application/json",
            },
        });

        if (!response.ok) throw new Error("Failed to fetch employees");

        const data = await response.json();
        getComments(data)
        // console.log(data)
        
    } catch (error) {
        console.error("Error fetching employees:", error);
    }
}