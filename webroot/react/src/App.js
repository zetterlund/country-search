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

  const myList = ["first", "second", "third"];

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

    /* Process response */
    if (response["result"] === "success") {
      // Success
      setCountries(response["data"]);
    } else {
      // Error
      setCountries([]);
      setError(response["result"]);
    }
  };

  return (
    <div className="App">
      <h1>Country Search</h1>

      <p>
        {myList.reduce((a, c) => {
          return a + ",, " + c;
        })}
      </p>

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
