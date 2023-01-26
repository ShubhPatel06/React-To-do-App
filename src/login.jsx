import React, { useState } from "react";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  return (
    <div className="form-container bg-white p-8 w-96 rounded-lg">
      <form className="loginForm" onSubmit={handleSubmit}>
        <h1 className="text-3xl mb-4 font-bold text-gray-800">Login</h1>

        <div className="input-container flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-container flex flex-col mb-4">
          <label htmlFor="password" className="mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            className="rounded-md border-2 p-3 border-gray-300 focus:outline-gray-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          id="login-btn"
          className="btn py-2.5 px-5 w-full bg-green-500 rounded-md text-white mt-3 hover:bg-green-400"
          onClick={() => props.onFormSwitch("List")}
        >
          Sign In
        </button>
      </form>
      <div className="text-center mt-4">
        <a className="text-sm" onClick={() => props.onFormSwitch("Register")}>
          Don't have an Account?{" "}
          <span className="text-cyan-600 hover:text-cyan-500 hover:cursor-pointer">
            Sign Up
          </span>
        </a>
      </div>
    </div>
  );
};
