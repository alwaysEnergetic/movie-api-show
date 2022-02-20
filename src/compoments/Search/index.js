import React, { useState } from "react";

const Search = ({ formHandler, clearSearch }) => {
  const [formValue, setFormValues] = useState("");
  const handleChange = (e) => {
    setFormValues(e.target.value);
  };

  const handleSubmit = (e) => {
    e.persist();
    formHandler(formValue);
    e.preventDefault();
  };

  const handleClear = () => {
    clearSearch();
    setFormValues("");
  };
  return (
    <div className="search">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="search-bar"
            type="text"
            value={formValue}
            placeholder="Search movies by title or genre!"
            onChange={handleChange}
          />
        </form>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};

export default Search;
