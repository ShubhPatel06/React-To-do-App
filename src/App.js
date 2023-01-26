import React, { useState } from "react";
import "./App.css";
import { Login } from "./login";
import { Register } from "./register";
import { List } from "./list";

function App() {
  const [currentView, setCurrentView] = useState("Login");

  const toggleView = (viewName) => {
    setCurrentView(viewName);
  };
  return (
    <div className="App flex justify-center items-center h-screen bg-gradient-to-b from-purple-500 to-pink-500">
      {(() => {
        if (currentView === "Login") {
          return <Login onFormSwitch={toggleView} />;
        } else if (currentView === "Register") {
          return <Register onFormSwitch={toggleView} />;
        } else if (currentView === "List") {
          return <List onFormSwitch={toggleView} />;
        } else {
          return <Login onFormSwitch={toggleView} />;
        }
      })()}
    </div>
  );
}

export default App;
