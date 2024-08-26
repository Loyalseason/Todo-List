import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
function App() {
  const [itemList, setItemList] = useState([]);

  function addTask(task) {
    setItemList([...itemList, task]);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl border-4 rounded-2xl w-[70%] h-[80%]">
        <Header totalItems={itemList.length} />
        <TaskInput addTask={addTask} />
        <TaskList itemList={itemList} />
      </div>
    </div>
  );
}

export default App;
