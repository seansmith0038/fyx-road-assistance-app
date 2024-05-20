import React from "react";
import { LiaHomeSolid, LiaTaxiSolid, LiaBorderAllSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/", icon: <LiaHomeSolid /> },
  { name: "My Vehicles", path: "/myvehicles", icon: <LiaTaxiSolid /> },
  { name: "Services", path: "/services", icon: <LiaBorderAllSolid /> },
];

const Navbar = () => {
  return (
    <nav className="mt-auto flex h-fit w-full items-center justify-between px-4 py-2 shadow-3xl sm:hidden">
      {links.map((link) => (
        <NavLink
          className={({ isActive }) => {
            return isActive
              ? "flex h-fit gap-1 items-center rounded-lg border bg-teal-800 px-3 py-2 text-teal-100"
              : "flex h-fit gap-1 items-center px-2 py-1 text-teal-800 hover:text-teal-700";
          }}
          href={link.path}
          key={link.path}
          to={link.path}
        >
          <span className="text-2xl">{link.icon}</span>

          <span className="text-sm">{link.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
