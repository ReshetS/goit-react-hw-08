import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import {
  selectContacts,
  selectFilteredContacts,
} from "../../redux/contacts/selectors";
import style from "./ContactList.module.css";

export default function ContactList() {
  const allContacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  if (filteredContacts.length === 0) {
    return (
      <p className={style.noContactsMessage}>
        {allContacts.length === 0
          ? "There are no contacts in a phonebook"
          : "There are no contacts matching your query"}
      </p>
    );
  }
  return (
    <ul className={style.contactList}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
