import LoginForm from "../../components/LoginForm/LoginForm";
import style from "./LoginPage.module.css";

export default function LoginPage() {
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Log into your account</h2>
      <LoginForm />
    </div>
  );
}
