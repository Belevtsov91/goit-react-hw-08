import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/filtersSlice";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.label}>Search contacts</label>
      <div className={css.inputWrap}>
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          className={css.input}
          placeholder="Type a name..."
        />
      </div>
    </div>
  );
};

export default SearchBox;
