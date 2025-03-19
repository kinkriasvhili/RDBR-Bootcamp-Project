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