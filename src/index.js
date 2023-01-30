import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const DATA = [
  {
    id: "todo-0",
    name: "Eat",
    startDate: "28-01-2023",
    endDate: "31-01-2023",
    priority: "Medium",
    completed: true,
  },
  {
    id: "todo-1",
    name: "Sleep",
    startDate: "28-01-2023",
    endDate: "01-02-2023",
    priority: "High",
    completed: false,
  },
  {
    id: "todo-2",
    name: "Code",
    startDate: "28-01-2023",
    endDate: "30-01-2023",
    priority: "Low",
    completed: false,
  },
];

const PROJECT_DATA = [
  {
    id: "project-0",
    name: "To do list",
    description: "A to do list implemented in React JS",
    completed: true,
  },
  {
    id: "project-1",
    name: "Ecommerce",
    description: "An ecommerce to be implemented in Laravel",
    completed: false,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} projects={PROJECT_DATA} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
