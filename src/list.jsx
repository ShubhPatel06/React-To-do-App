import React, { useState } from "react";

export const List = (props) => {
  const [showModal, setShowModal] = React.useState(false);

  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    task: "",
    startDate: "",
    endDate: "",
    priority: "",
  });

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);
      const emptyInput = { task: "", startDate: "", endDate: "", priority: "" };
      setformInputData(emptyInput);
    }
  };

  return (
    <div className="container grid lg:grid-cols-2 gap-8 md:grid-cols-1 sm:grid-cols-1">
      <div className="list-box bg-white p-8 rounded-md">
        <div className="title-box flex justify-between items-center mb-6">
          <h1 className="m-0 text-3xl font-bold text-gray-800">To do's</h1>
          <button
            className="addBtn px-5 py-3 bg-slate-300 rounded-full text-4xl hover:bg-slate-200"
            onClick={() => setShowModal(true)}
          >
            +
          </button>
        </div>
        <div className="button-grp flex justify-around items-center gap-4 mb-6">
          <button
            type="button"
            className="px-4 py-3 w-1/3 rounded-md font-bold  bg-pink-300 hover:bg-pink-200"
          >
            All
          </button>
          <button
            type="button"
            className="px-4 py-3 w-1/3 rounded-md font-bold bg-purple-300 hover:bg-purple-200"
          >
            Active
          </button>
          <button
            type="button"
            className="px-4 py-3  w-1/3 rounded-md font-bold bg-slate-300 hover:bg-slate-200"
          >
            Completed
          </button>
        </div>
        <div className="tasks-box">
          <div className="task">
            <div className="task-info flex gap-3 ">
              <input type="checkbox" className="w-5" name="" id="" />
              <label htmlFor="" className="text-3xl">
                Task Name
              </label>
            </div>
            <div className="additional-info flex justify-around items-center">
              <p>Start Date:</p>
              <p>End Date:</p>
              <p>Priority:</p>
            </div>
            <div className="action-box">
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>

        <a className="link" onClick={() => props.onFormSwitch("Login")}>
          Back
        </a>
      </div>
      <div className="project-box bg-white">
        <h1 className="m-0 text-3xl font-bold text-gray-800">Project</h1>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-1/2 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Task</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
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
                      Save Changes
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
