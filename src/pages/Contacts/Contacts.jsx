import { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { addContactThunk, deleteContactsThunk, fetchContacts } from "../../redux/contacts/operations.js";
import { setFilter } from "../../redux/contacts/contactsSlice";
import { selectIsLoggedIn, selectIsRefreshing } from "../../redux/auth/selectors";
import css from "./Contacts.module.css";

const Contacts = () => {
    const contacts = useSelector((state) => state.contacts.items);
    const filter = useSelector((state) => state.contacts.filter);
    const isLoading = useSelector((state) => state.contacts.isLoading);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoggedIn || isRefreshing) return;
        dispatch(fetchContacts());
    }, [dispatch, isLoggedIn, isRefreshing]);

    const handleAddContact = (newContact) => {
        dispatch(addContactThunk(newContact));
    };

    const handleDeleteContact = (id) => {
        dispatch(deleteContactsThunk(id));
    };

    const handleSetFilter = (value) => {
        dispatch(setFilter(value));
    };

    const filteredValues = () => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    };

    return (
        <div className={css.page}>
            <h1 className={css.heading}>Phonebook</h1>

            {isLoading && <div className="loader" />}

            <div className={css.formSection}>
                <ContactForm addContact={handleAddContact} />
            </div>

            <div className={css.searchSection}>
                <SearchBox
                    inputValue={filter}
                    setInputValue={handleSetFilter}
                />
            </div>

            <div className={css.listSection}>
                <ContactList
                    contactData={filteredValues()}
                    deleteContact={handleDeleteContact}
                />
            </div>
        </div>
    );
};

export default Contacts;
