import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import css from "./Register.module.css";

const Register = () => {
    return (
        <div className={css.page}>
            <RegistrationForm />
        </div>
    );
}

export default Register;
