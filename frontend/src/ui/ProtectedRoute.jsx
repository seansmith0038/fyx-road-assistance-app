import { NavLink, Navigate } from "react-router-dom";
import Loader from "./Loader";
import { apiCheckAuth } from "../api/apiAuth";
import { useEffect, useState } from "react";

const ProtectedRoute = ({ children }) => {
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    apiCheckAuth()
      .then((data) => {})
      .catch((error) => {
        setIsError(true);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    if (error.response.status === 401) {
      return <Navigate to="/login" />;
    }

    return (
      <div className="flex h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-xl text-red-500">{error.response.data.message}</h1>

        <NavLink to="/login" className="rounded bg-blue-500 p-2 text-white">
          Go to login
        </NavLink>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
