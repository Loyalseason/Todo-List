import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
function App() {
  const [itemList, setItemList] = useState([]);
  const [completed, setCompletedTask] = useState([]);

  function addTask(task) {
    setItemList((prevList) => {
      const newList = [...prevList, task];
      setCompletedTask([...completed, false]); // Add a new `false` entry for the new task
      return newList;
    });
  }

  function handleDone(index) {
    const updatedDoneTasks = [...completed];
    updatedDoneTasks[index] = !updatedDoneTasks[index];
    setCompletedTask(updatedDoneTasks);
  }

  function deleteTask(index) {
    const updatedList = [...itemList];
    updatedList.splice(index, 1);
    setItemList(updatedList);

    const updatedCompleted = [...completed];
    updatedCompleted.splice(index, 1); // Remove the corresponding completion status
    setCompletedTask(updatedCompleted);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl border-4 rounded-2xl w-[70%] h-[80%]">
        <Header totalItems={itemList.length} />
        <TaskInput addTask={addTask} />
        {!itemList.length ? (
          <p className="text-center p-3 font-serif  text-green-900">
            No Task Available
          </p>
        ) : (
          <TaskList
            itemList={itemList}
            doneTask={completed}
            finishedTask={handleDone}
            removeTask={deleteTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
