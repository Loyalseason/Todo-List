import React from "react";
import todo2 from "../assets/todo2.svg";
function Header({ totalItems }) {
  const currentDate = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="p-10">
      <div className="flex items-center justify-center gap-7">
        <h1 className="uppercase font-semibold font-serif text-center ">
          To-Do List
        </h1>
        <img src={todo2} alt="image" className="w-10" />
      </div>

      <div className="flex justify-around ">
        <div>{formattedDate}</div>
        <div>{totalItems <= 1 ? `Task` : `${totalItems} Tasks`}</div>
      </div>
    </div>
  );
}

export default Header;
