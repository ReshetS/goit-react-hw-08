import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={style.wrapper}>
      <p className={style.notFoundText}>
        The page you are looking for
        <br />
        does not exist
      </p>
      <Link className={style.returnLink} to="/">
        Return to Homepage
      </Link>
    </div>
  );
}
