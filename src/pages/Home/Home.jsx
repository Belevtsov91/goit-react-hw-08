import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomeTitle from "../../components/HomeTitle/HomeTitle";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Home.module.css";

const Home = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    if (isLoggedIn) {
        return (
            <div className={css.loggedInWrap}>
                <span className={css.badge}>
                    <span className={css.badgeDot} />
                    Online
                </span>
                <h2 className={css.greeting}>Welcome Back</h2>
                <p className={css.sub}>Your phonebook is ready and waiting.</p>
                <Link to="/contacts" className={css.contactsLink}>
                    View Contacts →
                </Link>
            </div>
        );
    }

    return <HomeTitle />;
}

export default Home;
