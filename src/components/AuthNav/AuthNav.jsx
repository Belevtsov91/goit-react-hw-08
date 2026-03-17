import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";

const getClass = ({ isActive }) =>
    isActive
        ? `${css.link} ${css.linkActive}`
        : css.link;

export const AuthNav = () => {
    return (
        <>
            <li className={css.listItem}>
                <NavLink to="/login" className={getClass}>
                    Log In
                </NavLink>
            </li>
            <li className={css.listItem}>
                <NavLink to="/register" className={({ isActive }) =>
                    isActive
                        ? `${css.link} ${css.linkCta} ${css.linkActive}`
                        : `${css.link} ${css.linkCta}`
                }>
                    Register
                </NavLink>
            </li>
        </>
    );
}

export default AuthNav;
