import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    return (
        <li>
            <div className={css.userMenu}>
                <span className={css.greeting}>
                    Hello, <span className={css.name}>{user.name}</span>
                </span>
                <button
                    className={css.logoutBtn}
                    onClick={() => dispatch(logoutThunk())}
                >
                    Exit
                </button>
            </div>
        </li>
    );
}

export default UserMenu;
