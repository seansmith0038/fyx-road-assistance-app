import { Outlet } from "react-router";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import {
  LiaBorderAllSolid,
  LiaHomeSolid,
  LiaTaxiSolid,
  LiaUser,
} from "react-icons/lia";
import { useEffect, useState } from "react";
import { apiCheckAuth } from "../api/apiAuth";

const AppLayout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiCheckAuth();

      if (data.role === "admin") {
        setIsAdmin(true);
      }

      setIsLoading(false);
    };

    fetchUser();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="grid h-[100dvh] w-[100dvw] sm:grid-cols-[auto,1fr,auto]">
      <Sidebar isAdmin={isAdmin} />

      <main className="h-full overflow-scroll">
        <Outlet />
      </main>

      <div className="hidden h-full w-80 shadow-md sm:flex"></div>

      {!isAdmin && <Navbar />}
    </div>
  );
};

export default AppLayout;

const Sidebar = ({ isAdmin }) => {
  return (
    <div className="hidden flex-col gap-4 p-4 shadow-lg sm:flex">
      <div className="flex items-center justify-between rounded-md bg-teal-500 p-4">
        <img
          src="/logo.svg"
          alt="FYX logo"
          className="h-12 w-fit invert filter"
        />
      </div>

      <div className="flex w-80 flex-col gap-4">
        {isAdmin && (
          <>
            <p className="text-sm text-teal-800">Admin view</p>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "flex h-12 items-center gap-2 rounded-md border bg-teal-800 px-4 text-teal-100"
                  : "flex h-12 items-center gap-2 px-4 text-teal-800 hover:text-teal-700";
              }}
              to="/admin/dashboard"
            >
              <LiaHomeSolid className="text-3xl" /> Admin Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "flex h-12 items-center gap-2 rounded-md border bg-teal-800 px-4 text-teal-100"
                  : "flex h-12 items-center gap-2 px-4 text-teal-800 hover:text-teal-700";
              }}
              to="/admin/users"
            >
              <LiaUser className="text-3xl" /> Users
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "flex h-12 items-center gap-2 rounded-md border bg-teal-800 px-4 text-teal-100"
                  : "flex h-12 items-center gap-2 px-4 text-teal-800 hover:text-teal-700";
              }}
              to="/admin/vehicles"
            >
              <LiaTaxiSolid className="text-3xl" /> Vehicles
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "flex h-12 items-center gap-2 rounded-md border bg-teal-800 px-4 text-teal-100"
                  : "flex h-12 items-center gap-2 px-4 text-teal-800 hover:text-teal-700";
              }}
              to="/admin/records"
            >
              <LiaBorderAllSolid className="text-3xl" /> Records
            </NavLink>
            <p className="text-sm text-teal-800">User view</p>
          </>
        )}

        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "flex h-12 items-center gap-2 rounded-md border bg-teal-800 px-4 text-teal-100"
              : "flex h-12 items-center gap-2 px-4 text-teal-800 hover:text-teal-700";
          }}
          to="/"
        >
          <LiaHomeSolid className="text-3xl" /> Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "flex h-12 items-center gap-2 rounded-md border bg-teal-800 px-4 text-teal-100"
              : "flex h-12 items-center gap-2 px-4 text-teal-800 hover:text-teal-700";
          }}
          to="/myvehicles"
        >
          <LiaTaxiSolid className="text-3xl" /> Vehicles
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "flex h-12 items-center gap-2 rounded-md border bg-teal-800 px-4 text-teal-100"
              : "flex h-12 items-center gap-2 px-4 text-teal-800 hover:text-teal-700";
          }}
          to="/services"
        >
          <LiaBorderAllSolid className="text-3xl" /> Services
        </NavLink>
      </div>
    </div>
  );
};
