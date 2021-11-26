import React from "react";
import { Search } from "@material-ui/icons";
import styles from "./SearchBar.module.css";

const SearchBar: React.FC = () => {
  return (
    <div className={`${styles["searchbar"]}`}>
      <Search className={styles["searchbar__icon"]} />
      <input
        type="search"
        placeholder="Search"
        aria-label="Search Products"
        name="search"
        id="search"
        className={styles["searchbar__input"]}
      />
    </div>
  );
};

export default SearchBar;
