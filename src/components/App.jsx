import "./App.css";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

export default function App() {
  // const [inputValue, setInputValue] = useState("");
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem("saved-contacts");
  //   if (savedContacts !== null) {
  //     return JSON.parse(savedContacts);
  //   }
  //   return contactsList;
  // });

  // useEffect(() => {
  //   window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const handleChange = (evt) => {
  //   console.log(evt.target.value);
  // };

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // const handleAddContact = (newContact) => {
  //   setContacts((prevContacts) => [
  //     ...prevContacts,
  //     {
  //       ...newContact,
  //       id: nanoid(10),
  //     },
  //   ]);
  // };

  // const handleDeleteContact = () => {
  //   console.log("delete");
  // };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
