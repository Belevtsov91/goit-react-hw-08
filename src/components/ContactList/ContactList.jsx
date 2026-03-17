import { useSelector, useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/contactsSlice";
import { deleteContactsThunk } from "../../redux/contacts/operations";

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (id) => {
    dispatch(deleteContactsThunk(id));
  };

  if (visibleContacts.length === 0) {
    return <p className={css.empty}>No contacts found.</p>;
  }

  return (
    <ul className={css.list}>
      {visibleContacts.map((element) => (
        <li key={element.id} className={css.listItem}>
          <Contact
            id={element.id}
            name={element.name}
            phoneNumber={element.number}
            deleteContact={() => handleDeleteContact(element.id)}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
