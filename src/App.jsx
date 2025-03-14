import Nav from "./components/Nav";
import Task from "./pages/TasksPage/Task";
import "./general.css";
export const api = "https://momentum.redberryinternship.ge/api";
function App() {
  return (
    <div>
      <Nav />
      <Task />
    </div>
  );
}

export default App;
