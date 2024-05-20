import { NavLink } from "react-router-dom";
import useLogin from "../../features/register/useLogin";

const Login = () => {
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    login({ username, password });
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center flex-col p-4 text-teal-800">
        <img src="/logo.svg" alt="FYX logo" className="h-12 mr-auto w-fit" />

        <form
          className="flex w-full sm:w-1/4 h-full flex-col items-center justify-center space-y-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-3xl font-bold">Login</h2>
          <div className="mr-auto">
            <p className="text-md text-teal-700">Let&apos;s Get Started</p>
            <p className="text-sm text-teal-700">login to your account</p>
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
            {isLoading ? "Logging in..." : "Login"}
          </button>

          <NavLink to="/register" className="hover:text-blue-500">
            Do not have an account? Register
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default Login;
