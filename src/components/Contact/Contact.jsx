import { useDispatch } from "react-redux";
import man from "./man.svg";
import phone from "./phone.svg";
import css from "./Contact.module.css";
import toast from "react-hot-toast";
import { deleteContactsThunk } from "../../redux/contacts/operations";

const Contact = ({ name, phoneNumber, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContactsThunk(id));
    toast.success('Contact deleted');
  };

  return (
    <div className={css.card}>
      <div className={css.info}>
        <div className={css.row}>
          <img src={man} alt="" className={css.icon} />
          <p className={css.nameText}>{name}</p>
        </div>
        <div className={css.row}>
          <img src={phone} alt="" className={css.icon} />
          <p className={css.phoneText}>{phoneNumber}</p>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
