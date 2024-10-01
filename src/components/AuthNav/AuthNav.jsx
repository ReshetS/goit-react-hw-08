import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./AuthNav.module.css";

function makeClass({ isActive }) {
  return clsx(style.navLink, isActive && style.isActive);
}

export default function AuthNav() {
  return (
    <div className={style.nav}>
      <NavLink to="/login" className={makeClass}>
        Log in
      </NavLink>
      <NavLink to="/register" className={makeClass}>
        Register
      </NavLink>
    </div>
  );
}
