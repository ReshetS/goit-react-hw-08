import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading, selectError } from "../../redux/contacts/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import style from "./ContactsPage.module.css";

export default function ContactsPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <Error>{error}</Error>}
      {!error && !loading && <ContactList />}
    </div>
  );
}
