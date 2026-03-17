import LoginForm from "../../components/LoginForm/LoginForm";
import css from "./Login.module.css";

const Login = () => {
    return (
        <div className={css.page}>
            <LoginForm />
        </div>
    );
}

export default Login;
