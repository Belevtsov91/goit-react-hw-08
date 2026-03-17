import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <header className={css.header}>
            <h2 className={css.logo}>NexPhone</h2>
            <nav className={css.nav}>
                <ul className={css.list}>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </ul>
            </nav>
        </header>
    );
}

export default AppBar;
