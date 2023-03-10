import React, { useState } from "react";

export const Todo = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const [formInputData, setformInputData] = useState({
    task: props.name,
    startDate: props.startDate,
    endDate: props.endDate,
    priority: props.priority,
  });

  const handleChange = (e) => {
    const newInput = (data) => ({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(newInput);

    setformInputData(newInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      name: formInputData.task,
      startDate: formInputData.startDate,
      endDate: formInputData.endDate,
      priority: formInputData.priority,
    };

    props.editTask(props.id, newData);
    setShowModal(false);
  };
  return (
    <div className="hover:bg-slate-50">
      <li className="task mb-5 flex flex-col items-start gap-3">
        <div className="task-info flex items-center gap-1">
          <input
            type="checkbox"
            className="w-4 h-4"
            name=""
            id={props.id}
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
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
        <div className="action-box flex justify-start items-center gap-4 ">
          <button
            className="bg-green-600 px-3 py-1 hover:bg-green-500 text-white rounded-md"
            onClick={() => setShowModal(true)}
          >
            Edit
          </button>
          <button
            className="bg-red-600 px-3 py-1 hover:bg-red-500 text-white rounded-md"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete
          </button>
        </div>
      </li>
      <hr className="w-full border-1 border-gray-300 mb-2" />
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Edit Task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ??
                    </span>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="input-container flex flex-col mb-4">
                      <label htmlFor="task" className="mb-2">
                        Task
                      </label>
                      <input
                        type="text"
                        id="task"
                        name="task"
                        value={formInputData.task}
                        onChange={handleChange}
                        className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
                      />
                    </div>
                    <div className="input-container flex flex-col mb-4">
                      <label htmlFor="startDate" className="mb-2">
                        Start Date
                      </label>
                      <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        value={formInputData.startDate}
                        onChange={handleChange}
                        className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
                      />
                    </div>
                    <div className="input-container flex flex-col mb-4">
                      <label htmlFor="endDate" className="mb-2">
                        End Date
                      </label>
                      <input
                        type="date"
                        id="endDate"
                        name="endDate"
                        value={formInputData.endDate}
                        onChange={handleChange}
                        className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
                      />
                    </div>
                    <div className="input-container flex flex-col mb-4">
                      <label htmlFor="priority" className="mb-2">
                        Priority
                      </label>
                      <input
                        type="text"
                        id="priority"
                        name="priority"
                        value={formInputData.priority}
                        onChange={handleChange}
                        className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Update Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};
