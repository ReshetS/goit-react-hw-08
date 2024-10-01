import { useSelector } from "react-redux";

import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import style from "./AppBar.module.css";

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={style.navBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </nav>
  );
}
