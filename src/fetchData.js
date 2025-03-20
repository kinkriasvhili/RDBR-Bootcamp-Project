import { api, apiToken } from "./App";


export async function fetchData(endPointType, setData) {
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
        console.log("Sending request with data:", data);

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

        const newTask = JSON.parse(responseText); // Parse JSON manually
        // setTasks((prevTasks) => [...prevTasks, newTask]);
        // dispatch({ type: "RESET" });
    } catch (error) {
        console.error("Error:", error);
    }
}
