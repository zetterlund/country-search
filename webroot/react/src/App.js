import React, { Fragment, useState } from "react";
import SearchForm from "./components/SearchForm";
import ErrorBox from "./components/ErrorBox";
import SearchResults from "./components/SearchResults";
import StatisticsBox from "./components/StatisticsBox";
import "./css/main.css";

const HOST = process.env.REACT_APP_HOST_PREFIX;
// const HOST = "http://localhost:8765";

function App() {
  //Write your javascript here, or roll your own. It's up to you.
  //Make your ajax call to http://localhost:8765/api/index.php here
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  const handleSearchSubmit = async (searchType, searchString) => {
    // Clear any potential errors
    setError(null);

    const rawResponse = await fetch(`${HOST}/api/index.php`, {
      method: "post",
      mode: "cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ searchType, searchString }),
    });
    const response = await rawResponse.json();

    /* Check for errors in response */
    if (response["result"] !== "success") {
      // (Error)
      setCountries([]);
      setError(response["result"]);
    } else {
      // (Success)

      // Modify results in-place to replace empty strings with "(None)"
      for (const country of response["data"]) {
        country.region = country.region === "" ? "(None)" : country.region;
        country.subregion =
          country.subregion === "" ? "(None)" : country.subregion;
      }

      // Save results as countries
      setCountries(response["data"]);
    }
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
