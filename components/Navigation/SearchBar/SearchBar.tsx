import { Search } from "@material-ui/icons";
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div>
      <Search />
      <input
        type="search"
        placeholder="Search"
        aria-label="Search Products"
        name="search"
        id="search"
      />
      ;
    </div>
  );
};

export default SearchBar;
