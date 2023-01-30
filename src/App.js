import React, { useState } from "react";
import "./App.css";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { List } from "./components/list";
import { Todo } from "./components/todo";
import { Project } from "./components/projects";
import FilterButton from "./components/filterButtons";
import { nanoid } from "nanoid";

function App(props) {
  const [currentView, setCurrentView] = useState("Login");
  const [tasks, setTasks] = useState(props.tasks);
  const [projects, setProjects] = useState(props.projects);

  const toggleView = (viewName) => {
    setCurrentView(viewName);
  };

  const [filter, setFilter] = useState("All");
  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);
  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));

  const [projectfilter, setprojectFilter] = useState("All");
  const PROJECT_FILTER_MAP = {
    All: () => true,
    Active: (project) => !project.completed,
    Completed: (project) => project.completed,
  };

  const PROJECT_FILTER_NAMES = Object.keys(FILTER_MAP);
  const projectfilterList = PROJECT_FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === projectfilter}
      setFilter={setprojectFilter}
    />
  ));

  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        startDate={task.startDate}
        endDate={task.endDate}
        priority={task.priority}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    ));

  const projectList = projects
    .filter(PROJECT_FILTER_MAP[projectfilter])
    .map((project) => (
      <Project
        id={project.id}
        name={project.name}
        description={project.description}
        completed={project.completed}
        key={project.id}
        toggleProjectCompleted={toggleProjectCompleted}
        editProject={editProject}
        deleteProject={deleteProject}
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

  function addProject(data) {
    // alert(data);
    const newProject = {
      id: `project-${nanoid()}`,
      name: data.name,
      description: data.description,
      completed: false,
    };
    setProjects([...projects, newProject]);
  }

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun}`;

  const projectsNoun = projectList.length !== 1 ? "Projects" : "Project";
  const projectheadingText = `${projectList.length} ${projectsNoun}`;

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function toggleProjectCompleted(id) {
    const updatedProjects = projects.map((project) => {
      if (id === project.id) {
        return { ...project, completed: !project.completed };
      }
      return project;
    });
    setProjects(updatedProjects);
  }

  function editTask(id, updatedData) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        //
        return {
          ...task,
          name: updatedData.name,
          startDate: updatedData.startDate,
          endDate: updatedData.endDate,
          priority: updatedData.priority,
        };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function editProject(id, updatedData) {
    const editedProjectList = projects.map((project) => {
      // if this task has the same ID as the edited task
      if (id === project.id) {
        //
        return {
          ...project,
          name: updatedData.name,
          description: updatedData.description,
        };
      }
      return project;
    });
    setProjects(editedProjectList);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function deleteProject(id) {
    const remainingProjects = projects.filter((project) => id !== project.id);
    setProjects(remainingProjects);
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
              taskCount={headingText}
              displayButtons={filterList}
              displayProjects={projectList}
              addProject={addProject}
              projectCount={projectheadingText}
              displayProjectButtons={projectfilterList}
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
