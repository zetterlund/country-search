import React, { Fragment, useState, useEffect } from "react";

function SearchForm(props) {
  const [searchType, setSearchType] = useState("country-name");
  const [searchString, setSearchString] = useState("");

  const handleChange = (e) => {
    // Whenever the user changes the search form parameters, update the component state to reflect those changes
    const { name, value } = e.target;
    if (name === "searchString") {
      setSearchString(value);
    }
    if (name === "searchType") {
      setSearchType(value);
    }
  };

  const handleSubmit = (e) => {
    // (Prevent default HTML form submission behavior for One-Page Application)
    e.preventDefault();

    // Pass values up and trigger search submission in parent component
    props.searchSubmit(searchType, searchString);
  };

  return (
    <Fragment>
      <h2>Search Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchString}
          name="searchString"
          onChange={handleChange}
        />
        <div id="search-type-selection">
          <div>
            <input
              type="radio"
              value="country-name"
              name="searchType"
              onChange={handleChange}
              checked={searchType === "country-name"}
            />
            <label>Country name</label>
          </div>
          <div>
            <input
              type="radio"
              value="full-name"
              name="searchType"
              onChange={handleChange}
              checked={searchType === "full-name"}
            />
            <label>Full name</label>
          </div>{" "}
          <div>
            <input
              type="radio"
              value="country-code"
              name="searchType"
              onChange={handleChange}
              checked={searchType === "country-code"}
            />
            <label>Country code</label>
          </div>
        </div>
        <button type="submit">🌍 Search</button>
      </form>
    </Fragment>
  );
}

export default SearchForm;
