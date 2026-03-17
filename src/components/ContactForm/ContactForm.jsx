import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import css from "./ContactForm.module.css";
import toast from "react-hot-toast";
import { addContactThunk } from "../../redux/contacts/operations";

const validationSchema = Yup.object({
  username: Yup.string()
    .required("Name is required")
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be at most 50 characters"),
  phone: Yup.string()
    .required("Phone number is required")
    .min(3, "Phone must be at least 3 characters")
    .max(50, "Phone must be at most 50 characters"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactThunk({ name: values.username, number: values.phone }));
    toast.success('Contact added');
    resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.wrapper}>
        <p className={css.title}>New Contact</p>

        <div className={css.itemWrapper}>
          <label className={css.label}>Name</label>
          <Field
            type="text"
            name="username"
            className={css.input}
            placeholder="Enter contact name"
          />
          <ErrorMessage name="username" component="div" className={css.error} />
        </div>

        <div className={css.itemWrapper}>
          <label className={css.label}>Phone Number</label>
          <Field
            type="text"
            name="phone"
            className={css.input}
            placeholder="Enter phone number"
          />
          <ErrorMessage name="phone" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.btn}>
          + Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
