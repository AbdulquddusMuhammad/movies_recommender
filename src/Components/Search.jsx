import React from "react";
// import searchImg from "C:/Learning React/my-own-react-app/dist/search.svg";
import searchImg from "../../public/search.svg";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src={searchImg} alt="" />
        <input
          type="text"
          placeholder="Search through Thousands of Videos"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Search;
