import Nav from "./components/Nav";
import Task from "./pages/TasksPage-LandingPage/Task";
import "./general.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateTask from "./pages/CreateTask/CreateTask";
import TaskDetails from "./pages/TaskDetails/TaskDetails";
export const api = "https://momentum.redberryinternship.ge/api";
// export const apiToken = "9e6f9d45-29f1-436d-bf35-533eaf068c62";
// export const apiToken = "9e7a7bdf-8d9d-4cab-96c0-82312869a468"
export const apiToken ="9e7be333-68a7-4898-a6c3-befc07f121c9"

function App() {
  const [employees, setEmployees] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Nav employees={employees} setEmployees={setEmployees} />
        <Routes>
          <Route path="/" element={<Task employees={employees} setEmployees={setEmployees} />}/>
          <Route path="CreateTask" element={<CreateTask/>}/>
          <Route path="TaskDetails" element={<TaskDetails />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
