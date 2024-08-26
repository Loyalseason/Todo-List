import React from "react";
import delSvg from "../assets/delete.svg";

function TaskList({ itemList }) {
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
              className="border-b-2 flex justify-between items-center p-2"
            >
              {item}
              <button>
                <img
                  className="w-6 hover:bg-slate-300 rounded-sm"
                  src={delSvg}
                  alt="delete"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
