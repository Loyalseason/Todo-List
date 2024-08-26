import React from "react";
import todo2 from "../assets/todo2.svg";
function Header({ totalItems }) {
  return (
    <div className="p-10">
      <div className="flex items-center justify-center gap-7">
        <h1 className="uppercase font-semibold font-serif text-center ">
          To-Do List
        </h1>
        <img src={todo2} alt="image" className="w-10" />
      </div>

      <div className="flex justify-around ">
        <div>Tuesday, 31st August</div>
        <div>{totalItems <= 1 ? `Task` : `${totalItems} Tasks`}</div>
      </div>
    </div>
  );
}

export default Header;
