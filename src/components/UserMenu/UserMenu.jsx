import style from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.nav}>
      <p className={style.greeting}>
        Welcome, <span className={style.userName}>{user.name}!</span>
      </p>
      <button
        type="button"
        className={style.logoutBtn}
        onClick={() => dispatch(logout())}
      >
        Log out
      </button>
    </div>
  );
}
