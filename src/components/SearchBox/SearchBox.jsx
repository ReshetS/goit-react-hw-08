import { useId } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

import style from "./SearchBox.module.css";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const query = useSelector(selectNameFilter);

  function handleSearch(query) {
    dispatch(changeFilter(query));
  }

  return (
    <div className={style.search}>
      <label htmlFor={id} className={style.searchLabel}>
        Find contacts by name
      </label>
      <div className={style.relative}>
        <div className={style.searchIcon}>
          <FiSearch size="24px" />
        </div>
        <input
          type="text"
          name="query"
          id={id}
          className={style.searchInput}
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
