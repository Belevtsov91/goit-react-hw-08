import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    /* Close drawer on route change */
    useEffect(() => { setIsOpen(false); }, [location]);

    /* Lock body scroll when drawer is open */
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    return (
        <header className={css.header}>
            <h2 className={css.logo}>NexPhone</h2>

            {/* ── Desktop nav (≥ 640px) ── */}
            <nav className={css.desktopNav}>
                <ul className={css.list}>
                    <Navigation />
                    {isLoggedIn ? <UserMenu /> : <AuthNav />}
                </ul>
            </nav>

            {/* ── Hamburger button (< 640px) ── */}
            <button
                className={`${css.burger} ${isOpen ? css.burgerOpen : ""}`}
                onClick={() => setIsOpen(v => !v)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
            >
                <span className={css.burgerLine} />
                <span className={css.burgerLine} />
                <span className={css.burgerLine} />
            </button>

            {/* ── Mobile drawer ── */}
            {isOpen && (
                <>
                    <div
                        className={css.backdrop}
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    <nav className={css.drawer} aria-label="Mobile navigation">
                        <ul className={css.drawerList}>
                            <Navigation />
                            {isLoggedIn ? <UserMenu /> : <AuthNav />}
                        </ul>
                    </nav>
                </>
            )}
        </header>
    );
};

export default AppBar;
