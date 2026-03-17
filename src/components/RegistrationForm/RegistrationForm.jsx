import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../redux/auth/operations.js";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const initialValues = { name: "", email: "", password: "" };

    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values));
        options.resetForm();
    };

    if (isLoggedIn) {
        return <Navigate to="/contacts" />;
    }

    return (
        <div className={css.panel}>
            <Link to="/" className={css.homeLink}>← Home</Link>

            <p className={css.eyebrow}>◈ Create Account</p>
            <h2 className={css.title}>Register</h2>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={css.form}>
                    <div className={css.fieldWrap}>
                        <label className={css.label}>Name</label>
                        <Field
                            name="name"
                            type="text"
                            placeholder="Your full name"
                            className={css.input}
                        />
                    </div>
                    <div className={css.fieldWrap}>
                        <label className={css.label}>Email</label>
                        <Field
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            className={css.input}
                        />
                    </div>
                    <div className={css.fieldWrap}>
                        <label className={css.label}>Password</label>
                        <Field
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            className={css.input}
                        />
                    </div>
                    <button type="submit" className={css.submitBtn}>
                        Create Account →
                    </button>
                </Form>
            </Formik>

            <p className={css.footer}>
                Already have an account? <Link to="/login">Sign in</Link>
            </p>
        </div>
    );
}

export default RegistrationForm;
