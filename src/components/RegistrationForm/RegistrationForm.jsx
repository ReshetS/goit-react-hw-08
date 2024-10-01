import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";
import Error from "../Error/Error";
import style from "./RegistrationForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be not longer than 50 characters"),
  email: Yup.string().email("Enter valid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(6, "Must be at least 6 characters long"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} autoComplete="off">
        {authError && <Error>{authError}</Error>}
        <label className={style.label}>
          Username
          <Field type="text" name="name" />
          <ErrorMessage className={style.error} name="name" component="span" />
        </label>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
