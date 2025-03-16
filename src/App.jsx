import Nav from "./components/Nav";
import Task from "./pages/TasksPage/Task";
import "./general.css";
export const api = "https://momentum.redberryinternship.ge/api";
export const apiToken = "9e6f9d45-29f1-436d-bf35-533eaf068c62";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <Nav employees={employees} setEmployees={setEmployees} />
      <Task employees={employees} setEmployees={setEmployees} />
    </div>
  );
}

export default App;
