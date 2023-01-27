import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { List } from "./components/list";
import { Todo } from "./components/todo";
// import { filterButtons } from "./components/filterButtons";
import { nanoid } from "nanoid";

function App(props) {
  const [currentView, setCurrentView] = useState("Login");
  const [tasks, setTasks] = useState(props.tasks);

  const toggleView = (viewName) => {
    setCurrentView(viewName);
  };

  const taskList = tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      startDate={task.startDate}
      endDate={task.endDate}
      priority={task.priority}
      completed={task.completed}
      key={task.id}
    />
  ));

  function addTask(data) {
    // alert(data);
    const newTask = {
      id: `todo-${nanoid()}`,
      name: data.name,
      startDate: data.startDate,
      endDate: data.endDate,
      priority: data.priority,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App flex justify-center items-center h-screen bg-gradient-to-b from-purple-500 to-pink-500">
      {(() => {
        if (currentView === "Login") {
          return <Login onFormSwitch={toggleView} />;
        } else if (currentView === "Register") {
          return <Register onFormSwitch={toggleView} />;
        } else if (currentView === "List") {
          return (
            <List
              onFormSwitch={toggleView}
              displayTasks={taskList}
              addTask={addTask}
            />
          );
        } else {
          return <Login onFormSwitch={toggleView} />;
        }
      })()}
    </div>
  );
}

export default App;
