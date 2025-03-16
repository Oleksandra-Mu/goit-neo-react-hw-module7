import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { selectError, selectLoading } from "../redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && !error && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      <ContactList />
    </>
  );
}
