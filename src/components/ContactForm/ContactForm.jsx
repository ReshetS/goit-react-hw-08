import { useId } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact } from "../../redux/contacts/operations";

import * as Yup from "yup";

import style from "./ContactForm.module.css";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short!")
    .max(50, "Too long!"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    const contact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(contact));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.fieldWrapper}>
          <label htmlFor={nameFieldId} className={style.label}>
            Name
          </label>
          <Field
            name="name"
            type="text"
            id={nameFieldId}
            className={style.field}
          />
          <ErrorMessage
            name="name"
            component="span"
            className={style.errorMsg}
          />
        </div>
        <div className={style.fieldWrapper}>
          <label htmlFor={numberFieldId} className={style.label}>
            Number
          </label>
          <Field
            name="number"
            type="text"
            id={numberFieldId}
            className={style.field}
          />
          <ErrorMessage
            name="number"
            component="span"
            className={style.errorMsg}
          />
        </div>
        <button type="submit" className={style.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
