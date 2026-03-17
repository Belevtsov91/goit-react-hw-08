import { Field, Form, Formik } from "formik";
import css from "./LoginForm.module.css";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const LoginForm = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();

    const initialValues = { email: "", password: "" };

    const handleSubmit = (values, options) => {
        dispatch(loginThunk(values));
        options.resetForm();
    };

    if (isLoggedIn) {
        return <Navigate to="/contacts" />;
    }

    return (
        <div className={css.panel}>
            <Link to="/" className={css.homeLink}>← Home</Link>

            <p className={css.eyebrow}>◈ Authentication</p>
            <h2 className={css.title}>Sign In</h2>

            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                <Form className={css.form}>
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
                        Sign In →
                    </button>
                </Form>
            </Formik>

            <p className={css.footer}>
                No account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}

export default LoginForm;
