import React, { Fragment, useState } from "react";

import getCountries from "./functions/getCountries";
import SearchForm from "./components/SearchForm";
import ErrorBox from "./components/ErrorBox";
import SearchResults from "./components/SearchResults";
import StatisticsBox from "./components/StatisticsBox";
import "./css/main.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  const handleSearchSubmit = async (searchType, searchString) => {
    // Call backend service to get country list
    const { error, countries } = await getCountries(searchType, searchString);

    // Update component state with results
    setError(error);
    setCountries(countries);
  };

  return (
    <div className="App">
      <h1>Country Search</h1>
      <SearchForm searchSubmit={handleSearchSubmit} />
      {error && <ErrorBox error={error} />}
      {countries.length > 0 && (
        <Fragment>
          <SearchResults countries={countries} />
          <StatisticsBox countries={countries} />
        </Fragment>
      )}
    </div>
  );
}

export default App;
