import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";

import style from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required!"),
  password: Yup.string().required("Required!"),
});

export default function LoginForm() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  function handleSubmit(values, actions) {
    dispatch(login(values));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        <label className={style.label}>
          Email
          <Field type="email" name="email" />
          <ErrorMessage className={style.error} name="email" component="span" />
        </label>
        <label className={style.label}>
          Password
          <Field type="password" name="password" />
          <ErrorMessage
            className={style.error}
            name="password"
            component="span"
          />
        </label>
        <button type="submit" disabled={isLoading}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
