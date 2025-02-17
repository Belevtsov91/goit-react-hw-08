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
            <h2>Phonebook</h2>
            <nav>
                <ul className={css.list}>
                    {isLoggedIn && <UserMenu />}
                    <Navigation />
                    {!isLoggedIn && <AuthNav />}
                </ul>
            </nav>
        </header>
    );
}

export default AppBar;
