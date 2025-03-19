import { api, apiToken } from "./App";


export async function fetchData(endPointType, setData) {
    try {
        const url = `${api}/${endPointType}`;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const jsonRes = await res.json();
        console.log(jsonRes)
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

export function putTasksData(formData) {
    const endPointType = "task"
    const data = new FormData()
    data.append("name", formData.title)
    data.append("description", formData.describtion)
    data.append("due_data", formData.deadline)
    data.append("status_id", formData.status)
    data.append("employee_id", formData.ResponsibleEmployee)
    data.append("priority_id", formData.priority)


}