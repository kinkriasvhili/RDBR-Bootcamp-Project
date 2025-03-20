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
        console.log(data)
        setEmployees(data);
    } catch (error) {
        console.error("Error fetching employees:", error);
    }
}

export async function putTasksData(formData, setTasks) {
    const data = {
        name: "შექმენით readme ფაილი",
        description: "აღწერეთ შესრულებული დავალება რიდმი ფაილით",
        due_date: "2025-12-31",
        status_id: 1,
        employee_id: 1,
        priority_id: 1
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
