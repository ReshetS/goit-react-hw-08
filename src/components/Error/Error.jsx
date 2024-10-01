import style from "./Error.module.css";

export default function Error({ children }) {
  return <div className={style.errorMessage}>{children}</div>;
}
