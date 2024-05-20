import React from "react";
import { NavLink } from "react-router-dom";
import useRegister from "../../features/register/useRegister";

const Register = () => {
  const { register, isLoading } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    register({ username, password });
  };

  return (
    <div>
      <div className="flex h-screen flex-col items-center justify-center p-4 text-teal-800">
        <img src="/logo.svg" alt="FYX logo" className="mr-auto h-12 w-fit" />

        <form
          className="flex h-full w-full flex-col items-center justify-center space-y-4 sm:w-1/4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold">Register</h2>
          <div className="mr-auto">
            <p className="text-md text-teal-700">Let&apos;s Get Started</p>
            <p className="text-sm text-teal-700">create an account</p>
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              placeholder="Maximilian"
              className="rounded border border-teal-400 p-2"
            />
          </div>

          <div className="flex w-full flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="********"
              className="rounded border border-teal-400 p-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded bg-teal-700 p-2 text-white"
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <NavLink to="/login" className="hover:text-blue-500">
            Already have an account? Login
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Register;
