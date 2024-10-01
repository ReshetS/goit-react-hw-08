import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import style from "./Navigation.module.css";

function makeClass({ isActive }) {
  return clsx(style.navLink, isActive && style.isActive);
}

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={style.nav}>
      <NavLink to="/" className={makeClass}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={makeClass}>
          Contacts
        </NavLink>
      )}
    </div>
  );
}
