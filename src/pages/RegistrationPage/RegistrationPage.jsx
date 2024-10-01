import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from "./RegistrationPage.module.css";

export default function RegistrationPage() {
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Register your account</h2>
      <RegistrationForm />
    </div>
  );
}
