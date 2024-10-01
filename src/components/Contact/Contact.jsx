import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { deleteContact } from "../../redux/contacts/operations";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  function handleClick(id) {
    dispatch(deleteContact(id));
  }

  return (
    <div className={style.contact}>
      <div className={style.contactInfo}>
        <p className={style.contactName}>
          <BsFillPersonFill />
          &nbsp;
          {contact.name}
        </p>
        <p className={style.contactTel}>
          <BsFillTelephoneFill />
          &nbsp;
          <a href={`tel:${contact.number}`}>{contact.number}</a>
        </p>
      </div>
      <button
        className={style.contactDeleteBtn}
        onClick={() => handleClick(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
