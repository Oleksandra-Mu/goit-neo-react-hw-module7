import PersonIcon from "@mui/icons-material/Person";
import CallIcon from "@mui/icons-material/Call";
import css from "./Contact.module.css";
import Buttons from "../Buttons/Buttons";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li key={contact.id} className={css.contactCard}>
      <div className={css.infoWrapper}>
        <div className={css.info}>
          <PersonIcon />
          <p className={css.infoText}>{contact.name}</p>
        </div>
        <div className={css.info}>
          <CallIcon />
          <p className={css.infoText}>{contact.number}</p>
        </div>
      </div>
      <Buttons tag="Delete" onClick={() => onDeleteContact(contact.id)} />
    </li>
  );
};

export default Contact;
