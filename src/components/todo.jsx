import React from "react";

export const Todo = (props) => {
  return (
    <div>
      <li className="task mb-5 flex flex-col items-start gap-3">
        <div className="task-info flex items-center gap-1">
          <input
            type="checkbox"
            className="w-4 h-4"
            name=""
            id={props.id}
            defaultChecked={props.completed}
          />
          <label htmlFor={props.id} className="text-2xl">
            {props.name}
          </label>
        </div>
        <div className="additional-info flex justify-start items-center gap-8 text-xs">
          <p>
            <span className="font-semibold">Start Date: </span>
            {props.startDate}
          </p>
          <p>
            <span className="font-semibold">End Date: </span>
            {props.endDate}
          </p>
          <p>
            <span className="font-semibold">Priority: </span>
            <span className="bg-red-200 px-3 py-1 rounded-lg font-bold ">
              {props.priority}
            </span>
          </p>
        </div>
        <div className="action-box flex justify-start items-center gap-8 ">
          <button className="bg-green-600 px-5 py-1 hover:bg-green-500 text-white rounded-md">
            Edit
          </button>
          <button className="bg-red-600 px-5 py-1 hover:bg-red-500 text-white rounded-md">
            Delete
          </button>
        </div>
      </li>
      <hr className="w-full border-1 border-gray-300 mb-2" />
    </div>
  );
};
