import React, { Fragment, useState } from "react";
import SearchResults from "./components/SearchResults";
import StatisticsBox from "./components/StatisticsBox";
import "./css/main.css";

const HOST = process.env.REACT_APP_HOST_PREFIX;
// const HOST = "http://localhost:8765";

function App() {
  //Write your javascript here, or roll your own. It's up to you.
  //Make your ajax call to http://localhost:8765/api/index.php here
  const [countries, setCountries] = useState([]);

  const handleGetCountries = async () => {
    const response = await fetch(`${HOST}/api/index.php`, {
      method: "post",
      mode: "cors",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify({ country: "estonia" }),
    });
    console.log({ response });
    const r = await response.json();
    console.log({ r });
    setCountries(r);
  };

  return (
    <div className="App">
      <p>Country Search within React</p>
      <button onClick={handleGetCountries}>Search</button>
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
