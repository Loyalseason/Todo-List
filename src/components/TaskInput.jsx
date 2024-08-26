import React from "react";
import { useState } from "react";

function TaskInput({ addTask }) {
  const [text, setTextInput] = useState("");
  // const [itemList, setItemList] = useState([]);

  function handleChange(e) {
    setTextInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addTask(text);

    setTextInput("");
  }

  return (
    <div>
      <form
        className="flex flex-col p-4 gap-2 font-serif"
        onSubmit={handleSubmit}
      >
        <label
          className="p-1 uppercase font-serif font-semibold"
          htmlFor="addTask"
        >
          Add Task
        </label>
        <input
          id="addTask"
          className="border-2 rounded-lg p-2 outline-none"
          type="text"
          required
          value={text}
          onChange={handleChange}
          placeholder="Add a task here"
        />
        <button
          type="submit"
          className="bg-blue-900 rounded-lg text-white hover:cursor-pointer uppercase"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
