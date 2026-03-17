import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";

const getClass = ({ isActive }) =>
    isActive
        ? `${css.link} ${css.linkActive}`
        : css.link;

export const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <ul className={css.navList}>
            <li className={css.listItem}>
                <NavLink to="/" end className={getClass}>
                    Home
                </NavLink>
            </li>
            {isLoggedIn && (
                <li className={css.listItem}>
                    <NavLink to="/contacts" className={getClass}>
                        Contacts
                    </NavLink>
                </li>
            )}
        </ul>
    );
}

export default Navigation;
