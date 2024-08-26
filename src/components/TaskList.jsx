import React from "react";
import delSvg from "../assets/delete.svg";
import doneSvg from "../assets/done.svg";
function TaskList({ itemList, removeTask, doneTask, finishedTask }) {
  return (
    <div className="flex flex-col gap-4 p-4 font-serif w-full max-w-full">
      <h2 className="uppercase font-serif font-semibold text-center">
        Task List
      </h2>
      <div className="overflow-auto">
        <ul>
          {itemList.map((item, index) => (
            <li
              key={index}
              className={
                !doneTask[index]
                  ? "border-b-2 flex justify-between items-center p-2"
                  : "line-through border-b-2 flex justify-between items-center p-2"
              }
            >
              {item}
              <div className="flex space-x-2">
                <button onClick={() => finishedTask(index)}>
                  {!doneTask[index] ? (
                    <img
                      className="w-6 hover:bg-slate-300 rounded-sm"
                      src={doneSvg}
                      alt="done"
                    />
                  ) : (
                    ""
                  )}
                </button>
                <button onClick={() => removeTask(index)}>
                  <img
                    className="w-6 hover:bg-slate-300 rounded-sm"
                    src={delSvg}
                    alt="delete"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
