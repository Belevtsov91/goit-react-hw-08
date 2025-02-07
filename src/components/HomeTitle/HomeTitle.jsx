import { Link } from "react-router-dom";
import css from "./HomeTitle.module.css";


const HomeTitle = () => {
    return(
        <div className={css.wrapper}>
            <h1>Welcome!</h1>
            <p>Have a graete day!</p>
            <p>Please <Link to='/register'>Sign up</Link>
            </p>
        </div>
    )
}

export default HomeTitle;